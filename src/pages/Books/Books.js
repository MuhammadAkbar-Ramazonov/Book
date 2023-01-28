import React from "react";
import { Carusel } from "../../components/Carusel/";
import { CategoriesBook } from "../../components/CategoriesBook";
import { Search } from "../../components/Search";
export const Books = () => {
	return (
		<>
			<Carusel />
			<Search url='book/search?book' />
			<CategoriesBook />
		</>
	);
};
