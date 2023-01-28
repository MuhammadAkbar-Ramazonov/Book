import { createContext, useState } from "react";

export const BooksContext = createContext();
export const BooksProvider = ({ children }) => {
	const [books, setBooks] = useState(
		JSON.parse(localStorage.getItem("books")) || [],
	);

	if (books) {
		localStorage.setItem("books", JSON.stringify(books));
	} else {
		localStorage.removeItem("books");
	}

	return (
		<BooksContext.Provider value={{ books, setBooks }}>
			{children}
		</BooksContext.Provider>
	);
};
