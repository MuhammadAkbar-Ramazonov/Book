import React from "react";
import { Carusel } from "../Carusel/Carusel";
import { Categories } from "../Categories/Categories";
import { Search } from "../Search";

export const Category = () => {
	return (
		<>
			<Carusel />
			<Search url='author/search?author' />
			<Categories />
		</>
	);
};
