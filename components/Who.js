import React, { useEffect, useState } from 'react'
import * as BS from 'react-bootstrap'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { Link } from 'next/link'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Divider } from '@mui/material'
import Aos from 'aos'

const Who = () => {
  useEffect(() => {
    Aos.init({})
  }, [])

  return (
    <BS.Container>
      <div>
        <Box sx={{ pt: 20, pb: 10, display: 'flex', justifyContent: 'center' }}>
          <Typography component='h1' variant='h2'>
            <div
              className='fontbold'
              data-aos='zoom-in'
              data-aos-duration='1000'
            >
              Meet the team
            </div>
          </Typography>
        </Box>
        <Box
          sx={{
            pt: 5,
            pb: 20,
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '15px',
          }}
        >
          <div>
            <div>
              <Container sx={{ mt: 5, mb: 10, justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <BS.Row>
                    <BS.Col lg={6} md={7} sm={8} xs={10}>
                      <div data-aos='fade-right' data-aos-duration='1000'>
                        <img src='/cbsoverhead.webp' width='400' height='300' />{' '}
                      </div>
                      <Box sx={{ mb: 10 }}></Box>
                    </BS.Col>
                    <br />
                    <BS.Col lg={6} md={7} sm={8} xs={10}>
                      <Typography align='right'>
                        <h5 className='font'>
                          <div data-aos='fade-left' data-aos-duration='1000'>
                            Search bar for SEC Documents
                            <br />
                            <br />
                            Financial professionals spend too much time finding
                            data to build models Salient will save customers
                            time using AI enabled tools by finding the
                            information they are looking for in fewer keystrokes
                          </div>
                        </h5>
                      </Typography>
                    </BS.Col>
                  </BS.Row>
                  <br />
                  <br />
                  <br />
                </Box>
              </Container>
            </div>
            <Divider sx={{ m: 10, mt: 20 }} />

            {/* </BS.Col> */}
            <BS.Row>
              <BS.Col sm={6} xs={12}>
                <div data-aos='fade-left' data-aos-duration='1000'>
                  <Container sx={{ mt: 0, justifyContent: 'center' }}>
                    <Box sx={{ p: 3, pt: 0, justifyContent: 'center' }}>
                      <Box sx={{ pb: 8, justifyContent: 'center' }}>
                        {' '}
                        <div>
                          <Typography sx={{ pl: 5, pt: 0, pb: 4 }}>
                            <img src='/promo.svg' height={130} />
                            <br />
                            <br />
                            {/* <div>
                            <h2>
                              Guy 1 <br />
                              <div className="fontbold">Interns</div>
                              <br />
                            </h2>
                            <h4>
                              Help out
                              <br />
                              <br />
                              @gsb.columbia.edu{" "}
                            </h4>
                            </div> */}
                          </Typography>
                        </div>
                        <br />
                      </Box>
                    </Box>
                  </Container>
                </div>
              </BS.Col>

              <BS.Col sm={6} xs={12}>
                <div data-aos='fade-right' data-aos-duration='1000'>
                  <Container sx={{ mt: 0, justifyContent: 'center' }}>
                    <Box sx={{ p: 3, pt: 0, justifyContent: 'center' }}>
                      <Box sx={{ pb: 8, justifyContent: 'center' }}>
                        {' '}
                        <div>
                          <div>
                            <Typography sx={{ pl: 5, pt: 0, pb: 4 }}>
                              <img src='/ops.svg' height={130} /> <br />
                              <br />
                              <h2>
                                Ben Greenspan <br />
                                <div className='fontbold'>Head Developer</div>
                              </h2>
                              <br />
                              <h4>
                                <ul>
                                  <li>
                                    Six years as an equity trader at Trillium
                                    Management
                                  </li>
                                  <li>Columbia {`EMBA '24`} student</li>
                                  <li>
                                    Founder and President of the AI Club at CBS
                                  </li>
                                </ul>
                                <br />
                                <br />
                                Bgreenspan24@gsb.columbia.edu{' '}
                              </h4>
                            </Typography>
                          </div>
                        </div>
                        <br />
                      </Box>
                    </Box>
                  </Container>
                </div>
              </BS.Col>
            </BS.Row>
          </div>
        </Box>
      </div>
    </BS.Container>
  )
}

export default Who
