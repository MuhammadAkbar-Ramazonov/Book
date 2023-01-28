import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AuthorProvider } from "./Context/AuthorContext";
import { BooksProvider } from "./Context/BooksContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<AuthorProvider>
		<BooksProvider>
			<Provider store={store}>
				<Router>
					<App />
				</Router>
			</Provider>
		</BooksProvider>
	</AuthorProvider>,
	// </React.StrictMode>
);
