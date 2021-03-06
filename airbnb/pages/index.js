import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'

export default function Index() {
  return (
    <div className="flex">
      <Head>
        <title>AirBnb - Frapp</title>
        <link rel="icon" href="/airbnb_logo.ico" />
        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
        />
      </Head>

      <main>
        <Header/>
        <Home />
        <Footer/>
      </main>

      <footer >
      </footer>
    </div>
  )
}
