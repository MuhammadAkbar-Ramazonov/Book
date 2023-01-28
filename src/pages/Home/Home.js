import React from "react";
import { Route, Routes } from "react-router-dom";
import { Books } from "../Books";
import { Category } from "../../components/Category/Category";
import { Header } from "../../components/Header";
import { SiteMainStyled } from "./home.styled";
import { SinglePage } from "../SinglePage";
import { SinglePageBooks } from "../SinglePageBooks/SinglePageBooks";

export const Home = () => {
	return (
		<>
			<Header />

			<SiteMainStyled>
				<Routes>
					<Route path='home/*' element={<Category />} />
					<Route path='books/*' element={<Books />} />
					<Route path='single/*' element={<SinglePage />} />
					<Route path='singlebook/*' element={<SinglePageBooks />} />
				</Routes>
			</SiteMainStyled>
		</>
	);
};
