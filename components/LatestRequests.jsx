import styles from "../styles/dashboard/Dashboard.module.css";
import Link from "next/link";

function LatestRequests({ latestData }) {
  return (
    <>
      <div className={styles.latestcontainer}>
        {latestData.map((data) => (
          <Link href="/requests/[slug]" as={`/requests/${data.slug}`} key={data.id}>
            <div className={styles.latestcontainer1}>
              <h3>{data.schedule_title}</h3>
              <small>{data.time_scheduled.slice(0, 8)}</small>
              <span>|</span>
              <small>{data.date_scheduled}</small>
              <hr />
            </div>
          </Link>
        ))}
      </div>
      <br />
    </>
  );
}

export default LatestRequests;
