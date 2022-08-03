import styles from "../styles/dashboard/Dashboard.module.css";
import Head from "next/head";
import LatestRequests from "./LatestRequests";
import LatestNotifications from "./LatestNotifications";

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

const Dashboard = ({
  passengerData,
  driverData,
  usersData,
  investorsData,
  pendingData,
  reviewingData,
  activeData,
  cancelledData,
  onetimeData,
  weeklyData,
  daysData,
  dailyData,
  latestData,
  latestNotificationData,
}) => {
  return (
    <>
      <div>
        <Head>
          <title>Taxinet | Dashboard</title>
          <meta name="description" content="" />
          <link rel="icon" href="/taxinet_cab.png" />
        </Head>
        <div className={styles.dashboardback}>
          <section className={styles.dashboardcontainer}>
            <div className={styles.userspassengersdrivers}>
              <div className={styles.box} id={styles.debox}>
                <div className={styles.boxitems}>
                  <FaUsers className={styles.usericon} />
                  <div className={styles.details}>
                    <h2>Users</h2>
                    <small>{usersData.length}</small>
                  </div>
                </div>
              </div>
              <div className={styles.box} id={styles.debox1}>
                <div className={styles.boxitems}>
                  <FaUsers className={styles.usericon} />
                  <div className={styles.details}>
                    <h2>Passengers</h2>
                    <small>{passengerData.length}</small>
                  </div>
                </div>
              </div>
              <div className={styles.box} id={styles.debox2}>
                <div className={styles.boxitems}>
                  <FaUsers className={styles.usericon} />
                  <div className={styles.details}>
                    <h2>Drivers</h2>
                    <small>{driverData.length}</small>
                  </div>
                </div>
              </div>
              <div className={styles.box} id={styles.debox3}>
                <div className={styles.boxitems}>
                  <FaUsers className={styles.usericon} />
                  <div className={styles.details}>
                    <h2>Investors</h2>
                    <small>{investorsData.length}</small>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <hr />

            <div className={styles.latest}>
              <div className={styles.latestbox1}>
                <div className={styles.latestitems}>
                  <div className={styles.latestheader}>
                    <FaCarAlt />
                    <h2>Schedule Requests</h2>
                  </div>
                  <LatestRequests latestData={latestData} />
                </div>
              </div>
              <div className={styles.latestbox2}>
                <div className={styles.latestitems}>
                  <div className={styles.latestheader}>
                    <FaBell />
                    <h2>Notifications</h2>
                  </div>
                  <LatestNotifications
                    latestNotificationData={latestNotificationData}
                  />
                </div>
              </div>
            </div>
            
          </section>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
