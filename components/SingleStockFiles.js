import React, { useState } from 'react'
import q1_2023_docs from './Q12023.js'
import q4_2022_docs from './Q42022.js'
import q3_2022_docs from './Q32022.js'
import q2_2022_docs from './Q22022.js'
import q1_2022_docs from './Q12022.js'

import { Link } from 'next/link'
import ListItemText from '@mui/material/ListItemText'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Checkbox,
  Popover,
  ListItem,
  List,
} from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const Grid = ({ company }) => {
  const router = useRouter()
  const { pathname } = router

  const serialNumberToDate = (serialNumber) => {
    const excelEpoch = new Date(1899, 11, 31)
    const millisecondsPerDay = 24 * 60 * 60 * 1000
    const date = new Date(
      excelEpoch.getTime() + serialNumber * millisecondsPerDay
    )
    const month = date.getMonth() + 1
    const day = date.getDate()
    const year = date.getFullYear().toString().slice(2)

    return `${month}/${day}/${year}`
  }

  const [sortField, setSortField] = useState('Date_Filed')
  const [sortDirection, setSortDirection] = useState('desc')

  // Combine the data from all quarters
  const allDocs = [
    ...q1_2023_docs,
    ...q2_2022_docs,
    ...q3_2022_docs,
    ...q4_2022_docs,
    ...q1_2022_docs,
  ]

  const filteredDocs = company
    ? allDocs.filter((doc) => doc.CIK === company.cik * 1)
    : []

  const sortData = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
    router.push({
      pathname: pathname,
      query: {
        sortField: field,
        sortDirection: sortDirection,
      },
    })
  }

  const initialFilters = {
    Doctype: [...new Set(allDocs.map((doc) => doc.Doctype))],
    Quarter: [...new Set(allDocs.map((doc) => doc.Quarter))],
    Year: [...new Set(allDocs.map((doc) => doc.Year))],
  }

  const [filteredColumns, setFilteredColumns] = useState(initialFilters)

  const [anchorEl, setAnchorEl] = useState(null)
  const [columnFilter, setColumnFilter] = useState('Doctype')

  const handleFilterClick = (event, columnName) => {
    setAnchorEl(event.currentTarget)
    setColumnFilter(columnName)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleToggleFilter = (value) => {
    setFilteredColumns((prevState) => {
      const newFilters = [...prevState[columnFilter]]
      const valueIndex = newFilters.indexOf(value)

      if (valueIndex === -1) {
        newFilters.push(value)
      } else {
        newFilters.splice(valueIndex, 1)
      }

      return { ...prevState, [columnFilter]: newFilters }
    })
  }

  const isFiltered = (value) => filteredColumns[columnFilter].includes(value)

  const open = Boolean(anchorEl)
  const id = open ? 'filter-popover' : undefined

  // Update sortedDocs to filter based on the selected filters
  const sortedDocs = [...filteredDocs]
    .filter(
      (doc) =>
        (filteredColumns.Doctype.length === 0 ||
          filteredColumns.Doctype.includes(doc.Doctype)) &&
        (filteredColumns.Quarter.length === 0 ||
          filteredColumns.Quarter.includes(doc.Quarter)) &&
        (filteredColumns.Year.length === 0 ||
          filteredColumns.Year.includes(doc.Year))
    )
    .sort((a, b) => {
      const valA = a[sortField]
      const valB = b[sortField]

      if (sortField === 'Date_Filed') {
        return sortDirection === 'asc'
          ? parseInt(valA) - parseInt(valB)
          : parseInt(valB) - parseInt(valA)
      }

      return sortDirection === 'asc'
        ? String(valA).localeCompare(valB)
        : String(valB).localeCompare(valA)
    })

  const filterOptions = Array.from(
    new Set(sortedDocs.map((doc) => doc[columnFilter]))
  )

  return (
    <>
      <Table className='grid-table'>
        <TableHead>
          <TableRow>
            <TableCell>
              Date Filed
              <IconButton onClick={() => sortData('Date_Filed')}>
                {sortField === 'Date_Filed' && sortDirection === 'asc' ? (
                  <ArrowUpwardIcon fontSize='inherit' />
                ) : (
                  <ArrowDownwardIcon fontSize='inherit' />
                )}
              </IconButton>
            </TableCell>
            <TableCell>
              Filing type
              <IconButton onClick={() => sortData('Doctype')}>
                {sortField === 'Doctype' && sortDirection === 'asc' ? (
                  <ArrowUpwardIcon fontSize='inherit' />
                ) : (
                  <ArrowDownwardIcon fontSize='inherit' />
                )}
              </IconButton>
              <IconButton onClick={(e) => handleFilterClick(e, 'Doctype')}>
                <FilterListIcon />
              </IconButton>
            </TableCell>
            <TableCell>URL</TableCell>

            <TableCell>
              Quarter
              <IconButton onClick={() => sortData('Quarter')}>
                {sortField === 'Quarter' && sortDirection === 'asc' ? (
                  <ArrowUpwardIcon fontSize='inherit' />
                ) : (
                  <ArrowDownwardIcon fontSize='inherit' />
                )}
              </IconButton>
              <IconButton onClick={(e) => handleFilterClick(e, 'Quarter')}>
                <FilterListIcon />
              </IconButton>
            </TableCell>
            <TableCell>
              Year
              <IconButton onClick={() => sortData('Year')}>
                {sortField === 'Year' && sortDirection === 'asc' ? (
                  <ArrowUpwardIcon fontSize='inherit' />
                ) : (
                  <ArrowDownwardIcon fontSize='inherit' />
                )}
              </IconButton>
              <IconButton onClick={(e) => handleFilterClick(e, 'Year')}>
                <FilterListIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedDocs.map((doc, index) => (
            <TableRow key={index}>
              <TableCell>{serialNumberToDate(doc.Date_Filed)}</TableCell>
              <TableCell>{doc.Doctype}</TableCell>
              <TableCell>
                <a href={doc.url} target='_blank' rel='noopener noreferrer'>
                  {doc.url}
                </a>
              </TableCell>
              <TableCell>{doc.Quarter}</TableCell>
              <TableCell>{doc.Year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Add Popover for filter options */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <List>
          {/* Render filter options based on columnFilter */}
          {Array.from(
            new Set(filteredDocs.map((doc) => doc[columnFilter]))
          ).map((value) => (
            <ListItem key={value} onClick={() => handleToggleFilter(value)}>
              <Checkbox checked={isFiltered(value)} />
              <ListItemText primary={value} />
            </ListItem>
          ))}
        </List>
      </Popover>
    </>
  )
}

export default Grid
