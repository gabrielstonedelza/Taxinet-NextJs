import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import AllSchecdulesLists from "../components/AllSchecdulesLists";

const AllSchedules = ({data}) => {
  const { loginToken, setLoginToken } = useContext(LoginContext);
  const [schedulesData, setSchedulesData] = useState([]);
  console.log(loginToken);
  console.log(data)


  return (
    <div>
      {/* {schedulesData.map(schedule => {
        return (
          <h1 key={schedule.id}>{schedule.schedule.title}</h1>
        )
      })
    } */}
      {/* <AllSchecdulesLists data={data} /> */}
    </div>
  );
};

export async function getServerSideProps() {

  const response = await fetch(
    "https://taxinetghana.xyz/admin_get_all_requests/",
    {
      headers: {
        "content-type": "application/json",
        'accept': "application/json",
      },
    }
  );
  const data = await response.json();

  return { props: { data } };
}

export default AllSchedules;
