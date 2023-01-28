import styled from "styled-components";

export const ButtonStyled = styled.button`
	display: block;
	font-weight: 600;
	font-size: 13px;
	line-height: 20px;
	margin-left: auto;
	padding: 12px 20px 11px 26px;
	border-radius: 4px;
	border: 0;
	color: ${({ theme }) => (theme === "false" ? "#fff" : "#0D0D0D")};
	background-color: ${({ theme }) =>
		theme === "false" ? "#152540" : "#f1f6ff"};
`;
export const TitleStyled = styled.h2`
	/* font-family: "Poppins"; */
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	margin-top: 43px;
	margin-bottom: 32px;
	color: ${({ theme }) => (theme === "false" ? "#212121" : "#dedede")};
`;
export const ImgStyled = styled.img`
	width: 174px;
	height: 174px;
	border-radius: 50%;
`;
export const LabelStyled = styled.label``;
export const LabelImgStyled = styled.label`
	position: relative;
	width: 175px;
	height: 175px;
	border-radius: 50%;
	::after {
		content: "";
		position: absolute;
		bottom: 0;
		right: 0;
		width: 50px;
		height: 50px;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		background-image: url(${({ imgUrl }) => imgUrl});
		background-repeat: no-repeat;
		background-position: center;
		background-color: ${({ theme }) =>
			theme === "false" ? " #f3f6f9" : "#161616"};
		border-radius: 8px;
	}
`;
export const InputStyled = styled.input`
	width: 100%;
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	margin-bottom: 3px;
	padding: 12px 20px;
	color: ${({ theme }) => (theme === "false" ? "#464E5F" : "#000000")};
	border: 0;
	background-color: #f3f6f9;
	border-radius: 4px;
	::placeholder {
		color: ${({ theme }) => (theme === "false" ? "#464E5F" : "#000000")};
	}
`;
export const LabelDescStyled = styled.p`
	font-weight: 400;
	font-size: 13px;
	line-height: 20px;
	margin-top: 0;
	margin-bottom: 7px;
	color: ${({ theme }) => (theme === "false" ? "#464e5f" : "#F3F6F9")};
`;
export const ErrorDescStyled = styled.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	margin: 0;
	color: ${({ theme }) => (theme === "false" ? "#B5B5C3" : "#f3f6f9")};
	opacity: 0.8;
`;
