import { useEffect } from "react";

import LogIn from "./LogIn";
import MainPageScreen from "./MainPageScreen";
import "../styles/app.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { userInformation } from "../actions/userAction";

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer);
  console.log(user.isUserHaveAnAccount);
  const isUser = user.isUserHaveAnAccount;
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(userInformation(user.email));
        console.log(user);
        console.log(user.email);
      } else {
        console.log("Wylogowany", user);
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return <>{!isUser ? <LogIn /> : <MainPageScreen />}</>;
};

export default App;
