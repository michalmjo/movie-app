import { useRef, useState } from "react";
import "../styles/logIn.css";
import CreateAccount from "../Elements/CreateAccount";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { logInCheck, haveAccount } from "../actions/userAction";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import FormValidation from "./FormValidation";

const LogIn = () => {
  const alreadyHaveAccount = useSelector((state) => state.userReducer);
  const signIn = alreadyHaveAccount.isUserlogInCheck;
  const [validate, setValidate] = useState(false);
  const [messageFrom, setMessageForm] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigation = useNavigate();

  const dispatch = useDispatch();
  console.log(signIn);

  const handleSignInUser = () => {
    dispatch(logInCheck());
  };
  const messageValidation = {
    userOrPass: "Wrong User or password",
  };

  const logInToApp = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(passwordRef.current.value.length);

    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        navigation("/");
        emailRef.current.value = null;
        passwordRef.current.value = null;
        dispatch(haveAccount(true));
        setValidate(false);
        console.log("user logged in: ", cred.user);
      })
      .catch((err) => {
        setValidate(true);
        validation(messageValidation);
        console.log(err.message);
      });
  };

  const validation = (message) => {
    setMessageForm(message);
    console.log(`To jest wiadomosc z validation ${message}`);
    setTimeout(() => {
      setValidate(false);
      setMessageForm("");
    }, 2000);
  };

  return (
    <>
      <div className="logginScreen">
        <div className="logginScreen__dashboard">
          <div className="form">
            {!signIn ? (
              <>
                <h2 className="form__signIn">Sign In</h2>
                <form onSubmit={logInToApp} className="form__wrapper">
                  <label htmlFor="text">email</label>
                  <input
                    required
                    ref={emailRef}
                    placeholder="email"
                    type="email"
                  />
                  <label htmlFor="text">password</label>
                  <input
                    ref={passwordRef}
                    placeholder="password"
                    type="password"
                    required
                  />
                  <button className="form__wrapper-btn">Loggin</button>
                </form>
                <div className="form__account">
                  <p>You don't have account?</p>
                  <span
                    onClick={handleSignInUser}
                    className="form__account--btn"
                  >
                    Create one
                  </span>
                </div>
              </>
            ) : (
              <CreateAccount />
            )}
            {validate && <FormValidation message={messageFrom} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
