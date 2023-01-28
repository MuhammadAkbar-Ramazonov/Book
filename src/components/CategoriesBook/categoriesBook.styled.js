import { Link } from "react-router-dom";
import styled from "styled-components";

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

export const AutherLinkStyled = styled(Link)`
	text-decoration: none;
`;
export const ImgBgStyled = styled.img`
	position: absolute;
	top: calc(50% - 110px);
	right: calc(50% + -1320px);
	z-index: -1;
`;
export const AutherItemStyled = styled.li``;

export const ImgStyled = styled.img`
	width: 250px;
	height: 300px;
	border-radius: 22px;
	margin-bottom: 12px;
`;

export const AuthorTitleStyled = styled.h3`
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	margin-top: 0;
	margin-bottom: 6px;
	color: ${({ theme }) => (theme === "false" ? "#000000" : "#c9ac8c")};
`;

export const AutherDescStyled = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: ${({ theme }) => (theme === "false" ? "#626262" : "#A5A5A5")};
`;
