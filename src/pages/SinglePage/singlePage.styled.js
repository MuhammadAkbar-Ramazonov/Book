import { Link } from "react-router-dom";
import styled from "styled-components";
export const ImgStyled = styled.img`
	width: 500px;
	height: 580px;
	margin-right: 64px;
	border-radius: 40px;
`;

export const TitleStyled = styled.h2`
	font-weight: 400;
	font-size: 48px;
	line-height: 72px;
	margin-top: 0;
	margin-bottom: 8px;
	color: ${({ theme }) => (theme !== "false" ? "#C9AC8C" : "#D1B89D")};
`;
export const DescStyled = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	margin-top: 0;
	margin-bottom: 44px;
	color: ${({ theme }) => (theme !== "false" ? " #A5A5A5" : "#626262")};
`;
export const YearStyled = styled.p`
	font-weight: 400;
	font-size: 39px;
	line-height: 144.4%;
	margin-top: 0;
	margin-bottom: 0;
	color: ${({ theme }) => (theme !== "false" ? "#C9AC8C" : "#D1B89D")};
`;
export const BottomStyled = styled.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	margin-top: 0;
	margin-bottom: 0;
	color: ${({ theme }) =>
		theme !== "false"
			? " rgba(255, 255, 255, 0.6);"
			: "rgba(13, 13, 13, 0.6)"}; ;
`;

export const AsarsStyled = styled.p`
	font-weight: 400;
	font-size: 31px;
	line-height: 46px;
	margin-top: 0;
	margin-bottom: 0;
	color: ${({ theme }) => (theme !== "false" ? "#C9AC8C" : "#D1B89D")};
`;
export const AutherLinkStyled = styled(Link)`
	text-decoration: none;
`;
export const AutherItemStyled = styled.li``;
export const ImgBookStyled = styled.img`
	width: 250px;
	height: 300px;
	border-radius: 22px;
	margin-bottom: 12px;
`;
export const ImgBgStyled = styled.img`
	position: absolute;
	top: calc(50% - 110px);
	right: calc(50% + -1320px);
	z-index: -1;
`;
export const AuthorTitleStyled = styled.h3`
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	margin-top: 0;
	margin-bottom: 6px;
	color: ${({ theme }) => (theme !== "false" ? " #c9ac8c" : "#000000")};
`;
export const AutherDescStyled = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: ${({ theme }) => (theme !== "false" ? " #A5A5A5" : "#626262")};
`;
