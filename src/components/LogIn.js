import { useRef } from "react";
import "../styles/logIn.css";
import CreateAccount from "../Elements/CreateAccount";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { logInCheck, haveAccount } from "../actions/userAction";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const alreadyHaveAccount = useSelector((state) => state.userReducer);
  const signIn = alreadyHaveAccount.isUserlogInCheck;

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigation = useNavigate();

  const dispatch = useDispatch();
  console.log(signIn);

  const handleSignInUser = () => {
    console.log("klik");
    dispatch(logInCheck());
  };

  const logInToApp = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        navigation("/");
        emailRef.current.value = null;
        passwordRef.current.value = null;
        dispatch(haveAccount(true));
        console.log("user logged in: ", cred.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="logginScreen">
        <div className="logginScreen__dashboard">
          <div className="form">
            {!signIn ? (
              <>
                <form className="form__wrapper">
                  <label htmlFor="text">email</label>
                  <input ref={emailRef} placeholder="email" type="email" />
                  <label htmlFor="text">password</label>
                  <input
                    ref={passwordRef}
                    placeholder="password"
                    type="password"
                  />
                  <button onClick={logInToApp}>Loggin</button>
                </form>
                <div className="form__account">
                  <p>You don't have account?</p>
                  <button
                    onClick={handleSignInUser}
                    className="form__account--btn"
                  >
                    Create one
                  </button>
                </div>
              </>
            ) : (
              <CreateAccount />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
