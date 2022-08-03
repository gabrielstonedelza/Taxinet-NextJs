import styles from "../styles/dashboard/Dashboard.module.css";
import Link from "next/link";

function LatestNotifications({ latestNotificationData }) {
  return (
    <>
      <div className={styles.latestcontainer}>
        {latestNotificationData.map((data) => (
          <Link href="/notifications/[id]" as={`/notifications/${data.id}`} key={data.id}>
            <div className={styles.latestcontainer1}>
              <h3>{data.notification_title}</h3>
              <small>{data.date_created.slice(0, 10)}</small>
              <span>|</span>
              <small>{data.date_created.slice(11, 19)}</small>
              <hr />
            </div>
          </Link>
        ))}
      </div>
      <br />
    </>
  );
}

export default LatestNotifications;
