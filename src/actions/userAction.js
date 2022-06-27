export const userAction = {
  IS_USER_HAVE_ACCOUNT: "IS_USER_HAVE_ACCOUNT",
  LOG_IN_CHECK: "LOG_IN_CHECK",
  USER_INFO: "USER_INFO",
};

export const haveAccount = (user) => ({
  type: userAction.IS_USER_HAVE_ACCOUNT,
  payload: user,
});

export const logInCheck = () => ({
  type: userAction.LOG_IN_CHECK,
});

export const userInformation = (user) => ({
  type: userAction.USER_INFO,
  payload: user,
});
