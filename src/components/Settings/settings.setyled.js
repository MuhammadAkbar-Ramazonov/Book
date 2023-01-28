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
	font-family: "Poppins";
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	margin-bottom: 32px;
	color: #fffefe;
	color: ${({ theme }) => (theme === "false" ? "#212121" : "#dedede")};
`;
export const LabelStyled = styled.label`
	width: 100%;
	margin-bottom: 10px;
`;
export const SelectStyled = styled.select`
	font-family: "Poppins";
	font-style: normal;
	width: 100%;
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	margin-bottom: 3px;
	padding: 12px 20px;
	appearance: none;
	color: ${({ theme }) => (theme === "false" ? "#464E5F" : "#000000")};
	border: 0;
	background-color: #f3f6f9;
	border-radius: 4px;
	background-image: url(${({ imgUrl }) => imgUrl});
	background-repeat: no-repeat;
	background-position: center right 20px;
	background-size: 24px 24px;
`;
export const OptionStyled = styled.option`
	font-family: "Poppins";
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	/* identical to box height */
	color: ${({ theme }) => (theme === "false" ? "#464e5f" : "#000")};
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
	color: ${({ theme }) => (theme === "false" ? "#B5B5C3" : "#B5B5C3")};
	opacity: 0.8;
`;
export const SwitchLabelStyled = styled.label`
	position: relative;
	display: inline-block;
	width: 87px;
	height: 30px;
`;
export const SwitchHiddenStyled = styled.input`
	opacity: 0;
	width: 0;
	height: 0;

	:checked + span:before {
		-webkit-transform: translateX(55px);
		-ms-transform: translateX(55px);
		transform: translateX(55px);
		background: #3699ff;
	}
`;

export const SwitchShowStyled = styled.span`
	position: absolute;
	cursor: pointer;
	top: 28px;
	left: 0;
	right: 0;
	bottom: -28px;
	-webkit-transition: 0.4s;
	transition: 0.4s;
	background: #f3f6f9;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 34px;
	:before {
		position: absolute;
		content: "";
		width: 28px;
		height: 28px;
		left: 2px;
		bottom: 1px;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.34);
	}
`;
