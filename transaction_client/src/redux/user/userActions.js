// File responsible to call axios functions and dispatch actions for updating states based on response
// Uses the actions given by slice

import { toast } from "react-toastify";
import { loginUser } from "../../axios/userAxios";
import { setIsAuthenticated, setIsLoading, setUser } from "./userSlice";

// UI --------[ACTION]--------API-------comes with response-----dispatch actions

// Login Action
export const loginUserAction = (userObject) => async (dispatch) => {
  try {
    // call axios
    dispatch(setIsLoading(true));
    const result = await loginUser(userObject);

    if (result.status === "error") {
      dispatch(setIsLoading(false));
      return toast.error(result.message);
    }
    dispatch(setIsAuthenticated(true));
    dispatch(setUser(result.data));
    toast.success(result.message);
  } catch (err) {
    console.log(err);
  }
  dispatch(setIsLoading(false));
};
