import axios from "axios";
import { axiosWithAuth } from "../components/auth/axiosWithAuth";
const apiUrl = process.env.REACT_APP_API_URL;

export const FETCH_DATA = "FETCH_DATA";
export const GET_SOUNDS = "GET_SOUNDS";
export const SET_ERROR = "SET_ERROR";

export const getSounds = () => (dispatch) => {
  dispatch({ type: FETCH_DATA });
  axiosWithAuth()
    .get(apiUrl)
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_SOUNDS, payload: res.data.sounds });
    })
    .catch((err) => {
      console.log("error fetching data from api, err: ", err);
      dispatch({
        type: SET_ERROR,
        payload: "error fetching data from api, err: ",
      });
    });
};
