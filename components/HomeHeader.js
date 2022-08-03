import { useState } from "react";
import homestyle from "../styles/homeheader/HomeHeader.module.css";
import Link from "next/link";
import { FaBars, FaTimesCircle } from "react-icons/fa";

const HomeHeader = () => {
  const [sideNavOpened, setSideNavOpened] = useState(false);
  const handleOpenedSideNav = () => {
    setSideNavOpened(true);
  };
  const handleClosedSideNav = () => {
    setSideNavOpened(false);
  };

  return (
    <>
      <div className={homestyle.homeheadercontainer}>
        <div className={homestyle.mainnavitems}>
          <div className={homestyle.title}>
            <Link href="/">Taxinet</Link>
          </div>
          <div className={homestyle.menulinks}>
            <div className={homestyle.navbarlink}>
              <Link href="/services">Services</Link>
            </div>
            <div className={homestyle.navbarlink}>
              <Link href="/contactus">Contact</Link>
            </div>
            <div className={homestyle.navbarlink}>
              <Link href="/about">About</Link>
            </div>
            {/* <div className={homestyle.navbarlink}>
              <Link href="/login">Login</Link>
            </div> */}
          </div>
          <div className={homestyle.bars}>
            <FaBars onClick={handleOpenedSideNav} />
          </div>
        </div>
        {sideNavOpened && (
          <div onClick={handleClosedSideNav}>
            <div className={homestyle.onsmallscreen}>
              <div className={homestyle.mainnavitems}>
                <div className={homestyle.close}>
                  <FaTimesCircle onClick={handleClosedSideNav} />
                </div>
                <div className={homestyle.menulinks}>
                  <div className={homestyle.navbarlink}>
                    <Link href="/services">Services</Link>
                  </div>
                  <div className={homestyle.navbarlink}>
                    <Link href="/contactus">Contact</Link>
                  </div>
                  <div className={homestyle.navbarlink}>
                    <Link href="/about">About</Link>
                  </div>
                  {/* <div className={homestyle.navbarlink}>
                    <Link href="/login">Login</Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeHeader;
