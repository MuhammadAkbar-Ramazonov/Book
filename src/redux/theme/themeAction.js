import { GET_THEME } from "./themeType";

export const getTheme = (theme) => {
	return {
		type: GET_THEME,
		payload: theme,
	};
};
