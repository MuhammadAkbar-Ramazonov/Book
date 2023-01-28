import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
/* GENERAL */

* {
    box-sizing: border-box;
}
*::before,
*::after {
    box-sizing: inherit;
}
html {
    height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
img,
svg {
    display: block;
    height: auto;
}


/* width */
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.hero-nav-link{
    font-weight: 400;
    font-size: 16px;
    text-decoration: none;
    line-height: 144.4%;
    color: ${({ theme }) => (theme === "false" ? "#000" : "#fff ")};
    opacity: 0.3;
}
.hero-nav-link-active{
    opacity: 1;
}
.category-link{
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */
    text-decoration: none;
    color:  ${({ theme }) => (theme === "false" ? "#D3D3D3" : "#3E3E3E ")};  
    :hover {
        color:  ${({ theme }) =>
					theme === "false" ? "#D3D3D3" : "#3E3E3E "};  
    }
}

.category-link-active{
    color:  ${({ theme }) =>
			theme === "false" ? "#C9AC8C" : "#C9AC8C "};      
    :hover{
        color:  ${({ theme }) =>
					theme === "false" ? "#C9AC8C" : "#C9AC8C"};     
    }
}
.MuiFormLabel-root, .MuiFormHelperText-root {
    color: #AAAAAA !important;
}
.MuiOutlinedInput-notchedOutline{
    border: 1px solid #B4B4BB !important;
    border-radius: 10px !important;
}
.MuiInputBase-input {
    color: #aaa !important;
}
.profil-nav-link {
    display: block;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    padding: 23px 0 22px 23px;
    opacity: 0.6;
    line-height: 21px;
    background-color: ${({ theme }) =>
			theme === "false" ? "#F3F6F9" : "#2D2D2D "};
    color:${({ theme }) => (theme === "false" ? "#464E5F" : "#fff ")};  
    :hover {
        color:${({ theme }) => (theme === "false" ? "#464E5F" : "#fff ")}; 
    }
}
.profil-nav-link-active {
    display: block;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    padding: 23px 0 22px 23px;
    line-height: 21px;
    background:  ${({ theme }) => (theme === "false" ? "#DDE6F5" : "#F3F6F9 ")};
    border-radius: 4px 4px 0px 0px;
    color: ${({ theme }) => (theme === "false" ? "#000" : "#152540 ")};
    :hover {
        color: ${({ theme }) => (theme === "false" ? "#000" : "#152540 ")};
    }
}
.profil-nav-link span {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    padding: 6px 14px 5px 15px;
    color: ${({ theme }) => (theme === "false" ? "#3699FF" : "#fff ")};
    border:   ${({ theme }) =>
			theme === "false" ? "1px solid transparent" : "1px solid #E5EAEE"}; 
    border-radius:  ${({ theme }) => (theme === "false" ? "0" : "4px")}; 
    background-color: ${({ theme }) =>
			theme === "false" ? "#E5EAEE" : "#2D2D2D "}; 
    border-radius: 4px;
}
.profil-nav-link-active span {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-right: 9px;
    padding: 6px 14px 5px 15px;
    border: 1px solid transparent;
    color: #ffffff;
    background-color: ${({ theme }) =>
			theme === "false" ? "#152540" : "#000 "}; 
    border-radius: 4px;
}


.css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper{
    background-color:   ${({ theme }) =>
			theme === "false" ? "#F5F5F5" : "#222222 "}  !important;
}
body {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
    padding: 0;
    /* font-family: "nunito", "Arial", sans-serif; */
    background-color: ${({ theme }) =>
			theme === "false" ? "#fff" : "#191919 "};
    font-weight: 400;
    overflow-x: hidden;
}

/* STICKY-FOOTER */
.site-main {
    flex-grow: 1;
}
`;
