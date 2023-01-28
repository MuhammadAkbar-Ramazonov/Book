import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
	TitleWrapperStyled,
	ItemStyled,
	ListStyled,
	TitleStyled,
} from "./carusel.styled";
import "./slick.css";
export const Carusel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<ListStyled>
			<Slider {...settings}>
				<ItemStyled>
					<TitleWrapperStyled>
						<TitleStyled>Temuriylar davri adabiyoti</TitleStyled>
					</TitleWrapperStyled>
				</ItemStyled>
				<ItemStyled>
					<TitleWrapperStyled>
						<TitleStyled>Temuriylar davri adabiyoti</TitleStyled>
					</TitleWrapperStyled>
				</ItemStyled>
				<ItemStyled>
					<TitleWrapperStyled>
						<TitleStyled>Temuriylar davri adabiyoti</TitleStyled>
					</TitleWrapperStyled>
				</ItemStyled>
				<ItemStyled>
					<TitleWrapperStyled>
						<TitleStyled>Temuriylar davri adabiyoti</TitleStyled>
					</TitleWrapperStyled>
				</ItemStyled>
			</Slider>
		</ListStyled>
	);
};
