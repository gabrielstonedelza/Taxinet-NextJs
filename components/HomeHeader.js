import { useState,useRef } from "react";
import homestyle from "../styles/homeheader/HomeHeader.module.css";
import Link from "next/link";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import HomeImg from "../assets/images/home.png"
import ServicesImg from "../assets/images/service-station.png"
import AboutImg from "../assets/images/about.png"
import ContactImg from "../assets/images/contact.png"
import Image from 'next/image'

const HomeHeader = () => {
  const ref = useRef(null);

  const handleClickScrollService = () => {
    const element = document.getElementById('services');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickScrollHome = () => {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickScrollAbout = () => {
    const element = document.getElementById('aboutSchedule');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickScrollContact = () => {
    const element = document.getElementById('footer');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={homestyle.homeheadercontainer}>
        <div className={homestyle.mainnavitems}>
          <div className={homestyle.menulinks}>
          <div className={homestyle.navbarlink}>
              {/* <Link href="/">Home</Link> */}
              <Image className="btn-scroll" onClick={handleClickScrollHome} src={HomeImg} width={40} height={40} alt="services-image"/>
              <h4 className={homestyle.glow}>Home</h4>
            </div>
            <div className={homestyle.navbarlink}>
            <Image className="btn-scroll" onClick={handleClickScrollService} src={ServicesImg} width={40} height={40} alt="services-image"/>
            <h4 className={homestyle.glow}>Services</h4>
            </div>
            <div className={homestyle.navbarlink}>
            <Image className="btn-scroll" onClick={handleClickScrollAbout} src={AboutImg} width={40} height={40} alt="services-image"/>
            <h4 className={homestyle.glow}>About</h4>
            </div>
            <div className={homestyle.navbarlink}>
            <Image className="btn-scroll" onClick={handleClickScrollContact} src={ContactImg} width={40} height={40} alt="services-image"/>
            <h4 className={homestyle.glow}>Contact</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
