import React from 'react'
import * as BS from 'react-bootstrap'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import companies from './data/StockList.js'
import { alpha, styled } from '@mui/material/styles'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import Grid from './SingleStockFiles.js'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
})

const Stock = () => {
  const router = useRouter()
  const { asPath } = router
  const stockSymbol = router.query.id.slice(8)

  const company = companies.find((c) => c.symbol === stockSymbol)

  let companyName
  if (company) {
    companyName = company.name
  } else {
    companyName = 'nope'
  }

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
              The {companyName} page
            </div>
          </Typography>
        </Box>
        {/* <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 2,
          }}
        >
          <CssTextField
            label="Input Question Here"
            id="custom-css-outlined-input"
          />
        </Box> */}

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
                      <Grid company={company} />
                      <Box sx={{ mb: 10 }}></Box>
                    </BS.Col>
                    <br />
                  </BS.Row>
                  <br />
                  <br />
                  <br />
                </Box>
              </Container>
            </div>
          </div>
        </Box>
      </div>
    </BS.Container>
  )
}

export default Stock
