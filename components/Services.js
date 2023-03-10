import { useState } from "react";
import videoStyle from "../styles/video/Video.module.css";
import Image from "next/image";
import servicestyles from "../styles/services/Services.module.css";
import pic1 from "../assets/images/pexels-tima-miroshnichenko-6169668.jpg";
import pic2 from "../assets/images/pexels-mike-b-116675.jpg";
import pic3 from "../assets/images/pexels-norma-mortenson-4392871.jpg";
import pic4 from "../assets/images/pexels-tim-samuel-5835265.jpg";

const Services = () => {
  const [openMore,setOpenMore] = useState(false)

  const handleOpenMore = () => {
    setOpenMore(true)
  }
  return (
    <>
      <div id="services">
        <div className={servicestyles.maincontainer}>
          <div className={servicestyles.servicecontainer}>
            <h2>Our Services</h2>
            <br />
            <div className={servicestyles.servicesbox1}>
              <div className={servicestyles.box}>
                <Image
                  src={pic4}
                  alt=""
                  className={servicestyles.myimages}
                  width={400}
                  height={300}
                  layout=""
                />
                <h3>Ride</h3>
              </div>
              <div className={servicestyles.box}>
                <Image
                  src={pic2}
                  alt=""
                  className={servicestyles.myimages}
                  width={400}
                  height={300}
                  layout=""
                />
                <h3>Luxury</h3>
              </div>
            </div>
            <br />
            <div className={servicestyles.servicesbox2}>
              <div className={servicestyles.box}>
                <Image
                  src={pic3}
                  alt=""
                  className={servicestyles.myimages}
                  width={400}
                  height={300}
                  layout=""
                />
                <h3>Delivery</h3>
              </div>
              <div className={servicestyles.box}>
                <Image
                  src={pic1}
                  alt=""
                  className={servicestyles.myimages}
                  width={400}
                  height={300}
                  layout=""
                />
                <h3>Truck</h3>
              </div>
            </div>
          </div>
          <br />
          <div className={servicestyles.morecontainer}>
            <button onClick={handleOpenMore}>More</button>
            { openMore ? <div className={servicestyles.moreitems}>
              <div className={servicestyles.item}>
                <h3>Car Rental</h3>
              </div>
              <div className={servicestyles.item}>
                <h3>Hotel Reservation</h3>
              </div>
              <div className={servicestyles.item}>
                <h3>Ticketing</h3>
              </div>
            </div> : <div></div>}
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default Services;
