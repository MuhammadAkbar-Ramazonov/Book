import { Box, Container } from "@mui/system";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
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
	WrapperStyled,
} from "./categories.styled";
import BottomCardImg from "../../assets/images/BottomCardImg.svg";
import BottomCardImgLight from "../../assets/images/BottomCardImgLight.svg";
import TopCardImg from "../../assets/images/TopCardImg.svg";
import TopCardImgLight from "../../assets/images/TopCardImgLight.svg";
import { Typography } from "@mui/material";
import { AuthorContext } from "../../Context/AuthorContext";
import Ornament from "../../assets/images/ornament.png";
export const Categories = () => {
	const { t } = useTranslation();

	const [genre, setGenre] = useState([]);
	const { author, setAuthor } = useContext(AuthorContext);

	const { theme } = useSelector((state) => state);
	const params = useParams();
	useEffect(() => {
		axios
			.get("http://localhost:5000/genre")
			.then((data) => {
				setGenre(data.data);
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/author/genreId/${Object.values(params)[0]}`)
			.then((data) => {
				setAuthor(data.data);
			})
			.catch((err) => console.log(err));
	}, [params]);

	const bottomImg =
		theme.theme === "false" ? BottomCardImgLight : BottomCardImg;
	const topImg = theme.theme === "false" ? TopCardImgLight : TopCardImg;

	return (
		<Box component='section'>
			<Container maxWidth='xl'>
				<TitleStyled theme={theme.theme}>{t("categories.title")}</TitleStyled>

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
				<ImgBgStyled src={Ornament} />
				<AutherListstyled>
					{Object.values(params)[0] !== ""
						? author.map((item) => {
								return (
									<AutherItemStyled theme={theme.theme}>
										<AutherLinkStyled id={item.id} to={`/single/${item.id}`}>
											<ImgStyled
												src={`http://localhost:5000/${item.image}`}
												width='300'
												height='250'
											/>
											<WrapperStyled topImg={topImg} bottomImg={bottomImg}>
												<AuthorTitleStyled theme={theme.theme}>
													{item.first_name} {item.last_name}
												</AuthorTitleStyled>
												<AutherDescStyled theme={theme.theme}>
													{item.date_of_birth}-{item.date_of_death}
												</AutherDescStyled>
											</WrapperStyled>
										</AutherLinkStyled>
									</AutherItemStyled>
								);
						  })
						: ""}
				</AutherListstyled>
			</Container>
		</Box>
	);
};
