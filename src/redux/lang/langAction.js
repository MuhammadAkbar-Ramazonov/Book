import { GET_LANG } from "./langType";

export const getLang = (lang) => {
	return {
		type: GET_LANG,
		payload: lang,
	};
};
