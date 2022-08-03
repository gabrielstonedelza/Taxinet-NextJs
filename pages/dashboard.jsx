import Dashboard from "../components/Dashboard"

const dashboard = ({ passengerData, driverData, usersData, investorsData, pendingData, reviewingData, activeData, cancelledData, onetimeData, weeklyData,daysData,dailyData,latestData,latestNotificationData }) => {
  return (
    <div>
      <Dashboard passengerData={passengerData} driverData={driverData} usersData={usersData} investorsData={investorsData} pendingData={pendingData} reviewingData={reviewingData} activeData={activeData} cancelledData={cancelledData} onetimeData={onetimeData} weeklyData={weeklyData} daysData={daysData} dailyData={dailyData} latestData={latestData} latestNotificationData={latestNotificationData}/>
    </div>
  )
}
export async function getServerSideProps() {
  const passengerResponse = await fetch("https://taxinetghana.xyz/all_passengers/", {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });
  const passengerData = await passengerResponse.json();
  // drivers data

  const driverResponse = await fetch("https://taxinetghana.xyz/all_drivers/", {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });
  const driverData = await driverResponse.json();

  // users data
  const usersResponse = await fetch("https://taxinetghana.xyz/all_users/", {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });
  const usersData = await usersResponse.json();

  // investors data
  const investorsResponse = await fetch("https://taxinetghana.xyz/all_investors/", {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });
  const investorsData = await investorsResponse.json();

  // pending Requests
  const pendingRequests = await fetch("https://taxinetghana.xyz/admin_get_pending_schedules/", {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });
  const pendingData = await pendingRequests.json();

  // reviewing Requests
  const reviewingRequests = await fetch("https://taxinetghana.xyz/admin_get_reviewing_schedules/", {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });
  const reviewingData = await reviewingRequests.json();

  // active Requests
  const activeRequests = await fetch("https://taxinetghana.xyz/admin_get_active_schedules/", {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });
  const activeData = await activeRequests.json();

  // cancelled Requests
  const cancelledRequests = await fetch("https://taxinetghana.xyz/admin_get_cancelled_schedules/", {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });
  const cancelledData = await cancelledRequests.json();

  // onetime Requests
  const onetimeRequests = await fetch("https://taxinetghana.xyz/admin_get_scheduled_for_one_time/", {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });
  const onetimeData = await onetimeRequests.json();

  // weekly Requests
  const weeklyRequests = await fetch("https://taxinetghana.xyz/admin_get_scheduled_for_weekly/", {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });
  const weeklyData = await weeklyRequests.json();

   // days Requests
   const daysRequests = await fetch("https://taxinetghana.xyz/admin_get_scheduled_for_days/", {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });
  const daysData = await daysRequests.json();

  // dayil Requests
  const dailyRequests = await fetch("https://taxinetghana.xyz/admin_get_scheduled_for_daily/", {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });
  const dailyData = await dailyRequests.json();

  // latest five Requests
  const latestRequests = await fetch("https://taxinetghana.xyz/admin_get_five_requests/", {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });
  const latestData = await latestRequests.json();

   // latest five Requests
   const latestNotifications = await fetch("https://taxinetghana.xyz/admin_get_all_user_notifications/", {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });
  const latestNotificationData = await latestNotifications.json();

  return {
    props: { passengerData, driverData, usersData, investorsData, pendingData, reviewingData, activeData, cancelledData, onetimeData, weeklyData,daysData,dailyData,latestData,latestNotificationData }
  };
}


export default dashboard