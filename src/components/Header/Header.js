import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useContext, useEffect, useState } from "react";
import {
	HeaderStyled,
	ItemStyled,
	ListStyled,
	NavStyled,
	WrapperStyled,
} from "./header.styled";
import { Logo, ToDown, ToDownLight } from "../../assets/images/Images";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../redux/token/tokenAction";
import { AuthorContext } from "../../Context/AuthorContext";
import { BooksContext } from "../../Context/BooksContext";
import axios from "axios";
import { Button } from "@mui/material";

export const Header = () => {
	const { theme, token } = useSelector((state) => state);
	const [anchorElUser, setAnchorElUser] = useState(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	const [me, setMe] = useState();
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
	const { t } = useTranslation();

	const { setAuthor } = useContext(AuthorContext);
	const { setBooks } = useContext(BooksContext);
	return (
		<HeaderStyled>
			<Container maxWidth='xl'>
				<WrapperStyled>
					<Button
						onClick={() => {
							navigate("/home/1");
						}}
					>
						<Logo />
					</Button>
					<WrapperStyled>
						<NavStyled>
							<ListStyled>
								<ItemStyled>
									<NavLink
										onClick={() => setAuthor([])}
										className={({ isActive }) =>
											isActive
												? "hero-nav-link hero-nav-link-active"
												: "hero-nav-link"
										}
										to='/home/1'
									>
										{t("header.bosh_sahifa")}
									</NavLink>
								</ItemStyled>
								<ItemStyled>
									<NavLink
										onClick={() => setBooks([])}
										className={({ isActive }) =>
											isActive
												? "hero-nav-link hero-nav-link-active"
												: "hero-nav-link"
										}
										to='books/1'
									>
										{t("header.kitoblar")}
									</NavLink>
								</ItemStyled>
							</ListStyled>
						</NavStyled>
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title='Open settings'>
								<IconButton
									onClick={handleOpenUserMenu}
									sx={{
										p: 0,
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										gap: "12px",
									}}
								>
									<Avatar
										src={
											`http://localhost:5000/${me?.image}` ||
											"/broken-image.jpg"
										}
									/>
									{theme.theme === "false" ? <ToDownLight /> : <ToDown />}
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: "45px" }}
								bg='palette.background.default'
								id='menu-appbar'
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								<MenuItem onClick={handleCloseUserMenu}>
									<Link
										to='/me/profile'
										style={{
											fontWeight: "500",
											fontSize: "16px",
											textDecorationLine: "none",
											lineHeight: "24px",
											padding: "8px 22px",
											color: theme.theme === "false" ? "#000" : "#C9AC8C",
										}}
										textAlign='center'
									>
										Profile
									</Link>
								</MenuItem>
								<MenuItem onClick={handleCloseUserMenu}>
									<Link
										to='/addauthor'
										style={{
											fontWeight: "500",
											fontSize: "16px",
											textDecorationLine: "none",
											padding: "8px 22px",
											lineHeight: "24px",
											color: theme.theme === "false" ? "#000" : "#C9AC8C",
										}}
										textAlign='center'
									>
										Add author
									</Link>
								</MenuItem>
								<MenuItem onClick={handleCloseUserMenu}>
									<Link
										to='/addbook'
										style={{
											fontWeight: "500",
											fontSize: "16px",
											textDecorationLine: "none",
											padding: "8px 22px",
											lineHeight: "24px",
											color: theme.theme === "false" ? "#000" : "#C9AC8C",
										}}
										textAlign='center'
									>
										Add book
									</Link>
								</MenuItem>
								<MenuItem onClick={handleCloseUserMenu}>
									<Box
										onClick={() => {
											dispatch(removeToken());
											localStorage.removeItem("token");
											navigate("/register");
										}}
										style={{
											padding: "8px 22px",
											fontWeight: "500",
											fontSize: "16px",
											textDecorationLine: "none",

											lineHeight: "24px",
											color: theme.theme === "false" ? "#000" : "#C9AC8C",
										}}
										textAlign='center'
									>
										Log out
									</Box>
								</MenuItem>
							</Menu>
						</Box>
					</WrapperStyled>
				</WrapperStyled>
			</Container>
		</HeaderStyled>
	);
};
