import Image from "next/image";
import facebook from "../assets/images/icons/facebook.png";
import instagram from "../assets/images/icons/instagram.png";
import twitter from "../assets/images/icons/twitter.png";
import youtube from "../assets/images/icons/youtube.png";
import mail from "../assets/images/icons/mail.png";
import phone from "../assets/images/icons/phone-call.png";
import footerstyle from "../styles/footercontact/FooterContact.module.css";

const FooterContact = () => {
  const copyCode = "&#169";
  return (
    <>
      <div className={footerstyle.footercontact} id="footer">
        <h2>Contact Us</h2>
        <div className={footerstyle.contactcontainer}>
          <div className={footerstyle.socialmedia}>
            <div className={footerstyle.socialbox}>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={facebook} alt="" width={40} height={40} />
              </a>
            </div>
            <div className={footerstyle.socialbox}>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={instagram} alt="" width={40} height={40} />
              </a>
            </div>
            <div className={footerstyle.socialbox}>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={twitter} alt="" width={40} height={40} />
              </a>
            </div>
            <div className={footerstyle.socialbox}>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={youtube} alt="" width={40} height={40} />
              </a>
            </div>
          </div>
          <div className={footerstyle.contacts}>
            <div className={footerstyle.contactbox}>
              <Image src={mail} alt="" width={30} height={30} />{" "}
              taxinetghana@gmail.com
            </div>
            <div className={footerstyle.contactbox}>
              <Image src={phone} alt="" width={30} height={30} /> +233 271020030
              | +233 2444950505
            </div>
            <div className={footerstyle.contactbox}>
              <a href="#">Privacy</a>
            </div>
            <div className={footerstyle.contactbox}>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
        <br />
        <div className={footerstyle.sitename}>
          ?? 2023 TaxinetGhana.All Rights Reserved. Designed by Havens
          Software
        </div>
      </div>
    </>
  );
};

export default FooterContact;
