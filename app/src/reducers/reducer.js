import {
  FETCH_DATA,
  GET_SOUNDS,
  GET_SOUND_BY_ID,
  SET_ERROR,
  ADD_TIP,
  ADD_TO_PRACTICE,
} from "../actions/actions";

const initialState = {
  sounds: [],
  fetching: false,
  posting: false,
  deleting: false,
  updating: false,
  error: "",
  practiceSet: [],
  currentUser: {},
  currentSound: {},
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
    case GET_SOUND_BY_ID:
      return {
        ...state,
        currentSound: action.payload,
        fetching: false,
      };
    case SET_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    case ADD_TIP:
      return {
        ...state,
        posting: true,
      };
    case ADD_TO_PRACTICE:
      return {
        ...state,
        practiceSet: [...state.practiceSet, action.payload],
      };
    default:
      return state;
  }
};
