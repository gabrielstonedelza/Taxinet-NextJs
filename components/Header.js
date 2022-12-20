import { useState, useContext } from "react";
import dashboardstyles from "../styles/dashboardheader/DashboardHeader.module.css";
import Link from "next/link";
import {
  FaBars,
  FaTimesCircle,
  FaRegChartBar,
  FaBell,
  FaComments,
  FaRegCalendarCheck,
  FaUserFriends,
  FaUsers,
  FaUser,
  FaSignOutAlt,
  FaCarAlt,
} from "react-icons/fa";
import { LoginContext } from "../context/LoginContext";

const Header = () => {
  const { loginToken, setLoginToken } = useContext(LoginContext);
  const [sideNavOpened, setSideNavOpened] = useState(false);
  const handleOpenedSideNav = () => {
    setSideNavOpened(true);
  };
  const handleClosedSideNav = () => {
    setSideNavOpened(false);
  };

  return (
    <>
      <div className={dashboardstyles.dashboardcontainer}>
        <div className={dashboardstyles.overlay}></div>
        <div className={dashboardstyles.mainnavitems}>
          <div className={dashboardstyles.title}>
            <Link href="/dashboard">Taxinet</Link>
          </div>
          <hr />
          <br />
          <div className={dashboardstyles.menulinks}>
            <div className={dashboardstyles.navbarlink}>
              <Link href="/dashboard">
                <div className={dashboardstyles.navlinks}>
                  Dashboard
                  <FaRegChartBar />
                </div>
              </Link>
            </div>
            <div className={dashboardstyles.navbarlink}>
              <Link href="/requests">
                <div className={dashboardstyles.navlinks}>
                  Requests
                  <FaCarAlt />
                </div>
              </Link>
            </div>
            <div className={dashboardstyles.navbarlink}>
              <Link href="/notifications">
                <div className={dashboardstyles.navlinks}>
                  Notifications
                  <FaBell />
                </div>
              </Link>
            </div>
            {/* <div className={dashboardstyles.navbarlink}>
              <Link href="/messages">Messages</Link>
              <FaComments />
            </div> */}
            <div className={dashboardstyles.navbarlink}>
              <Link href="/users">
                <div className={dashboardstyles.navlinks}>
                  Users
                  <FaUsers />
                </div>
              </Link>
            </div>
            <div className={dashboardstyles.navbarlink}>
              <Link href="/passengers">
                <div className={dashboardstyles.navlinks}>
                  Passengers
                  <FaUserFriends />
                </div>
              </Link>
            </div>
            <div className={dashboardstyles.navbarlink}>
              <Link href="/drivers">
                <div className={dashboardstyles.navlinks}>
                  Drivers
                  <FaUserFriends />
                </div>
              </Link>
            </div>
            <div className={dashboardstyles.navbarlink}>
              <Link href="/investors">Investors</Link>
              <FaUsers />
            </div>
            <div className={dashboardstyles.navbarlink}>
              <Link href="/inventories">
                <div className={dashboardstyles.navlinks}>
                  Inventories
                  <FaRegCalendarCheck />
                </div>
              </Link>
            </div>

            <div className={dashboardstyles.navbarlink}>
              <Link href="/logout">
                <div className={dashboardstyles.navlinks}>
                  Logout
                  <FaSignOutAlt />
                </div>
              </Link>
            </div>
          </div>
          <div className={dashboardstyles.bars}>
            <FaBars onClick={handleOpenedSideNav} />
          </div>
        </div>
        {sideNavOpened && (
          <div onClick={handleClosedSideNav}>
            <div className={dashboardstyles.onsmallscreen}>
              <div className={dashboardstyles.mainnavitems}>
                <div className={dashboardstyles.close}>
                  <FaTimesCircle onClick={handleClosedSideNav} />
                </div>
                <div className={dashboardstyles.menulinks}>
                  <div className={dashboardstyles.navbarlink}>
                    <Link href="/dashboard">Dashboard</Link>
                  </div>
                  <div className={dashboardstyles.navbarlink}>
                    <Link href="/notifications">Notifications</Link>
                  </div>
                  <div className={dashboardstyles.navbarlink}>
                    <Link href="/profile">Profile</Link>
                  </div>
                  <div className={dashboardstyles.navbarlink}>
                    <Link href="/logout">Logout</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
      </div>
    </>
  );
};

export default Header;
