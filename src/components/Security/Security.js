import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Container, Stack } from "@mui/system";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import {
	ButtonStyled,
	ErrorDescStyled,
	ImgStyled,
	InputStyled,
	LabelDescStyled,
	LabelImgStyled,
	LabelStyled,
	TitleStyled,
} from "./secure.setyled";
import DarkCamera from "../../assets/images/darkcamera.svg";
import LightCamera from "../../assets/images/lightcamera.svg";
export const Security = () => {
	const { token } = useSelector((state) => state);
	const { theme } = useSelector((state) => state);
	const [me, setMe] = useState({});

	const { t } = useTranslation();

	const schema = Yup.object({
		email: Yup.string().required(t("security.enter_email")),
		currentPassword: Yup.string().required(t("security.enter_password")),
		newPassword: Yup.string().required(t("security.enter_new_password")),
	});

	const {
		register,
		watch,
		handleSubmit,
		formState,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			email: "",
			currentPassword: "",
			newPassword: "",
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
		axios
			.put(
				"http://localhost:5000/user/security",
				{
					email: data.email,
					currentPassword: data.currentPassword,
					newPassword: data.newPassword,
				},
				{
					headers: {
						Authorization: token.token,
					},
				},
			)
			.then((data) => {
				console.log(data);
			})
			.catch((err) => console.log(err));
	};

	return (
		<Box sx={{ marginTop: "83px" }}>
			<Container maxWidth='xl'>
				<Box
					sx={{
						marginBottom: "89px",
						width: "712px",
						marginX: "auto",
					}}
					component='form'
					onSubmit={handleSubmit(onSubmit)}
				>
					<TitleStyled theme={theme.theme}>{t("security.title")}</TitleStyled>
					<Stack
						sx={{
							marginBottom: "89px",
						}}
						spacing={3}
					>
						<LabelStyled>
							<LabelDescStyled theme={theme.theme}>
								{t("security.email")}
							</LabelDescStyled>

							<InputStyled
								placeholder={me.email}
								theme={theme.theme}
								label={t("register.email")}
								{...register("email")}
							/>
							<ErrorDescStyled theme={theme.theme}>
								{errors.email?.message}
							</ErrorDescStyled>
						</LabelStyled>
						<LabelStyled>
							<LabelDescStyled theme={theme.theme}>
								{t("security.current_password")}
							</LabelDescStyled>
							<InputStyled
								placeholder='*********'
								theme={theme.theme}
								type='password'
								label={t("register.currentPassword")}
								{...register("currentPassword")}
							/>
							<ErrorDescStyled theme={theme.theme}>
								{errors.currentPassword?.message}
							</ErrorDescStyled>
						</LabelStyled>
						<LabelStyled>
							<LabelDescStyled theme={theme.theme}>
								{t("security.new_password")}
							</LabelDescStyled>
							<InputStyled
								placeholder='*********'
								theme={theme.theme}
								type='password'
								label={t("register.newPassword")}
								{...register("newPassword")}
							/>
							<ErrorDescStyled theme={theme.theme}>
								{errors.newPassword?.message}
							</ErrorDescStyled>
						</LabelStyled>
					</Stack>
					<ButtonStyled theme={theme.theme} disabled={!isValid} type='submit'>
						{t("security.save_changes")}
					</ButtonStyled>
				</Box>
			</Container>
		</Box>
	);
};
