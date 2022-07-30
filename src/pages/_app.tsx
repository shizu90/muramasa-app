import GlobalStyle from "../styles/global"
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import Navbar from "../components/Navbar"
import Head from "next/head"
import UserProvider from "../context/UserContext"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Muramasa</title>
    </Head>
    <UserProvider>
      <Navbar></Navbar>
        <Component {...pageProps} />
      <Footer></Footer>
    </UserProvider>
    <GlobalStyle></GlobalStyle>
  </ThemeProvider>
  )
}

export default MyApp
