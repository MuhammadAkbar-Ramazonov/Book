import { GET_THEME } from "./themeType";

const initialState = {
	theme: localStorage.getItem("theme") || "dark",
};

export const ThemeReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_THEME:
			return {
				...state,
				theme: action.payload,
			};

		default:
			return state;
	}
};
