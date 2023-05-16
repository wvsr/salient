import { Html, Head, Main, NextScript } from 'next/document'
import ScrollToTop from '../components/ScrollToTop'
import ReactGA from 'react-ga'
import NavBar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import { ThemeProvider } from '@mui/material'
import Theme from '../components/Theme'
import Container from '@mui/material/Container'
import { Divider } from '@mui/material'
import { Provider } from 'react-redux'
import store from '../store'

const TRACKING_ID = 'G-BSL2182TTZ'

ReactGA.initialize(TRACKING_ID)

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Provider store={store}>
          <ScrollToTop />
          <NavBar />
          <ThemeProvider theme={Theme}>
            <Container maxWidth={false} disableGutters={true}>
              <Main />
            </Container>
            <Container>
              <Divider sx={{ m: 0, p: 0 }} />
              <Footer />
            </Container>
          </ThemeProvider>
          <NextScript />
        </Provider>
      </body>
    </Html>
  )
}
