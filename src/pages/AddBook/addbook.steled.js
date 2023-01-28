import { Link } from "react-router-dom";
import styled from "styled-components";
import toDown from "../../assets/images/toDown.svg";
export const TitleStyled = styled.h2`
	font-weight: 900;
	font-size: 36px;
	line-height: 51px;
	color: #ffffff;
	margin-top: 0;
	margin-bottom: 10px;
	color: ${({ theme }) => (theme !== "false" ? "#fff" : "#000")};
`;
export const DescStyled = styled.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	display: flex;
	align-items: center;
	text-align: center;
	color: ${({ theme }) => (theme !== "false" ? "#fff" : "#000")};

	opacity: 0.3;
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
	margin-top: 44px;
	border: 0;
	padding: 5px 20px;
	border-radius: 99px;
	color: ${({ theme }) => (theme === "false" ? "#fff" : "#000")};
	background-color: ${({ theme }) => (theme === "false" ? "#152540" : "#fff")};
`;
export const InputStyled = styled.input`
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	padding: 20px;
	color: #aaaaaa;
	background-color: ${({ theme }) =>
		theme !== "false" ? "transparent" : "#fff"};
	border: 1px solid #b4b4bb;
	color: ${({ theme }) => (theme !== "false" ? "#fff" : "#aaa")};

	border-radius: 10px;
	::placeholder {
		font-weight: 400;
		font-size: 14px;
		line-height: 21px;
		color: ${({ theme }) => (theme !== "false" ? "#fff" : "#aaa")};
	}
`;

export const LabelStyled = styled.label`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	background-color: ${({ theme }) =>
		theme !== "false" ? "#4d4d4d" : "#f8f8f8"};
	padding: 233px 128px;
	border: ${({ theme }) =>
		theme !== "false"
			? "1px dashed rgba(255, 255, 255, 0.3)"
			: "1px dashed rgba(0, 0, 0, 0.3)"};
	border-radius: 17px;
`;
export const TextAreaStyled = styled.textarea`
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	resize: none;
	padding: 20px;
	border: 1px solid #b4b4bb;
	border-radius: 10px;
	color: ${({ theme }) => (theme !== "false" ? "#fff" : "#aaa")};
	background-color: ${({ theme }) =>
		theme !== "false" ? "transparent" : "#fff"};
	::placeholder {
		font-weight: 400;
		font-size: 14px;
		line-height: 21px;
		color: ${({ theme }) => (theme !== "false" ? "#fff" : "#aaa")};
	}
`;
export const SelectStyled = styled.select`
	display: flex;
	align-items: center;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	padding: 20px;
	color: ${({ theme }) => (theme !== "false" ? "#fff" : "#aaa")};
	appearance: none;
	background-color: ${({ theme }) => (theme !== "false" ? "#191919" : "#fff")};
	border: 1px solid #b4b4bb;
	border-radius: 10px;
	background-image: url(${({ imgUrl }) => imgUrl});
	background-repeat: no-repeat;
	background-position: center right 20px;
	background-size: 24px 24px;
`;
export const OptionStyled = styled.option`
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	color: ${({ theme }) => (theme !== "false" ? "#aaa" : "#fff")};
`;
