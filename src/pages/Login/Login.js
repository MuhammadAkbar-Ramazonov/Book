import { InputAdornment, Stack, TextField, Grid } from "@mui/material";
import { useRef, useState } from "react";
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
} from "./login.steled";
import { Box } from "@mui/system";
import { LoginBg } from "../../assets/images/Images";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../redux/token/tokenAction";

export const Login = () => {
	const { theme } = useSelector((state) => state);
	const dispatch = useDispatch();

	const emailRef = useRef();
	const passwordRef = useRef();
	const [inputType, setInputType] = useState(false);

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
		formState,
		formState: { errors, isValid },
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

	const onSubmit = (evt) => {
		evt.preventDefault();
		axios
			.post("http://localhost:5000/user/login", {
				email: emailRef.current.value,
				password: passwordRef.current.value,
			})
			.then((data) => {
				console.log(data);
				dispatch(getToken(data.data.token));

				localStorage.setItem("token", data.data.token);
				navigate("/home/1");
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
						paddingTop: "232px",
						paddingBottom: "230px",
					}}
				>
					<LoginBg />
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
					onSubmit={(evt) => onSubmit(evt)}
				>
					<Box width='330px'>
						<TitleStyled theme={theme.theme}>{t("login.title")}</TitleStyled>
						<DescStyled theme={theme.theme}>
							{t("login.accaunt")}
							<LinkStyled href='register'>{t("login.accaunt")}</LinkStyled>
						</DescStyled>
						<Stack spacing={3}>
							<TextField
								inputRef={emailRef}
								type='email'
								label={t("login.email")}
								helperText={errors.email?.message}
								{...register("email")}
							/>
							<TextField
								inputRef={passwordRef}
								helperText={errors.password?.message}
								{...register("password")}
								type={inputType ? "text" : "password"}
								label={t("login.password")}
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
						<ButtonStyled theme={theme.theme} type='submit'>
							{t("login.next")}
						</ButtonStyled>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};
