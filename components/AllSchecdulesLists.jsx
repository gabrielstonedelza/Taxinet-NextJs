import AllSchduleItem from "./AllSchduleItem";

const AllSchecdulesLists = ({ data }) => {
  return (
    <div>
      <div>
        {data.map((schedule) => (
          <div key={schedule.id}>
            <AllSchduleItem title={data.schedule_title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSchecdulesLists;
