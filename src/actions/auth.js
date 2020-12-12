import { types } from "../types/types"; //nos ayuda a comparar que tipo de accion tomar
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import Swal from "sweetalert2";
import {
  errorMsgForm,
  removeErrorMsgForm,
  startLoading,
  finishLoading,
} from "./ui";
import { LogoutCleaning } from "./notes";

export const loginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(removeErrorMsgForm());
        dispatch(login(user.uid, user.displayName));

        dispatch(finishLoading());
      })
      .catch((e) => {
        dispatch(finishLoading());
        dispatch(errorMsgForm(e.message));
        Swal.fire("ERROR", e.message, "error");
      });
  };
};
//accion registrar usuario

export const newRegister = (name, email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(removeErrorMsgForm());
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((e) => {
        dispatch(finishLoading());
        dispatch(errorMsgForm(e.message));
        Swal.fire("ERROR", e.message, "error");
      });
  };
};
//accion auth google
export const startGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};
//accion login
export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: { uid, displayName },
  };
};
export const logout = () => {
  return { type: types.logout };
};

export const StartLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
    dispatch(LogoutCleaning());
  };
};
