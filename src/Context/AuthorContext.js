import { createContext, useState } from "react";

export const AuthorContext = createContext();
export const AuthorProvider = ({ children }) => {
	const [author, setAuthor] = useState(
		JSON.parse(localStorage.getItem("author")) || [],
	);

	if (author) {
		localStorage.setItem("author", JSON.stringify(author));
	} else {
		localStorage.removeItem("author");
	}

	return (
		<AuthorContext.Provider value={{ author, setAuthor }}>
			{children}
		</AuthorContext.Provider>
	);
};
