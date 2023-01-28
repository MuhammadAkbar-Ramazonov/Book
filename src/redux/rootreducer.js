import { combineReducers } from "redux";
import { langReducer } from "./lang/langReducer";
import { ThemeReducer } from "./theme/themeReducer";
import { TokenReducer } from "./token/tokenReducer";

export const rootReducer = combineReducers({
	token: TokenReducer,
	theme: ThemeReducer,
	lang: langReducer,
});
