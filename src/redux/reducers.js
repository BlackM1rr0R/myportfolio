import { CHANGE_LANGUAGE, TOGGLE_DARK_MODE } from "./actions";

const initialState = {
  language: localStorage.getItem("language") || "en",
  darkMode: localStorage.getItem("darkMode") === "true" || false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      localStorage.setItem("language", action.payload);
      return {
        ...state,
        language: action.payload,
      };
    case TOGGLE_DARK_MODE:
      const newDarkMode = !state.darkMode;
      localStorage.setItem("darkMode", newDarkMode);
      return {
        ...state,
        darkMode: newDarkMode,
      };
    default:
      return state;
  }
}

export default rootReducer;
