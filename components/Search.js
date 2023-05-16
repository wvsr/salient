import React, { useState } from 'react'
import companies from './data/StockList.js'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import List from '@mui/material/List'
import QuickSearch from './QuickSearch.js'
import { useRouter } from 'next/router'

const Search = ({ onCompanySelected }) => {
  const [value, setValue] = useState('')
  const router = useRouter()
  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (company) => {
    if (typeof company === 'object') {
      router.push(
        {
          pathname: `/search/${company.symbol}`,
          query: { name: company.name, symbol: company.symbol },
        },
        undefined,
        { shallow: true }
      )
    } else {
      router.push(`/search/${company}`)
    }
  }

  const navigateToCompany = (input) => {
    const symbol = typeof input === 'string' ? input : input.symbol

    router.push(
      {
        pathname: `/search/${symbol}`,
        query: { name: input.name, symbol: input.symbol, cik: input.cik },
      },
      undefined,
      { shallow: true }
    )
    onSearch(input)
  }

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      navigateToCompany(value)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'right',
        pt: 20,
        pb: 20,
        pr: 10,
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Paper
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 1,
            borderRadius: 2,
            minWidth: 300,
          }}
        >
          <TextField
            label='Search Company Here'
            value={value}
            onChange={onChange}
            fullWidth
            size='small'
            variant='outlined'
          />
          <Button
            variant='contained'
            color='primary'
            onClick={() => onSearch(value)}
            sx={{ ml: 1 }}
          >
            Search
          </Button>
        </Paper>
        <Paper
          sx={{
            backgroundColor: 'background.paper',
            mt: 1,
            borderRadius: 2,
            minWidth: 300,
            maxHeight: 200,
            overflow: 'auto',
          }}
        >
          <List>
            {companies
              .filter((company) => {
                const searchTerm = value.toLowerCase()
                const fullName = company.name.toString().toLowerCase()
                const symbol = company.symbol.toString().toLowerCase()
                return (
                  searchTerm &&
                  (fullName.includes(searchTerm) ||
                    symbol.includes(searchTerm)) &&
                  fullName !== searchTerm
                )
              })
              .slice(0, 5)
              .map((company) => (
                <ListItem
                  button
                  onClick={() => onSearch(company)}
                  key={company.name}
                >
                  <ListItemText
                    primary={`${company.name} (${company.symbol})`}
                  />
                </ListItem>
              ))}
          </List>
        </Paper>
      </Box>
    </Box>
  )
}

export default Search
