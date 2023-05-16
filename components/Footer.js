import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import { Box, Grid, Container, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'

function Copyright() {
  return (
    <>
      {'© '}
      {/* <Link color="inherit" href="https://mui.com/"> */}
      Salient Co {/* </Link>{' '} */}
      {new Date().getFullYear()}
    </>
  )
}

export const Footer = () => {
  const pathname = usePathname()
  // useEffect(() => {
  //   console.log(location.pathname);
  // });

  return (
    <div className='white'>
      <Box>
        <Typography
          component='footer'
          sx={{
            display: 'flex',
          }}
        >
          <Container sx={{ mt: 7, mb: 7, display: 'flex' }}>
            <Grid container spacing={5}>
              <Grid item xs={6} sm={4} md={3}>
                <Grid
                  container
                  direction='column'
                  justifyContent='flex-start'
                  spacing={2}
                  sx={{ height: 120 }}
                >
                  <Grid item xs={6} sx={{ ml: 4 }}>
                    <Copyright />
                    <Box sx={{ mt: 2 }}>
                      <Box> 665 W 130th St </Box>
                      <Box>New York, New York 10027 </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Typography
                  component={'span'}
                  variant='h6'
                  marked='left'
                  gutterBottom
                >
                  Navigate
                </Typography>
                <Box component='ul' sx={{ m: 0, listStyle: 'none', p: 0 }}>
                  <Box>
                    {pathname === '/' ? (
                      <a href='#'> Return to Top</a>
                    ) : (
                      <Link href='/' style={{ textDecoration: 'none' }}>
                        Return Home
                      </Link>
                    )}
                  </Box>

                  <Link href='#'>Contact Us</Link>

                  <Link href={'/login'}>
                    <Box>Log In</Box>
                  </Link>
                </Box>
              </Grid>
              <Box sx={{ pt: 5, pl: 3 }}>
                <img src='/gsnc.png' height={120} />
              </Box>
              <Grid item>
                <Typography variant='caption'>
                  {' '}
                  A Money Green Production
                </Typography>

                {/* })} */}
              </Grid>
            </Grid>
          </Container>
        </Typography>
      </Box>
    </div>
  )
}
export default Footer
