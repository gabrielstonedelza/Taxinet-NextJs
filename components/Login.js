import { useState, useContext } from "react";
import { useRouter } from "next/router";
import styles from "../styles/contactstyle/Contact.module.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Spinner from "../components/Spinner";
import Link from "next/link";
import { LoginContext } from "../context/LoginContext";

var FormData = require("form-data");

const Login = () => {
  const {loginToken,setLoginToken} = useContext(LoginContext);
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  

  var bodyForm = new FormData();
  bodyForm.append("username", username);
  bodyForm.append("password", password);

  const handleLogin = async (e) => {
    e.preventDefault();
    toast.success("Please wait,processing your data")
    setIsPosting(true);
    setTimeout(function () {
      setIsPosting(false);
    }, 2500);
    const apiUrl = "https://taxinetghana.xyz/auth/token/login/";
    axios({
      method: "POST",
      url: apiUrl,
      data: bodyForm,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        router.push("/dashboard");
        setLoginToken(response.data["auth_token"])
        localStorage.setItem("token", response.data["auth_token"])
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.data["non_field_errors"]) {
            toast.error(`Sorry 😢,${error.response.data["non_field_errors"]}`);
          }
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
            <form onSubmit={handleLogin} className={styles.form}>
              <h3>Login</h3>
              <div className={styles.form__group}>
                <input
                  type="text"
                  id="username"
                  className={styles.form__input}
                  placeholder="Enter username"
                  autoComplete="off"
                  value={username}
                  required
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className={styles.form__group}>
                <input
                  type="password"
                  id="password"
                  className={styles.form__input}
                  placeholder="Enter password"
                  autoComplete="off"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <br />
              <div className={styles.formcontrol}>
                {isPosting ? <Spinner /> : <button type="submit">Login</button>}
              </div>
              <br />
              <div className={styles.noaccounts}>
                <small>Don't have an account?</small>
                <Link href="/signup">Register</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
