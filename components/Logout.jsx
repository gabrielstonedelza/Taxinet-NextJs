import { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import Spinner from "../components/Spinner";
import styles from "../styles/logout/Logout.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Logout = () => {
  const [isPosting, setIsPosting] = useState(false);
  const { loginToken, setLoginToken } = useContext(LoginContext);
  const router = useRouter();


  const handleLogout = async (e) => {
    e.preventDefault();
    toast.success("Please wait 🙏,logging you out.");
    setIsPosting(true);
    setTimeout(function () {
      setIsPosting(false);
    }, 1500);
    const logoutUrl = "https://taxinetghana.xyz/auth/token/logout/";
    axios({
      method: "POST",
      url: logoutUrl,
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': `Token ${loginToken}`,
      },
    })
      .then(function (response) {
        setLoginToken("");
        localStorage.removeItem("token");

        router.push("/");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  };
  return (
    <>
      <ToastContainer
        className="foo"
        style={{ width: "320px", fontSize: "15px" }}
      />
      <div className={styles.logoutcontainer}>
        <h3>Are you sure you want to logout?</h3>
        <div className={styles.logoutoptions}>
          {isPosting ? (
            <Spinner />
          ) : (
            <button onClick={handleLogout}> Yes</button>
          )}
          <Link href="/dashboard">No</Link>
        </div>
      </div>
    </>
  );
};

export default Logout;
