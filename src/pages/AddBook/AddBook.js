import { InputAdornment, Stack, Grid, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	ButtonStyled,
	DescStyled,
	InputStyled,
	LabelStyled,
	LinkStyled,
	OptionStyled,
	SelectStyled,
	TextAreaStyled,
	TitleStyled,
} from "./addbook.steled";
import { Box } from "@mui/system";
import { PlusBtnLight, RegisterBg } from "../../assets/images/Images";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../redux/token/tokenAction";
import { PlusBtn } from "../../assets/images/Images";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import toDownLight from "../../assets/images/toDownLight.svg";
import toDown from "../../assets/images/toDown.svg";

export const AddBook = () => {
	// const dispatch = useDispatch();
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { theme } = useSelector((state) => state);
	const [author, setAuthor] = useState([]);

	const title = useRef("");
	const page = useRef("");
	const year = useRef("");
	const price = useRef("");
	const author_id = useRef("");
	const genre_id = useRef("");
	const description = useRef("");
	const image = useRef("");
	const { token } = useSelector((state) => state);

	const getAuthor = (id) => {
		axios
			.get(`http://localhost:5000/author/genreId/${id}`)
			.then((data) => {
				console.log(data);
				setAuthor(data.data);
			})
			.catch((err) => console.log(err));
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		const newFormData = new FormData();

		newFormData.append("title", title.current.value);
		newFormData.append("page", page.current.value);
		newFormData.append("year", year.current.value - 0);
		newFormData.append("price", price.current.value);
		newFormData.append("genre_id", genre_id.current.value);
		newFormData.append("author_id", author_id.current.value);
		newFormData.append("description", description.current.value);
		newFormData.append("image", image.current.files[0]);

		axios
			.post("http://localhost:5000/book", newFormData, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((data) => {
				console.log(data);
			})
			.catch((err) => console.log(err));
	};
	const bgImg = theme.theme !== "theme" ? toDownLight : toDown;

	return (
		<>
			<Grid container component='form' onSubmit={(evt) => onSubmit(evt)}>
				<Grid
					item
					xs={6}
					sx={{
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						justifyContent: "center",
						backgroundColor:
							theme.theme !== "false" ? "#1B1B1B" : "rgba(243, 243, 243, 0.93)",

						paddingTop: "170px",
						paddingBottom: "174px",
					}}
				>
					<LabelStyled theme={theme.theme}>
						<InputStyled
							ref={image}
							style={{ visibility: "hidden", width: 0, height: 0 }}
							type='file'
						/>

						{theme.theme !== "false" ? <PlusBtn /> : <PlusBtnLight />}
						<DescStyled theme={theme.theme}>{t("addauthor.image")}</DescStyled>
					</LabelStyled>
				</Grid>
				<Grid
					sx={{
						backgroundColor: theme.theme !== "false" ? "#191919" : "#fff",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
					item
					xs={6}
				>
					<Box width='400px'>
						<TitleStyled theme={theme.theme}>{t("addbook.title")}</TitleStyled>
						<Stack spacing={3}>
							<InputStyled
								theme={theme.theme}
								ref={title}
								minLength={3}
								placeholder={t("addbook.input_title")}
							/>
							<InputStyled
								theme={theme.theme}
								ref={page}
								minLength={3}
								placeholder={t("addbook.page")}
							/>
							<InputStyled
								theme={theme.theme}
								ref={year}
								minLength={3}
								type='text'
								placeholder={t("addbook.year")}
							/>
							<InputStyled
								theme={theme.theme}
								ref={price}
								minLength={3}
								type='text'
								placeholder={t("addbook.price")}
							/>
							<SelectStyled
								theme={theme.theme}
								imgUrl={bgImg}
								ref={genre_id}
								required
								onChange={(evt) => {
									console.log(evt.target);
									getAuthor(evt.target.value);
								}}
							>
								<OptionStyled theme={theme.theme} hidden>
									{t("addbook.genre")}
								</OptionStyled>
								<OptionStyled theme={theme.theme} value={1}>
									Temuriylar davri
								</OptionStyled>
								<OptionStyled theme={theme.theme} value={2}>
									Jadid adabiyoti
								</OptionStyled>
								<OptionStyled theme={theme.theme} value={3}>
									Sovet davri
								</OptionStyled>
								<OptionStyled theme={theme.theme} value={4}>
									Mustaqillik davri
								</OptionStyled>
							</SelectStyled>
							<SelectStyled
								theme={theme.theme}
								imgUrl={bgImg}
								ref={author_id}
								required
							>
								<OptionStyled theme={theme.theme} selected hidden>
									{t("addbook.author")}
								</OptionStyled>
								{author.map((item) => {
									console.log(item);
									return (
										<OptionStyled theme={theme.theme} value={item.id}>
											{item.first_name} {item.last_name}
										</OptionStyled>
									);
								})}
							</SelectStyled>
							<TextAreaStyled
								theme={theme.theme}
								ref={description}
								rows='5'
								required
								type='text'
								placeholder={t("addbook.bio")}
							/>
						</Stack>

						<ButtonStyled theme={theme.theme} type='submit'>
							{t("addbook.create")}
						</ButtonStyled>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};
