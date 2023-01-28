import styled from "styled-components";

export const SearchStyled = styled.div`
	position: absolute;
	top: 425px;
	right: 287px;
	width: 1276px;
	padding: 29px 73px;
	background-color: ${({ theme }) => (theme === "false" ? "#fff" : "#191919")};
	box-shadow: 3px 4px 9px rgb(0 0 0 / 25%);
	border-radius: 15px;
`;
export const TitleStyled = styled.h2`
	font-weight: 400;
	font-size: 32px;
	line-height: 48px;
	margin-top: 0;
	margin-bottom: 9px;
	text-align: center;
	color: ${({ theme }) => (theme === "false" ? "#d1b89d" : "#c9ac8c")};
`;
export const FormStyled = styled.form`
	display: flex;
	/* align-items: center; */
	justify-content: space-between;
`;
export const InputStyled = styled.input`
	flex-grow: 1;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	margin-right: 14px;
	padding: 12px 27px;
	color: ${({ theme }) => (theme === "false" ? " #0d0d0d" : "#AFAFAF")};
	border: 0;
	background-color: ${({ theme }) =>
		theme === "false" ? "#F5F5F5" : "#404040"};
	border-radius: 15px;
`;
export const ButtonStyled = styled.button`
	display: flex;
	align-items: center;
	padding: 12px 42px 12px 43px;
	border: 0;
	background-color: ${({ theme }) =>
		theme === "false" ? "#C9AC8C" : "#c9ac8c"};
	border-radius: 15px;
	color: ${({ theme }) => (theme === "false" ? " #EFDAC3" : "#3C2710")};
`;
