import Head from 'next/head'
import Header from '../components/Header'
import HomeBody from '../components/HomeBody'

import { signIn, useSession } from 'next-auth/client'

export default function Home() {
  const [ session , loading] = useSession();

  return (
    <div>
      <Head>
        <title> Google Doc </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

         {!session && !loading && <>
          Not signed in <br/>
          <button onClick={() => signIn()}>Sign in</button>
         </>}

         {!session && loading && <> 
           Loading ...
           </>}

      {session && <>
        <Header/>

        <section>
          <HomeBody />
        </section>
       </>}
      
    </div>
  )
}
