import { Box } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useContext, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { SearchDark, SearchLight } from "../../assets/images/Images";
import { AuthorContext } from "../../Context/AuthorContext";
import {
	ButtonStyled,
	FormStyled,
	InputStyled,
	SearchStyled,
	TitleStyled,
} from "./search.styled";
export const Search = ({ url }) => {
	const { setAuthor } = useContext(AuthorContext);
	const inputValue = useRef();
	const { t } = useTranslation();
	const { theme } = useSelector((state) => state);
	const handleGetAuthor = (evt) => {
		evt.preventDefault();
		axios
			.get(
				`http://localhost:5000/${url}=${inputValue.current.value.toLowerCase()}`,
			)
			.then((data) => {
				console.log(data.data);
				setAuthor(data.data);
			})
			.catch((err) => console.log(err));
	};
	return (
		<Box  component='section'>
			<Container maxWidth='md'>
				<SearchStyled theme={theme.theme}>
					<TitleStyled theme={theme.theme}>{t("qidirish.title")}</TitleStyled>

					<FormStyled onSubmit={(evt) => handleGetAuthor(evt)}>
						<InputStyled
							ref={inputValue}
							theme={theme.theme}
							placeholder={t("qidirish.playspolder")}
						/>
						<ButtonStyled theme={theme.theme} type='submit'>
							{theme.theme === "false" ? <SearchLight /> : <SearchDark />}
							{t("qidirish.button")}
						</ButtonStyled>
					</FormStyled>
				</SearchStyled>
			</Container>
		</Box>
	);
};
