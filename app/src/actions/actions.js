import axios from "axios";
import { axiosWithAuth } from "../components/auth/axiosWithAuth";
const apiUrl = process.env.REACT_APP_API_URL;

export const FETCH_DATA = "FETCH_DATA";
export const GET_SOUNDS = "GET_SOUNDS";
export const GET_SOUND_BY_ID = "GET_SOUND_BY_ID";
export const SET_ERROR = "SET_ERROR";
export const ADD_TIP = "ADD_TIP";
export const ADD_TO_PRACTICE = "ADD_TO_PRACTICE";

export const getSounds = () => (dispatch) => {
  dispatch({ type: FETCH_DATA });
  axiosWithAuth()
    .get(`${apiUrl}/api/sounds`)
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_SOUNDS, payload: res.data });
    })
    .catch((err) => {
      console.log("error fetching data from api, err: ", err);
      dispatch({
        type: SET_ERROR,
        payload: "error fetching data from api, err: ",
      });
    });
};

export const getSoundByID = (id) => (dispatch) => {
  dispatch({ type: FETCH_DATA });
  axiosWithAuth()
    .get(`${apiUrl}/api/sounds/${id}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_SOUND_BY_ID, payload: res.data });
    })
    .catch((err) => {
      console.log("error fetching data from api, err: ", err);
      dispatch({
        type: SET_ERROR,
        payload: "error fetching data from api, err: ",
      });
    });
};

export const addToPractice = (sound) => ({
  type: ADD_TO_PRACTICE,
  payload: sound,
});
