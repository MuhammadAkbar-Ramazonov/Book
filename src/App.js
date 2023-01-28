import { Routes, Route, Navigate } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Home } from "./pages/Home/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Lang } from "./components/Lang/Lang";
import { GlobalStyle } from "./assets/styles/GlobalStyled";
import { AddAuthor } from "./pages/AddAuthor";
import { AddBook } from "./pages/AddBook/AddBook";
import { useSelector } from "react-redux";
import { Me } from "./pages/Me/Me";
function App() {
	const { theme } = useSelector((state) => state);

	i18n.use(initReactI18next).init({
		fallbackLng: localStorage.getItem("lang") || "en",
		interpolation: {
			escapeValue: false,
		},
		resources: {
			en: {
				translation: Lang.en,
			},
			ru: {
				translation: Lang.ru,
			},
			uz: {
				translation: Lang.uz,
			},
		},
	});

	return (
		<>
			<Routes>
				<Route path='/' element={<Navigate to='/home' replace={true} />} />
				<Route path='/*' element={<Home />} />
				<Route path='/me*' element={<Me />} />
				<Route path='/register*' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/addauthor' element={<AddAuthor />} />
				<Route path='/addbook' element={<AddBook />} />
			</Routes>
			<GlobalStyle theme={theme.theme} />
		</>
	);
}

export default App;
