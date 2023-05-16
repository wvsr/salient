import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Form from './FirstPage/Form'
import { Link } from 'next/link'
import Aos from 'aos'
import * as BS from 'react-bootstrap'
import { send } from 'emailjs-com'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import { Parallax, Background } from 'react-parallax'
import { Divider } from '@mui/material'
// import "aos/dist/aos.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShad0w: 24,
  p: 4,
}

const Tips = () => {
  useEffect(() => {
    Aos.init({})
  }, [])

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false) && window.location.reload

  const [toSend, setToSend] = useState({
    business: '',
    email: '',
    name: '',
    phone: '',
    message: '',
    reply_to: '',
  })

  const [errors, setErrors] = useState({
    business: '',
    email: '',
    name: '',
    phone: '',
    message: '',
    reply_to: '',
  })

  const validate = () => {
    let temp = {}
    temp.name = toSend.name ? '' : 'Name is required'
    // temp.business = toSend.business ? "" : "Business Name is required";
    temp.email = /$^|.+@.+..+/.test(toSend.email) ? '' : 'Email is not valid'
    // temp.phone =
    // toSend.phone.length > 8 ? "" : "Please enter a valid phone number";
    setErrors({
      ...temp,
    })

    return Object.values(temp).every((x) => x === '')
  }

  const resetForm = () => {
    window.location.reload()
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setOpen(true)
      send('service_0t74imh', 'template_q1ecudp', toSend, '87uW5IjR7xE2EqVKU')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text)
        })
        .catch((err) => {
          console.log('FAILED...', err)
        })
    }
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }

  return (
    <BS.Container>
      <Container sx={{ pt: 20 }}>
        <Box
          sx={{
            pt: 3,
            pl: 3,
            pr: 3,
            pb: 3,

            display: 'flex',
            justifyContent: 'left',
          }}
        >
          <div className='fontbold'>
            <Typography
              variant='h3'
              // className="white-background"
              sx={{
                pt: 3,
                pl: 3,
                pr: 3,
                pb: 3,
                justifyContent: 'center',
              }}
            >
              <BS.Row>
                <BS.Col lg={8} md={8} sm={10} xs={10}>
                  <div
                    className='fontbold'
                    data-aos='fade-right'
                    data-aos-duration='1500'
                  >
                    Tips for using Salient
                    <h4>
                      In an effort to help you get the most out of your time at
                    </h4>
                    <br />
                  </div>
                </BS.Col>
                <BS.Col lg={4} md={6} sm={10} xs={10}>
                  <Box
                    sx={{
                      // pt: 3,
                      pl: 3,
                      pr: 3,
                      pb: 3,
                      justifyContent: 'center',
                    }}
                  >
                    <div data-aos='fade-left' data-aos-duration='1500'>
                      <img src='faq3.png' height={160} alt='Tips' />
                    </div>
                  </Box>
                </BS.Col>
              </BS.Row>

              <BS.Row>
                <BS.Col lg={4} md={6} sm={10} xs={10}>
                  <div
                    data-aos='fade-up'
                    data-aos-duration='500'
                    // data-aos-offset="200"
                    className='fontbold'
                  >
                    <div className='links'>
                      <a
                        target='_blank'
                        // href="https://www8.gsb.columbia.edu/emba-students/academic-essentials/policies/auditing"
                      >
                        1
                      </a>
                      <div>
                        <h4>Look up stock by ticker or company name</h4>
                      </div>
                    </div>
                    <br />
                  </div>
                </BS.Col>
                <BS.Col lg={4} md={6} sm={10} xs={10}>
                  <div
                    data-aos='fade-up'
                    data-aos-duration='700'
                    // data-aos-offset="200"
                    className='fontbold'
                  >
                    <div className='links'>
                      <a
                        target='_blank'
                        // href="https://transportation.columbia.edu/content/bike-registration"
                      >
                        2
                      </a>
                    </div>

                    <h4>
                      SEC Documents are sortable and can be filtered by Doc
                      Type.
                    </h4>
                    <br />
                    <h4>Documents currently contain Q1 2022 to Q1 2023</h4>
                  </div>
                  <br />
                </BS.Col>

                <BS.Col lg={4} md={6} sm={10} xs={10}>
                  <div
                    data-aos='fade-up'
                    data-aos-duration='700'
                    // data-aos-offset="200"
                    className='fontbold'
                  >
                    <div className='links'>
                      <a
                        target='_blank'
                        // href="https://blogs.cul.columbia.edu/spotlights/category/new-e-resources/"
                      >
                        3
                      </a>
                      <h4> Give Feedback!</h4>

                      <div className='links'>
                        <a
                          target='_blank'
                          // href="https://blogs.cul.columbia.edu/spotlights/2021/09/21/new-york-times-access/"
                        >
                          {/* <h4>New York Times </h4> */}
                        </a>
                      </div>

                      {/* <a
                        target="_blank"
                        href="https://blogs.cul.columbia.edu/business/2015/01/28/new-resource-financial-times-ft-com/"
                      >
                        <div className="links">
                          <h4>Financial Times</h4>
                        </div> */}
                      {/* </a> */}
                    </div>
                  </div>
                </BS.Col>
              </BS.Row>
            </Typography>
          </div>
        </Box>
      </Container>
      <Divider sx={{ mb: 10, p: 0 }} />
      <div className='graycard' data-aos='zoom-in' data-aos-duration='1000'>
        <BS.Container>
          <Container className='form' sx={{ pt: 0 }}>
            <BS.Row>
              <BS.Col md={4}>
                <Typography>
                  <Typography
                    variant='h4'
                    // className="white-background"
                    sx={{
                      pt: 0,
                      pl: 0,
                      pr: 0,
                      pb: 10,
                      justifyContent: 'center',
                    }}
                  >
                    <div className='fontbold'>
                      Anything you would like to add? Let us know.
                    </div>
                  </Typography>
                </Typography>
                <div data-aos='fade-up-right' data-aos-duration='1500'>
                  <img src='rocket.svg' height={160} alt='Tips' />
                </div>
                <Box
                  sx={{
                    pt: 0,
                    pl: 0,
                    pr: 0,
                    pb: 10,
                    // justifyContent: "center",
                  }}
                ></Box>
              </BS.Col>
              <BS.Col md={8}>
                <div>
                  <Box
                    component='form'
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    autoComplete='off'
                    onSubmit={onSubmit}
                  >
                    <Container>
                      <Box
                        className='font'
                        sx={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <TextField
                          required
                          id='outlined-name-input'
                          label='Name'
                          type='name'
                          autoComplete='name'
                          value={toSend.name}
                          onChange={handleChange}
                          name='name'
                          helperText={errors.name}
                        />
                        <TextField
                          required
                          id='outlined-email-input'
                          label='Email'
                          type='email'
                          autoComplete='email'
                          value={toSend.email}
                          onChange={handleChange}
                          name='email'
                          helperText={errors.email}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          '& > :not(style)': { m: 0 },
                        }}
                      ></Box>

                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <TextField
                          id='outlined-message-input'
                          label='Tip'
                          type='message'
                          autoComplete='message'
                          value={toSend.message}
                          onChange={handleChange}
                          name='message'
                          multiline={true}
                          rows={3}
                          sx={{ height: '100%', width: 10, fontSize: 33 }}
                          //   helperText="Enter any other details you'd like to mention"
                        ></TextField>
                      </Box>
                    </Container>

                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        pt: 8,
                        pb: 32,
                      }}
                    >
                      <div data-aos='zoom-out' data-aos-duration='2000'>
                        <button>
                          <div className='svg-wrapper-1'>
                            <div className='svg-wrapper'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                width='24'
                                height='24'
                              >
                                <path fill='none' d='M0 0h24v24H0z'></path>
                                <path
                                  fill='currentColor'
                                  d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z'
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <span>Submit</span>
                        </button>

                        <Modal
                          aria-labelledby='transition-modal-title'
                          aria-describedby='transition-modal-description'
                          open={open}
                          onClose={resetForm}
                          closeAfterTransition
                          BackdropComponent={Backdrop}
                          BackdropProps={{
                            timeout: 500,
                          }}
                        >
                          <Fade in={open}>
                            <Box sx={style}>
                              <Typography
                                id='transition-modal-title'
                                variant='h6'
                                component='h2'
                              >
                                Thanks for submitting your details
                              </Typography>
                              <Typography
                                id='transition-modal-description'
                                sx={{ mt: 2 }}
                              >
                                Thank you for your input!
                              </Typography>
                            </Box>
                          </Fade>
                        </Modal>
                      </div>
                    </Box>
                  </Box>
                </div>
              </BS.Col>
            </BS.Row>
          </Container>
        </BS.Container>
      </div>
    </BS.Container>
  )
}
export default Tips
