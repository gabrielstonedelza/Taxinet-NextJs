import videoStyle from "../styles/video/Video.module.css";
import Image from "next/image";
import servicestyles from "../styles/services/Services.module.css";
import pic1 from "../assets/images/pexels-tima-miroshnichenko-6169668.jpg";
import pic2 from "../assets/images/pexels-mike-b-116675.jpg";
import pic3 from "../assets/images/pexels-norma-mortenson-4392871.jpg";
import pic4 from "../assets/images/pexels-tim-samuel-5835265.jpg";

const Services = () => {
  return (
    <>
      <div className={videoStyle.videocontainer}>
        <video autoPlay playsInline muted loop>
          <source src="../Taxinet-Services.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={servicestyles.maincontainer}>

      <div className={servicestyles.servicecontainer}>
        <div className={servicestyles.servicesbox1}>
          <div className={servicestyles.box}>
            <Image src={pic4} alt="" className={servicestyles.myimages} width={400} height={300} layout=""/>
            <h3>Taxinet Ride</h3>
          </div>
          <div className={servicestyles.box}>
            <Image src={pic2} alt="" className={servicestyles.myimages} width={400} height={300} layout=""/>
            <h3>Taxinet Luxury</h3>
          </div>
        </div>
        <br />
        <div className={servicestyles.servicesbox2}>
          <div className={servicestyles.box}>
            <Image src={pic3} alt="" className={servicestyles.myimages} width={400} height={300} layout=""/>
            <h3>Taxinet Delivery</h3>
          </div>
          <div className={servicestyles.box}>
            <Image src={pic1} alt="" className={servicestyles.myimages} width={400} height={300} layout=""/>
            <h3>Taxinet Truck</h3>
          </div>
        </div>
      </div>
      </div>
      <br />
    </>
  );
};

export default Services;
