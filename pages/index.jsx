import Head from 'next/head'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Find-a-Place</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
    </div>
  )
}

export default Home
