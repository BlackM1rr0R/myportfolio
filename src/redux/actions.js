export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";

export const changeLanguage = (language) => ({
  type: CHANGE_LANGUAGE,
  payload: language,
});

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
});
