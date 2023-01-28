import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
	AutherDescStyled,
	AutherItemStyled,
	AutherLinkStyled,
	AuthorTitleStyled,
	ImgStyled,
} from "../CategoriesBook/categoriesBook.styled";

export const CardBook = ({ item }) => {

	const { token, theme } = useSelector((state) => state);
	const [author, setAuthor] = useState([]);
	useEffect(() => {
		axios
			.get(`http://localhost:5000/author/authorId/${item.author_id}`, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((data) => {
				setAuthor(data.data);
			})
			.catch((err) => console.log(err));
	}, [item.author_id]);

	return (
		<>
			<AutherItemStyled theme={theme.theme}>
				<AutherLinkStyled id={item.id} to={`/singlebook/${item.id}`}>
					<ImgStyled src={`http://localhost:5000/${item.image}`} />
					<AuthorTitleStyled theme={theme.theme}>
						{item.title}
					</AuthorTitleStyled>
					<AutherDescStyled theme={theme.theme}>
						{author.first_name} {author.last_name}
					</AutherDescStyled>
				</AutherLinkStyled>
			</AutherItemStyled>
		</>
	);
};
