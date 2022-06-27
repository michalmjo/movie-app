import { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { logInCheck, haveAccount } from "../actions/userAction";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        emailRef.current.value = null;
        passwordRef.current.value = null;
        dispatch(haveAccount(true));
        navigate("/");
        console.log(`user created:`, cred.user);
      })
      .catch((err) => err.message);
  };

  const handleBackToLogIn = () => {
    dispatch(logInCheck());
  };

  return (
    <>
      <form className="form__wrapper">
        <label htmlFor="text">email</label>
        <input placeholder="email" ref={emailRef} type="email" />
        <label htmlFor="text">password</label>
        <input placeholder="password" ref={passwordRef} type="password" />
        <button onClick={handleCreateAccount}>Create</button>
        <div className="form__account">
          <p>You arleady have one ?</p>
          <span onClick={handleBackToLogIn} className="form__account--btn">
            Log In
          </span>
        </div>
      </form>
    </>
  );
};

export default CreateAccount;
