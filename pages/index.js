import { useState, useContext } from "react";
import { useRouter } from "next/router";

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import VideoShowCase from '../components/VideoShowCase'
import AboutSchedule from '../components/AboutSchedule'
import FooterContact from "../components/FooterContact"
import Services from "../components/Services"


export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Taxinet | Home</title>
        <meta name="description" content="Home paeg of Taxinet" />
        <link rel="icon" href="/taxinet_cab.png" />
      </Head>
      <VideoShowCase />
      <Services />
      <AboutSchedule />
      <FooterContact />
    </div>
  )
}
