import { Box, Container } from "@mui/system";
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
	AutherDescStyled,
	AutherItemStyled,
	AutherLinkStyled,
	AutherListstyled,
	AuthorTitleStyled,
	ImgBgStyled,
	ImgStyled,
	ItemStyled,
	ListStyled,
	TitleStyled,
} from "./categoriesBook.styled";
import { BooksContext } from "../../Context/BooksContext";
import { CardBook } from "../CardBook/CardBook";
import { AuthorContext } from "../../Context/AuthorContext";
import Ornament from "../../assets/images/ornament.png";

export const CategoriesBook = () => {
	const { t } = useTranslation();

	const [genre, setGenre] = useState([]);
	const [authorId, setAuthorId] = useState();
	const { books, setBooks } = useContext(BooksContext);
	const { token } = useSelector((state) => state);
	const { theme } = useSelector((state) => state);
	const { author, setAuthor } = useContext(AuthorContext);

	useEffect(() => {
		axios
			.get("http://localhost:5000/genre")
			.then((data) => {
				setGenre(data.data);
			})
			.catch((err) => console.log(err));
	}, []);
	const params = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:5000/book/genreId/${Object.values(params)[0]}`)
			.then((data) => {
				setAuthor(data.data);
			})
			.catch((err) => console.log(err));
	}, [params]);

	return (
		<Box component='section'>
			<Container maxWidth='xl'>
				<TitleStyled theme={theme.theme}>{t("categories.title")}</TitleStyled>
				<ImgBgStyled src={Ornament} />

				<ListStyled>
					{genre.map((item) => {
						return (
							<ItemStyled key={item.id}>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "category-link category-link-active"
											: "category-link"
									}
									to={`${item.id}`}
								>
									{item.name}
								</NavLink>
							</ItemStyled>
						);
					})}
				</ListStyled>
				<AutherListstyled>
					{Object.values(params)[0] !== ""
						? author.map((item, index) => <CardBook key={index} item={item} />)
						: ""}
				</AutherListstyled>
			</Container>
		</Box>
	);
};
