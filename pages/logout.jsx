import Logout from "../components/Logout"
import Head from "next/head"

const logout = () => {
  
  return (
    <div>
      <Head>
        <title>Taxinet | Logout</title>
        <meta name="description" content="Home paeg of Taxinet" />
        <link rel="icon" href="/taxinet_cab.png" />
      </Head>
      <Logout />
    </div>
  )
}

export default logout