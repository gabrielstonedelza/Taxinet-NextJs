import ScaffoldRequestDetail from "../../../components/ScaffoldRequestDetail";

function RequestDetail({detailRequest}) {
    console.log(detailRequest)
  return (
    <div>
        <ScaffoldRequestDetail title={detailRequest.schedule_title} pPic={detailRequest.get_passenger_profile_pic}/>
    </div>
  )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://taxinetghana.xyz/admin_request_detail/${context.params.slug}`);
    const detailRequest = await res.json();
  
    return {
      props: {
        detailRequest,
      },
    };
  };
  
  export const getStaticPaths = async () => {
    const res = await fetch(`https://taxinetghana.xyz/admin_get_five_requests`);
    const scheduleRequests = await res.json();
    const slugs = scheduleRequests.map((movie) => movie.slug);
    const paths = slugs.map((slug) => ({ params: { slug: slug } }));
    return { paths, fallback: false };
  };

export default RequestDetail