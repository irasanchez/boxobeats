import axios from "axios";
import { axiosWithAuth } from "../components/auth/axiosWithAuth";

const apiUrl = process.env.REACT_APP_API_URL;

export const FETCH_DATA = "FETCH_DATA";
export const GET_SOUNDS = "GET_SOUNDS";
export const GET_SOUND_BY_ID = "GET_SOUND_BY_ID";
export const SET_ERROR = "SET_ERROR";
export const ADD_TIP = "ADD_TIP";
export const TOGGLE_PRACTICE = "TOGGLE_PRACTICE";
export const TOGGLE_AUTH = "TOGGLE_AUTH";
export const SET_FILTER = "SET_FILTER";

export const getSounds = () => (dispatch) => {
  dispatch({ type: FETCH_DATA });
  axios
    .get(`${apiUrl}/api/sounds`)
    .then((res) => {
      let data = res.data.sort((soundA, soundB) => {
        return soundA.name > soundB.name ? 1 : -1;
      });
      dispatch({
        type: GET_SOUNDS,
        payload: data,
      });
      dispatch({ type: SET_FILTER, payload: "" });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERROR,
        payload: `error fetching data from api, err: ${err}`,
      });
    });
};

export const getSoundByID = (id) => (dispatch) => {
  dispatch({ type: FETCH_DATA });
  axios
    .get(`${apiUrl}/api/sounds/${id}`)
    .then((res) => {
      dispatch({ type: GET_SOUND_BY_ID, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERROR,
        payload: "error fetching data from api, err: ",
      });
    });
};

export const togglePractice = (sound) => ({
  type: TOGGLE_PRACTICE,
  payload: sound,
});

export const setFilter = (query) => ({
  type: SET_FILTER,
  payload: query,
});

export const toggleAuth = () => ({
  type: TOGGLE_AUTH,
});
