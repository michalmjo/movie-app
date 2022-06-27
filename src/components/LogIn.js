import { useRef } from "react";
import "../styles/logIn.css";
import CreateAccount from "../Elements/CreateAccount";
import { signInWithEmailAndPassword } from "firebase/auth";
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
                <h2 className="form__signIn">Sign In</h2>
                <form className="form__wrapper">
                  <label htmlFor="text">email</label>
                  <input
                    ref={emailRef}
                    placeholder="email"
                    type="email"
                    required
                  />
                  <label htmlFor="text">password</label>
                  <input
                    ref={passwordRef}
                    placeholder="password"
                    type="password"
                    required
                  />
                  <button className="form__wrapper-btn" onClick={logInToApp}>
                    Loggin
                  </button>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
