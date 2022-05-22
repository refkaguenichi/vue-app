import axios from "axios";
import { getErrors } from "./../../../services/getErrors";
import {
  AUTH_ACTION,
  AUTO_LOGIN_ACTION,
  AUTO_LOGOUT_ACTION,
  LOGIN_ACTION,
  LOGOUT_ACTION,
  SET_AUTO_LOGOUT_MUTATION,
  // LOADING_SPINNER_SHOW_MUTATION,
  SET_USER_TOKEN_DATA_MUTATION,
  SIGNUP_ACTION,
} from "./../../storeConstant";

let timer = "";
export default {
  async [LOGIN_ACTION](context, payload) {
    return context.dispatch(AUTH_ACTION, {
      ...payload,
      url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNYl6qoSOGI34nMcVG8a6sbETjelpNnFw`,
    });
  },
  async [SIGNUP_ACTION](context, payload) {
    return context.dispatch(AUTH_ACTION, {
      ...payload,
      url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNYl6qoSOGI34nMcVG8a6sbETjelpNnFw`,
    });
  },
  async [AUTH_ACTION](context, payload) {
    let postData = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };
    let res = "";
    try {
      res = await axios.post(payload.url, postData);
      let tokenData = {
        token: res.data.idToken,
        refreshToken: res.data.refreshToken,
        expiresIn: res.data.expiresIn,
        email: res.data.email,
        userId: res.data.localId,
      };
      if (res.status === 200) {
        let expirationTime = +res.data.expiresIn * 1000;

        timer = setTimeout(() => {
          context.dispatch(AUTO_LOGOUT_ACTION);
        }, expirationTime);
        context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData);
        localStorage.setItem("userData", JSON.stringify(tokenData));
      }
    } catch (err) {
      let errorMessage = getErrors(err.response.data.error.errors[0].message);
      throw errorMessage;
    }
  },
  [AUTO_LOGIN_ACTION](context) {
    let userDataString = localStorage.getItem("userData");

    if (userDataString) {
      let userData = JSON.parse(userDataString);
      let expirationTime = userData.expiresIn - new Date().getTime();

      if (expirationTime < 10000) {
        context.dispatch(AUTO_LOGOUT_ACTION);
      } else {
        timer = setTimeout(() => {
          context.dispatch(AUTO_LOGOUT_ACTION);
        }, expirationTime);
      }
      context.commit(SET_USER_TOKEN_DATA_MUTATION, userData);
    }
  },
  [LOGOUT_ACTION](context) {
    context.commit(SET_USER_TOKEN_DATA_MUTATION, {
      email: null,
      token: null,
      expiresIn: null,
      refreshToken: null,
      userId: null,
    });
    localStorage.removeItem("userData");
    if (timer) {
      clearTimeout(timer);
    }
  },
  [AUTO_LOGOUT_ACTION](context) {
    context.dispatch(LOGOUT_ACTION);
    context.commit(SET_AUTO_LOGOUT_MUTATION);
  },
};
