import { Stack, Grid, Button } from "@mui/material";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
	ButtonStyled,
	DescStyled,
	InputStyled,
	LabelStyled,
	OptionStyled,
	SelectStyled,
	TextAreaStyled,
	TitleStyled,
} from "./addauthor.steled";
import { Box } from "@mui/system";
import { PlusBtn, PlusBtnLight } from "../../assets/images/Images";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import toDownLight from "../../assets/images/toDownLight.svg";
import toDown from "../../assets/images/toDown.svg";

export const AddAuthor = () => {
	// const dispatch = useDispatch();
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { theme } = useSelector((state) => state);

	let first_name = useRef("");
	let last_name = useRef("");
	let date_of_birth = useRef("");
	let date_of_death = useRef("");
	let country = useRef("");
	let genre_id = useRef("");
	let bio = useRef("");
	let image = useRef("");
	const { token } = useSelector((state) => state);
	const onSubmit = (evt) => {
		const newFormData = new FormData();
		evt.preventDefault();

		newFormData.append("first_name", first_name.current.value);
		newFormData.append("last_name", last_name.current.value);
		newFormData.append("date_of_birth", date_of_birth.current.value - 0);
		newFormData.append("date_of_death", date_of_death.current.value);
		newFormData.append("country", country.current.value);
		newFormData.append("genre_id", genre_id.current.value);
		newFormData.append("bio", bio.current.value);
		newFormData.append("image", image.current.files[0]);
		console.log(newFormData);
		axios
			.post("http://localhost:5000/author", newFormData, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((data) => {
				console.log(data);
				first_name.current.value = "";
				last_name.current.value = "";
				date_of_birth.current.value = "";
				date_of_death.current.value = "";
				country.current.value = "";
				genre_id.current.value = "";
				bio.current.value = "";
			})
			.catch((err) => console.log(err));
	};
	const bgImg = theme.theme === "false" ? toDownLight : toDown;

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
							theme.theme === "false" ? "rgba(243, 243, 243, 0.93)" : "#1B1B1B",

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

						{theme.theme === "false" ? <PlusBtnLight /> : <PlusBtn />}
						<DescStyled theme={theme.theme}>{t("addauthor.image")}</DescStyled>
					</LabelStyled>
				</Grid>
				<Grid
					sx={{
						backgroundColor: theme.theme === "false" ? "#fff" : "#191919",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
					item
					xs={6}
				>
					<Box width='400px'>
						<TitleStyled theme={theme.theme}>
							{t("addauthor.title")}
						</TitleStyled>
						<Stack spacing={3}>
							<InputStyled
								theme={theme.theme}
								ref={first_name}
								minLength={3}
								placeholder={t("addauthor.first_name")}
							/>
							<InputStyled
								theme={theme.theme}
								ref={last_name}
								minLength={3}
								placeholder={t("addauthor.last_name")}
							/>
							<InputStyled
								theme={theme.theme}
								ref={date_of_birth}
								minLength={3}
								type='text'
								placeholder={t("addauthor.birth")}
							></InputStyled>
							<InputStyled
								theme={theme.theme}
								ref={date_of_death}
								minLength={3}
								type='text'
								placeholder={t("addauthor.death")}
							/>
							<InputStyled
								theme={theme.theme}
								ref={country}
								minLength={2}
								type='text'
								placeholder={t("addauthor.country")}
							/>
							<SelectStyled
								imgUrl={bgImg}
								theme={theme.theme}
								ref={genre_id}
								required
							>
								<OptionStyled selected hidden>
									{t("addauthor.genre")}
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
							<TextAreaStyled
								theme={theme.theme}
								ref={bio}
								rows='5'
								required
								type='text'
								placeholder={t("addauthor.bio")}
							/>
						</Stack>

						<ButtonStyled theme={theme.theme} type='submit'>
							{t("addauthor.create")}
						</ButtonStyled>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};
