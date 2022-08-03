import Services from "../components/Services"
import Head from 'next/head'

const services = () => {
  return (
    <div>
      <Head>
        <title>Taxinet | Services</title>
        <meta name="description" content="Home paeg of Taxinet" />
        <link rel="icon" href="/taxinet_cab.png" />
      </Head>
      <Services />
    </div>
  )
}

export default services