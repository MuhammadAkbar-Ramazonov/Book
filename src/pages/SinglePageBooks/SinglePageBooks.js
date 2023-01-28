import { List} from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SingleBooksToDown } from "../../assets/images/Images";
import {
	AsarsStyled,
	AutherDescStyled,
	AutherItemStyled,
	AutherLinkStyled,
	AuthorTitleStyled,
	BottomDescStyled,
	CategoryStyled,
	CategoryTopStyled,
	DescStyled,
	ImgBookStyled,
	ImgStyled,
	TitleStyled,
} from "./singlePageBooks.styled";
import Ornament from "../../assets/images/ornament.png";
import { ImgBgStyled } from "../SinglePage/singlePage.styled";

export const SinglePageBooks = () => {
	const { theme } = useSelector((state) => state);

	const { token } = useSelector((state) => state);
	const [singlePage, setSinglePage] = useState({});
	const [author, setAuthor] = useState({});
	const [authorBooks, setAuthorBooks] = useState([]);
	// const [author, setAuthor] = useState([]);
	const params = useParams();
	const id = Object.values(params)[0];

	useEffect(() => {
		axios
			.get(`http://localhost:5000/book/bookId/${id}`, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((data) => {
				setSinglePage(data.data);
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/author/books/${singlePage.author_id}`, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((data) => {
				setAuthorBooks(data.data);
			})
			.catch((err) => console.log(err));

		axios
			.get(`http://localhost:5000/author/authorId/${singlePage.author_id}`, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((data) => {
				console.log(data);
				setAuthor(data.data);
			})
			.catch((err) => console.log(err));
	}, [singlePage]);
	return (
		<Container maxWidth='xl'>
			<Box
				sx={{ display: "flex", alignItems: "center", marginBottom: "100px" }}
			>
				<ImgStyled src={`http://localhost:5000/${singlePage.image}`} />
				<Box sx={{ flexGrow: 1 }}>
					<TitleStyled theme={theme.theme}>{singlePage.title}</TitleStyled>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							marginBottom: "14px",
						}}
					>
						<CategoryTopStyled theme={theme.theme}>
							Sahifalar soni:
						</CategoryTopStyled>
						<CategoryStyled theme={theme.theme}>
							{singlePage.page} page
						</CategoryStyled>
					</Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							marginBottom: "14px",
						}}
					>
						<CategoryTopStyled theme={theme.theme}>
							Chop etilgan:
						</CategoryTopStyled>
						<CategoryStyled theme={theme.theme}>
							{singlePage.year} years
						</CategoryStyled>
					</Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							marginBottom: "40px",
						}}
					>
						<CategoryTopStyled theme={theme.theme}>
							Kitob narxi:
						</CategoryTopStyled>
						<CategoryStyled theme={theme.theme}>
							${singlePage.price}
						</CategoryStyled>
					</Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: "19px",
							marginBottom: "12px",
						}}
					>
						<BottomDescStyled>To’liq ma’lumot</BottomDescStyled>
						<SingleBooksToDown />
						<Box
							sx={{
								flexGrow: 1,
								height: "1px",
								backgroundColor: "rgba(201, 172, 140, 0.6)",
							}}
							component='span'
						></Box>
					</Box>
					<DescStyled theme={theme.theme}>{singlePage.description}</DescStyled>
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
				{authorBooks.map((item, index) => {
					return (
						<AutherItemStyled key={index} theme={theme.theme}>
							<AutherLinkStyled id={item.id} to={`/singlebook/${item.id}`}>
								<ImgBookStyled src={`http://localhost:5000/${item.image}`} />
								<AuthorTitleStyled theme={theme.theme}>
									{item.title}
								</AuthorTitleStyled>

								<AutherDescStyled theme={theme.theme}>
									{author.first_name} {author.last_name}
								</AutherDescStyled>
							</AutherLinkStyled>
						</AutherItemStyled>
					);
				})}
			</List>
		</Container>
	);
};
