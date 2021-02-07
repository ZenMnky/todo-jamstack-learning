import Head from 'next/head'
import NavBar from '../components/NavBar'


export default function Home() {
  return (
    <div>
      <Head>
        <title>JAMstack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <main >
        <h1>JAMstack learning proj</h1>
      </main>
    </div>
  )
}
