import { InputAdornment, Stack, TextField, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	ButtonStyled,
	DescStyled,
	LinkStyled,
	TitleStyled,
} from "./register.steled";
import { Box } from "@mui/system";
import { RegisterBg } from "../../assets/images/Images";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../redux/token/tokenAction";

export const Register = () => {
	const [inputType, setInputType] = useState(false);
	const { theme } = useSelector((state) => state);

	const dispatch = useDispatch();

	const schema = Yup.object({
		first_name: Yup.string().required("Required"),
		last_name: Yup.string().required("Required"),
		phone: Yup.string().required("Required"),
		email: Yup.string().required("Required").email("Invalid from format"),
		password: Yup.string()
			.required("Required")
			.min(3, "Password don't be small from 3")
			.max(8, "Password don't be large from 8"),
	});
	const { t } = useTranslation();

	const {
		register,
		watch,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm({
		defaultValues: {
			first_name: "",
			last_name: "",
			phone: "",
			email: "",
			password: "",
		},
		mode: "all",
		resolver: yupResolver(schema),
	});
	const navigate = useNavigate();
	const onSubmit = (data) => {
		axios
			.post("http://localhost:5000/user/register", {
				first_name: data.first_name,
				last_name: data.last_name,
				phone: data.phone,
				email: data.email,
				password: data.password,
			})
			.then((data) => {
				if (data.status === 201) {
					dispatch(getToken(data.data.token));
					localStorage.setItem("token", data.data.token);
					// reset()
					navigate("/home/1");
				}
			})
			.catch((err) => console.log(err));
	};
	return (
		<>
			<Grid container>
				<Grid
					item
					xs={6}
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "#D1B89D",
						paddingTop: "242px",
						paddingBottom: "220px",
					}}
				>
					<RegisterBg />
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
					component='form'
					onSubmit={handleSubmit(onSubmit)}
				>
					<Box width='330px'>
						<TitleStyled theme={theme.theme}>{t("register.title")}</TitleStyled>
						<DescStyled theme={theme.theme}>
							{t("register.accaunt")}
							<LinkStyled href='login'>{t("register.accaunt")}</LinkStyled>
						</DescStyled>
						<Stack spacing={3}>
							<TextField
								label={t("register.first_name")}
								helperText={errors.first_name?.message}
								{...register("first_name")}
							/>
							<TextField
								label={t("register.last_name")}
								helperText={errors.last_name?.message}
								{...register("last_name")}
							/>
							<TextField
								type='tel'
								label={t("register.phone")}
								helperText={errors.phone?.message}
								{...register("phone")}
							></TextField>
							<TextField
								type='email'
								label={t("register.email")}
								helperText={errors.email?.message}
								{...register("email")}
							/>
							<TextField
								helperText={errors.password?.message}
								{...register("password")}
								type={inputType ? "text" : "password"}
								label={t("register.password")}
								InputProps={{
									endAdornment: (
										<InputAdornment
											onClick={() => setInputType(!inputType)}
											position='end'
										>
											<VisibilityIcon />
										</InputAdornment>
									),
								}}
							/>
						</Stack>
						<ButtonStyled theme={theme.theme} disabled={!isValid} type='submit'>
							{t("register.next")}
						</ButtonStyled>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};
