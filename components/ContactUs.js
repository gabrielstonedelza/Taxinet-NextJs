import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/contactstyle/Contact.module.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Spinner from "../components/Spinner";
var FormData = require("form-data");

const ContactUs = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  var bodyForm = new FormData();
  bodyForm.append("name", name);
  bodyForm.append("email", email);
  bodyForm.append("phone", phone);
  bodyForm.append("message", message);

  const handleContact = async (e) => {
    setIsPosting(true);
    setTimeout(function () {
      setIsPosting(false);
    }, 1500);
    e.preventDefault();
    toast.success("Please wait,processing your data");
    const apiUrl = "https://taxinetghana.xyz/post_to_contact/";
    axios({
      method: "post",
      url: apiUrl,
      data: bodyForm,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        setTimeout(function () {
          router.push("/");
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        }, 3000);
      })
      .catch((error) => {
        if (error.response) {
          toast.error(`${error.response.data}`);
        }
      });
  };
  return (
    <div>
      <div className={styles.myform}>
        <ToastContainer
          className="foo"
          style={{ width: "320px", fontSize: "15px" }}
        />

        <div className={styles.formcontainer}>
          <div className={styles.forform}>
            <form onSubmit={handleContact} className={styles.form}>
              <h3>Get In Touch.</h3>
              <div className={styles.form__group}>
                <input
                  type="text"
                  id="title"
                  classNames={styles.form__input}
                  placeholder="Enter name"
                  autoComplete="off"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.form__group}>
                <input
                  type="text"
                  id="email"
                  classNames={styles.form__input}
                  placeholder="Enter email"
                  autoComplete="off"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.form__group}>
                <input
                  type="text"
                  id="phone"
                  classNames={styles.form__input}
                  placeholder="Enter phone"
                  autoComplete="off"
                  value={phone}
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className={styles.form__group}>
                <input
                  type="text"
                  id="message"
                  classNames={styles.form__input}
                  placeholder="Enter message"
                  autoComplete="off"
                  value={message}
                  required
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <br />
              <div className={styles.formcontrol}>
                {isPosting ? <Spinner /> : <button type="submit">Send</button>}
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
