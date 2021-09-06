import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="flex">
      <Head>
        <title>AirBnb - Frapp</title>
        <link rel="icon" href="/favicon.ico" />
        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
        />
      </Head>

      <main className="flex w-full">
          <div className="w-full pl-2 pr-2 md:max-w-6xl mx-auto">
            <Header/>
         </div>
      </main>

      <footer >
        
      </footer>
    </div>
  )
}
