import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitleStyled = styled.h2`
	font-weight: 900;
	font-size: 36px;
	line-height: 51px;
	margin-top: 0;
	margin-bottom: 10px;
	color: ${({ theme }) => (theme !== "false" ? "#fff" : "#000")};
`;
export const DescStyled = styled.p`
	font-weight: 400;
	font-size: 13px;
	line-height: 15px;
	margin-top: 0;
	margin-bottom: 21px;
	color: ${({ theme }) => (theme !== "false" ? "#fff" : "#000")};
`;
export const LinkStyled = styled.a`
	font-weight: 400;
	font-size: 13px;
	line-height: 15px;
	margin-top: 0;
	margin-bottom: 21px;
	color: #549ff9;
	text-decoration: none;
`;
export const ButtonStyled = styled.button`
	width: 100%;
	font-weight: 500;
	font-size: 18px;
	line-height: 36px;
	margin-top: 34px;
	border: 0;
	padding: 5px 20px;
	border-radius: 99px;
	color: ${({ theme }) => (theme !== "false" ? "#000" : "#fff")};
	background-color: ${({ theme }) => (theme !== "false" ? "#fff" : "#152540")};
`;
export const InputStyled = styled.input`
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	padding: 20px;
	color: #aaaaaa;
	border: 1px solid #b4b4bb;
	border-radius: 10px;
`;
