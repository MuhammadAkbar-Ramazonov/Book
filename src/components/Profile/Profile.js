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
} from "./profil.styled";
import DarkCamera from "../../assets/images/darkcamera.svg";
import LightCamera from "../../assets/images/lightcamera.svg";
export const Profile = () => {
	const { token } = useSelector((state) => state);
	const { theme } = useSelector((state) => state);
	const [me, setMe] = useState({});

	const { t } = useTranslation();

	const schema = Yup.object({
		first_name: Yup.string().required(t("profil.enter_first_name")),
		last_name: Yup.string().required(t("profil.enter_last_name")),
		phone: Yup.string().required(t("profil.enter_phone")),
	});

	const {
		register,
		watch,
		handleSubmit,
		formState,
		formState: { errors, isValid },
		reset
	} = useForm({
		defaultValues: {
			first_name: "",
			last_name: "",
			phone: "",
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
				// reset()
			})
			.catch((err) => console.log(err));
	}, []);
	let image = useRef();
	const onSubmit = (data) => {
		console.log(data);
		const newFormData = new FormData();
		newFormData.append("first_name", data.first_name);
		newFormData.append("last_name", data.last_name);
		newFormData.append("phone", data.phone - 0);
		newFormData.append("image", image.current.files[0]);
		axios
			.put("http://localhost:5000/user/account", newFormData, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((data) => {
				console.log(data);
			})
			.catch((err) => console.log(err));
	};

	const cameraImg = theme.theme   ? DarkCamera : LightCamera;
	return (
		<Box sx={{ marginTop: "83px" }}>
			<Container maxWidth='xl'>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						gap: "106px",
						marginBottom: "89px",
					}}
					component='form'
					onSubmit={handleSubmit(onSubmit)}
				>
					<Box>
						<LabelImgStyled theme={theme.theme} imgUrl={cameraImg}>
							<InputStyled
								ref={image}
								type='file'
								style={{
									visibility: "hidden",
									position: "absolute",
									width: "0",
									height: "0",
								}}
							/>
							{me.image !== null ? (
								<ImgStyled
									src={`http://localhost:5000/${me.image}`}
									width='175'
									height='175'
								/>
							) : (
								<ImgStyled
									src={`https://via.placeholder.com/75`}
									width='175'
									height='175'
								/>
							)}
						</LabelImgStyled>
					</Box>
					<Box sx={{ flexGrow: 1 }}>
						<TitleStyled theme={theme.theme}>{t("profil.title")}</TitleStyled>
						<Stack
							sx={{
								marginBottom: "44px",
								paddingBottom: "26px",
								borderBottom:
									theme.theme  
										? "1px solid #161D23"
										: "1px solid #ECF0F3",
							}}
							spacing={3}
						>
							<LabelStyled>
								<LabelDescStyled theme={theme.theme}>
									{t("profil.first_name")}
								</LabelDescStyled>

								<InputStyled
									placeholder={me.first_name}
									theme={theme.theme}
									label={t("register.first_name")}
									{...register("first_name")}
								/>
								<ErrorDescStyled theme={theme.theme}>
									{errors.first_name?.message}
								</ErrorDescStyled>
							</LabelStyled>
							<LabelStyled>
								<LabelDescStyled theme={theme.theme}>
									{t("profil.last_name")}
								</LabelDescStyled>
								<InputStyled
									placeholder={me.last_name}
									theme={theme.theme}
									label={t("register.last_name")}
									{...register("last_name")}
								/>
								<ErrorDescStyled theme={theme.theme}>
									{errors.last_name?.message}
								</ErrorDescStyled>
							</LabelStyled>
							<LabelStyled>
								<LabelDescStyled theme={theme.theme}>
									{t("profil.phone")}
								</LabelDescStyled>
								<InputStyled
									placeholder={me.phone}
									theme={theme.theme}
									type='tel'
									label={t("register.phone")}
									{...register("phone")}
								/>
								<ErrorDescStyled theme={theme.theme}>
									{errors.phone?.message}
								</ErrorDescStyled>
							</LabelStyled>
						</Stack>
						<ButtonStyled theme={theme.theme} disabled={!isValid} type='submit'>
							{t("profil.save_changes")}
						</ButtonStyled>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
