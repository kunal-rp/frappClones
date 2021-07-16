import Head from 'next/head'
import Header from '../components/Header'
import HomeBody from '../components/HomeBody'

export default function Home() {
  return (
    <div>
      <Head>
        <title> Google Doc </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>

      <section>
      	<HomeBody />
      </section>

    </div>
  )
}
