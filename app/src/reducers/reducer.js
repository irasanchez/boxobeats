import { FETCH_DATA, GET_SOUNDS, SET_ERROR } from "../actions/actions";

const initialState = {
  sounds: [],
  fetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        fetching: true,
        sounds: [],
      };
    case GET_SOUNDS:
      return {
        ...state,
        sounds: action.payload,
        fetching: false,
      };
    case SET_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
