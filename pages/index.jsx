import Head from 'next/head'
import Banner from '../components/Banner'
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
      <Banner />
    </div>
  )
}

export default Home
