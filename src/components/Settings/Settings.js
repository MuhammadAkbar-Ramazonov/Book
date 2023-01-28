import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Container, Stack } from "@mui/system";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import toDown from "../../assets/images/toDown.svg";
import toDownLight from "../../assets/images/toDownLight.svg";
import { getLang } from "../../redux/lang/langAction";
import { getTheme } from "../../redux/theme/themeAction";
import {
	ButtonStyled,
	ErrorDescStyled,
	ImgStyled,
	InputStyled,
	LabelDescStyled,
	LabelStyled,
	OptionStyled,
	SelectStyled,
	SwitchHiddenStyled,
	SwitchLabelStyled,
	SwitchShowStyled,
	TitleStyled,
} from "./settings.setyled";
export const Settings = () => {
	const { token } = useSelector((state) => state);
	const { theme } = useSelector((state) => state);
	const [me, setMe] = useState({});

	const { t } = useTranslation();

	const schema = Yup.object({
		theme: Yup.string().required(t("settings.enter_first_name")),
		language: Yup.string().required(t("settings.enter_first_name")),
	});

	const {
		register,
		watch,
		handleSubmit,
		formState,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			theme: "",
			language: "",
		},
		mode: "all",
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		axios
			.get("http://localhost:5000/user/me", {
				headers: {
					Authorization: token.token,
				},
			})
			.then((data) => {
				setMe(data.data);
			})
			.catch((err) => console.log(err));
	}, []);
	const onSubmit = (data) => {
		localStorage.setItem("theme", data.theme);
		localStorage.setItem("lang", data.language);

		getLang(data.language);
		getTheme(data.theme);
	};
	return (
		<Box sx={{ marginTop: "83px" }}>
			<Container maxWidth='xl'>
				<Box
					sx={{
						width: "709px",
						marginX: "auto",
						marginTop: "154px",
					}}
					component='form'
					onSubmit={handleSubmit(onSubmit)}
				>
					<TitleStyled theme={theme.theme}>{t("settings.tab")}</TitleStyled>
					<Box
						sx={{
							paddingBottom: "40px",
							borderBottom: "2px solid #ECF0F3",
							marginBottom: "32px",
						}}
					>
						<LabelStyled>
							<LabelDescStyled theme={theme.theme}>
								{t("settings.language")}
							</LabelDescStyled>
							<SelectStyled
								imgUrl={toDownLight}
								theme={theme.theme}
								required
								{...register("language")}
							>
								<OptionStyled selected value='en'>
									English
								</OptionStyled>
								<OptionStyled value='ru'>Russian</OptionStyled>
								<OptionStyled value='uz'>Uzbek</OptionStyled>
							</SelectStyled>
							<ErrorDescStyled theme={theme.theme}>
								{errors.language?.message}
							</ErrorDescStyled>
						</LabelStyled>
						<SwitchLabelStyled className='switch'>
							<LabelDescStyled theme={theme.theme}>
								{t("settings.theme")}
							</LabelDescStyled>
							<SwitchHiddenStyled type='checkbox' {...register("theme")} />
							<SwitchShowStyled />
						</SwitchLabelStyled>
					</Box>

					<ButtonStyled theme={theme.theme} disabled={!isValid} type='submit'>
						{t("settings.save_changes")}
					</ButtonStyled>
				</Box>
			</Container>
		</Box>
	);
};
