import { List, ListItem } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ItemStyled } from "../../components/Categories/categories.styled";
import {
	AsarsStyled,
	AutherDescStyled,
	AutherItemStyled,
	AutherLinkStyled,
	AuthorTitleStyled,
	BottomStyled,
	DescStyled,
	ImgBgStyled,
	ImgBookStyled,
	ImgStyled,
	TitleStyled,
	YearStyled,
} from "./singlePage.styled";
import Ornament from "../../assets/images/ornament.png";

export const SinglePage = () => {
	const { theme } = useSelector((state) => state);

	const { token } = useSelector((state) => state);
	const [singlePage, setSinglePage] = useState({});
	const [authorBooks, setAuthorBooks] = useState([]);
	// const [author, setAuthor] = useState([]);
	const params = useParams();
	const id = Object.values(params)[0];
	useEffect(() => {
		axios
			.get(`http://localhost:5000/author/authorId/${id}`, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((data) => {
				setSinglePage(data.data);
			})
			.catch((err) => console.log(err));
		axios
			.get(`http://localhost:5000/author/books/${id}`, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((data) => {
				setAuthorBooks(data.data);
			})
			.catch((err) => console.log(err));
	}, []);

	console.log("pl,cdpsd,");
	return (
		<Container maxWidth='xl'>
			<Box
				sx={{ display: "flex", alignItems: "center", marginBottom: "100px" }}
			>
				<ImgStyled src={`http://localhost:5000/${singlePage.image}`} />
				<Box sx={{ width: "600px" }}>
					<TitleStyled theme={theme.theme}>
						{singlePage.first_name} {singlePage.last_name}
					</TitleStyled>
					<DescStyled theme={theme.theme}>{singlePage.bio}</DescStyled>
					<Box sx={{ display: "flex", alignItems: "center", gap: "75px" }}>
						<BottomStyled theme={theme.theme}>Tavallud yili</BottomStyled>
						<BottomStyled theme={theme.theme}>Vafot etgan yili</BottomStyled>
					</Box>
					<Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
						<YearStyled>{singlePage.date_of_birth}</YearStyled>
						<YearStyled>-</YearStyled>
						<YearStyled>{singlePage.date_of_death}</YearStyled>
					</Box>
					<Box sx={{ display: "flex", alignItems: "center", gap: "94px" }}>
						<BottomStyled theme={theme.theme}>
							{singlePage.country}
						</BottomStyled>
						<BottomStyled theme={theme.theme}>
							{singlePage.country}
						</BottomStyled>
					</Box>
				</Box>
			</Box>
			<ImgBgStyled src={Ornament} />

			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<AsarsStyled>Asarlari</AsarsStyled>
				<Link
					style={{
						fontWeight: "400",
						fontSize: "16px",
						lineHeight: "24px",
						textDecorationLine: "none",
						color: theme.theme !== "false" ? "#fff" : "#0D0D0D",
					}}
					to='/books/1'
				>
					Barchasini ko’rish
				</Link>
			</Box>

			<List
				style={{
					display: "flex",
					alignItems: "center",
					gap: "36px",
					overflowX: "scroll",
				}}
			>
				{authorBooks.map((item) => {
					return (
						<AutherItemStyled theme={theme.theme}>
							<AutherLinkStyled id={item.id} to={`/singlebook/${item.id}`}>
								<ImgBookStyled src={`http://localhost:5000/${item.image}`} />
								<AuthorTitleStyled theme={theme.theme}>
									{item.title}
								</AuthorTitleStyled>

								<AutherDescStyled theme={theme.theme}>
									{singlePage.first_name} {singlePage.last_name}
								</AutherDescStyled>
							</AutherLinkStyled>
						</AutherItemStyled>
					);
				})}
			</List>
		</Container>
	);
};
