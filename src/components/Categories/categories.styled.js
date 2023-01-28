import { Link } from "react-router-dom";
import styled from "styled-components";
import BottomCardImg from "../../assets/images/BottomCardImg.svg";
import BottomCardImgLight from "../../assets/images/BottomCardImgLight.svg";
import TopCardImg from "../../assets/images/TopCardImg.svg";
export const TitleStyled = styled.h2`
	font-weight: 400;
	font-size: 32px;
	line-height: 48px;
	margin-top: 0;
	margin-bottom: 22px;
	text-align: center;
	color: ${({ theme }) => (theme === "false" ? "#d1b89d" : "#c9ac8c")};
`;

export const ListStyled = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 34px;
	list-style: none;
	padding-left: 0;
	margin-bottom: 40px;
`;
export const ItemStyled = styled.li``;

export const ImgBgStyled = styled.img`
	position: absolute;
	top: calc(50% - 110px);
	right: calc(50% + -1320px);
	z-index: -1;
`;

export const AutherListstyled = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	list-style: none;
	gap: 25px;
	margin-bottom: 138px;
	padding-left: 0;
`;
export const AutherItemStyled = styled.li`
	background-color: ${({ theme }) =>
		theme === "false" ? "#F5F5F5" : "#1e1e1e"};

	border-radius: 22px;
	overflow: hidden;
`;
export const AutherLinkStyled = styled(Link)`
	text-decoration: none;
`;
export const ImgStyled = styled.img`
	width: 300px;
	height: 250px;
	border-radius: 22px 22px 0px 0px;
`;
export const WrapperStyled = styled.div`
	position: relative;
	padding: 12px 23px 63px 16px;
	overflow: hidden;
	::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		display: block;
		width: 68px;
		height: 41px;
		background-image: url(${({ bottomImg }) => bottomImg});
	}

	::after {
		content: "";
		position: absolute;
		top: -36px;
		right: 0;
		display: block;
		width: 80px;
		height: 141px;
		background-image: url(${({ topImg }) => topImg});
	}
`;
export const AuthorTitleStyled = styled.h3`
	font-weight: 500;
	font-size: 24px;
	line-height: 36px;
	color: ${({ theme }) => (theme === "false" ? "#000000" : "#c9ac8c")};
`;
export const AutherDescStyled = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: ${({ theme }) => (theme === "false" ? "#626262" : "#A5A5A5")};
`;
