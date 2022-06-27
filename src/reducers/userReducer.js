import { userAction } from "../actions/userAction";

const userInfo = {
  isUserlogInCheck: false,
  isUserHaveAnAccount: false,
  userInformation: [],
};

const userReducer = (state = userInfo, action) => {
  switch (action.type) {
    case userAction.IS_USER_HAVE_ACCOUNT:
      return { ...state, isUserHaveAnAccount: action.payload };
    case userAction.LOG_IN_CHECK:
      return { ...state, isUserlogInCheck: !state.isUserlogInCheck };
    case userAction.USER_INFO:
      return {
        ...state,
        userInformation: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
