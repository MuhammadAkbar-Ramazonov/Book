import { Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink, Route, Routes } from "react-router-dom";
import { Profile } from "../../components/Profile";
import { Security } from "../../components/Security";
import { Settings } from "../../components/Settings";
import { SpanStyled } from "./me.styled";

export const Me = () => {
	const { t } = useTranslation();
	const { theme } = useSelector((state) => state);
	return (
		<>
			<Grid
				sx={{ listStyle: "none", paddingLeft: "0", margin: 0 }}
				container
				component='ul'
			>
				<Grid item xs={4} component='li'>
					<NavLink
						i
						className={({ isActive }) =>
							isActive ? "profil-nav-link-active" : "profil-nav-link"
						}
						to='profile'
					>
						<SpanStyled theme={theme.theme}>1</SpanStyled>
						{t("profil.tab")}
					</NavLink>
				</Grid>
				<Grid item xs={4} component='li'>
					<NavLink
						className={({ isActive }) =>
							isActive ? "profil-nav-link-active" : "profil-nav-link"
						}
						to='security'
					>
						<SpanStyled theme={theme.theme}>2</SpanStyled>
						{t("security.tab")}
					</NavLink>
				</Grid>
				<Grid item xs={4} component='li'>
					<NavLink
						className={({ isActive }) =>
							isActive ? "profil-nav-link-active" : "profil-nav-link"
						}
						to='settings'
					>
						<SpanStyled theme={theme.theme}>3</SpanStyled>
						{t("settings.tab")}
					</NavLink>
				</Grid>
			</Grid>

			<Routes>
				<Route path='profile' element={<Profile />} />
				<Route path='security' element={<Security />} />
				<Route path='settings' element={<Settings />} />
			</Routes>
		</>
	);
};
