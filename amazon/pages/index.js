import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amazon.com FRAPP</title>
        <meta name="description" content="AmazonFrapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
         amazon frapp
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
