import React, { useRef, useState, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import Link from 'next/link'
const NavLinks = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const pages = ['Products', 'Pricing', 'Blog']
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const dispatch = useDispatch()

  const navFull = 'rgba(255, 255, 255, 1)'
  const navHalf = 'rgba(0,0,255,0.3)'
  const navClear = 'rgba(255, 255, 255, 0)'

  const navHorizontal = 'row'
  const navVertical = 'column'

  const [navBackground, setNavBackground] = useState(navClear)
  const [navPosition, setNavPosition] = useState(navVertical)

  // const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const navRef = useRef()
  navRef.current = navBackground

  useEffect(() => {
    // const handleScroll = () => {
    if (window.innerWidth < 768) {
      setNavPosition(navVertical)
    } else {
      // setNavBackground(navClear);
      setNavPosition(navHorizontal)
      // console.log("big")
    }
  }, [])

  return (
    <Container
      sx={{
        textDecoration: 'none',
        display: 'flex',
        flexDirection: navPosition,
      }}
    >
      <MenuItem onClick={handleCloseNavMenu}>
        <Typography component={'span'} variant='h5' style={{ ml: 10 }}>
          <Link
            href='/'
            style={{
              textDecoration: 'none',
              color: 'black',
              display: 'flex',
            }}
          >
            {' '}
            Home
          </Link>
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <Typography component={'span'} variant='h5'>
          <Link href='/tips' style={{ textDecoration: 'none', color: 'black' }}>
            Tips
          </Link>
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <Typography component={'span'} variant='h5'>
          <Link href='/who' style={{ textDecoration: 'none', color: 'black' }}>
            About
          </Link>
        </Typography>
      </MenuItem>
    </Container>
  )
}

export default NavLinks
