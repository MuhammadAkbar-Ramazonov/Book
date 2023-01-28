import { GET_LANG } from "./langType";

const initialState = {
	lang: localStorage.getItem("lang") || "",
};

export const langReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_LANG:
			return {
				...state,
				lang: action.payload,
			};
		default:
			return state;
	}
};
