import Image from "next/image";
import aboutStyles from "../styles/aboutschedule/AboutSchedule.module.css";
import androidPic from "../assets/images/icons/google-play.png"
import appStorePic from "../assets/images/icons/app-store.png"

const AboutSchedule = () => {
  return (
    <>
      <div className={aboutStyles.aboutschedulecontainer} id="aboutSchedule">
        <div className={aboutStyles.contents}>
          <h2>About Taxinet Scheduling</h2>
          <div className={aboutStyles.scheduleoptions}>
            <div className={aboutStyles.option1}>
              <h3>How Taxinet Scheduling works</h3>
              <p>
                Taxinet is all about scheduling your rides to your destination
                of choice.
              </p>
              <p>All you have to do is to schedule for</p>
              <ul>
                <li>One Time</li>
                <li>Daily</li>
                <li>Weekly</li>
                <li>Monthly</li>
                <li>Specific Days</li>
                <li>Until Cancelled</li>
              </ul>
            </div>
            <div className={aboutStyles.option2}>
              <h3>After Scheduling</h3>
              <p>
                You will get a message and a call from Taxinet to verify your
                schedule.
              </p>
              <p>
                Price for your schedule would be available for you after
                confirmation.
              </p>
              <p>Free free to bagain,remember we are here for you 😉.</p>
              <p>
                After that you will then be assigned a driver for your schedule.
              </p>
              <p>Enjoy the convience and safe ride from Taxinet.</p>
            </div>
          </div>
          <h2>Taxinet is now available only in Kumasi</h2>
          <br />
          <div className={aboutStyles.available}>
            <div className={aboutStyles.availability}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126804.78720670275!2d-1.6863179088608893!3d6.690251020495021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb93e59a4e4c49%3A0x829c711d7b65e682!2sKumasi!5e0!3m2!1sen!2sgh!4v1658157340724!5m2!1sen!2sgh"
                title=""

                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className={aboutStyles.availablemessage}>
              <p>
                Taxinet has started its operation in Kumasi and would be available to all other regions
                soon.Services will not be available for other regions until ready.We hope to get to you soon.
              </p>
            </div>
          </div>
          <h2>Apps coming soon</h2>
          <div className={aboutStyles.appannouncement}>
            <div className={aboutStyles.appstores}>
              <Image src={androidPic} alt="Android" className={aboutStyles.imageimg} width={50} height={50} />
              <Image src={appStorePic} alt="Apple" className={aboutStyles.imageimg} width={50} height={50} />
            </div>
            <p>
              Apps for both android and ios will be available soon for download.You will certainly find it
              here when ready.
            </p>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default AboutSchedule;
