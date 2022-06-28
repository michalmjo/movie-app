import { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { logInCheck, haveAccount } from "../actions/userAction";
import { useNavigate } from "react-router-dom";

import FormValidation from "../components/FormValidation";

const CreateAccount = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validate, setValidate] = useState(false);
  const [messageFrom, setMessageForm] = useState("");

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
        setValidate(false);
        console.log(`user created:`, cred.user);
      })
      .catch((err) => {
        if (passwordRef.current.value.length <= 5) {
          setValidate(true);
          validation(messageValidation);
        }
        return err.message;
      });
  };
  const messageValidation = {
    shortPass: "Password must contain minimum 6 characters",
    contain: `Email must contain "@"`,
  };

  const handleBackToLogIn = () => {
    dispatch(logInCheck());
  };
  const validation = (message) => {
    setMessageForm(message);

    setTimeout(() => {
      setValidate(false);
      setMessageForm("");
    }, 2000);
  };

  return (
    <>
      <h2 className="form__signIn">Create Account</h2>
      <form className="form__wrapper">
        <label htmlFor="text">email</label>
        <input placeholder="email" ref={emailRef} type="email" required />
        <label htmlFor="text">password</label>
        <input
          placeholder="password"
          ref={passwordRef}
          type="password"
          required
        />
        <button className="form__wrapper-btn" onClick={handleCreateAccount}>
          Create
        </button>
        <div className="form__account">
          <p>You arleady have one ?</p>
          <span onClick={handleBackToLogIn} className="form__account--btn">
            Log In
          </span>
        </div>
        {validate && <FormValidation message={messageFrom} />}
      </form>
    </>
  );
};

export default CreateAccount;
