import {
  ADD_TIP,
  TOGGLE_PRACTICE,
  TOGGLE_AUTH,
  FETCH_DATA,
  GET_SOUND_BY_ID,
  GET_SOUNDS,
  SET_ERROR,
  SET_FILTER,
} from "../actions/actions";

const initialState = {
  sounds: [],
  fetching: false,
  posting: false,
  deleting: false,
  updating: false,
  error: "",
  practiceSet: [],
  isAuthenticated: false,
  currentSound: {},
  filtered: [],
};

//*next js fundamentals and state management

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
    case TOGGLE_PRACTICE:
      console.log("TOGGLING PRACTICE");
      return {
        ...state,
        practiceSet: state.practiceSet.includes(action.payload)
          ? state.practiceSet.filter(
              (sound) => sound.name !== action.payload.name
            )
          : [...state.practiceSet, action.payload],
      };
    case TOGGLE_AUTH:
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
      };
    case SET_FILTER:
      return {
        ...state,
        filtered: action.payload
          ? state.sounds.filter((sound) =>
              sound.name.toLowerCase().includes(action.payload.toLowerCase())
            )
          : [...state.sounds],
      };
    default:
      return state;
  }
};
