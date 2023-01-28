import styled from "styled-components";
import AmurTemur from "../../assets/images/Amir-Tumur.png";
export const ListStyled = styled.ul`
	width: 1536px;

	margin: 0 auto;
	margin-bottom: 185px;
	border-radius: 20px;
`;
export const ItemStyled = styled.li`
	height: 406px;
	background-color: #fff;
	background-image: url(${AmurTemur});
	background-size: 1536px;
`;

export const TitleWrapperStyled = styled.h2`
	width: 337px;
`;

export const TitleStyled = styled.h2`
	font-weight: 400;
	font-size: 61px;
	line-height: 67px;
	margin: 0;
	padding: 45px 0 0 86px;
	color: #c9ac8c;
`;
