import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Text, Section } from "@quarkly/widgets";
const defaultProps = {
	"box-sizing": "border-box",
	"lg-padding": "50px 30px 50px 30px",
	"id": "mission",
	"padding": "90px 0px 100px 0px",
	"quarkly-title": "About",
	"border-color": "--color-lightD2",
	"border-style": "solid",
	"border-width": "1px 0px 1px 0px",
	"sm-padding": "24px 0 24px 0",
	"justify-content": "center",
	"background": "--color-grey"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"text-align": "center",
			"font": "normal 400 16px/1.5 --fontFamily-googleJosefinSans",
			"opacity": "0.6",
			"letter-spacing": "1px",
			"margin": "0px 0px 10px 0px",
			"lg-margin": "0px 0px 6px 0px",
			"quarkly-title": "Title",
			"text-transform": "uppercase",
			"color": "--light",
			"lg-text-align": "center",
			"children": "Our Mission"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"letter-spacing": "1px",
			"color": "--light",
			"text-align": "center",
			"width": "85%",
			"lg-font": "--lead",
			"sm-font": "--base",
			"font": "normal 300 28px/1.2 --fontFamily-googleJosefinSans",
			"margin": "0px 0px 0px 0px",
			"border-color": "#ffffff",
			"children": "Our mission is to revolutionize the NFT landscape by merging education, collaboration, and innovation. We aim to empower individuals to explore the vast potential of NFTs, fostering a community where learning leads to earning. Through strategic partnerships and a unique reward system, we strive to make the digital art and collectibles market accessible, engaging, and rewarding for all. By democratizing knowledge and offering tangible rewards, we are committed to building a platform that not only serves as a gateway to the world of NFTs but also nurtures a culture of appreciation, understanding, and investment in digital creativity. Together, we are unlocking the future of NFTs, one discovery at a time."
		}
	}
};

const Mission = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			md-margin="0px 16px 0px 16px"
			align-items="center"
			width="100%"
			min-width="auto"
			margin="0px 32px 0px 32px"
			color="#ffffff"
			border-color="#fff8f8"
		/>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		{children}
	</Section>;
};

Object.assign(Mission, { ...Section,
	defaultProps,
	overrides
});
export default Mission;