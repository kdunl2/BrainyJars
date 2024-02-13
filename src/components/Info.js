import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Text, Link, Box, Image, Section } from "@quarkly/widgets";
const defaultProps = {
	"md-padding": "25px 0px 25px 0px",
	"justify-content": "center",
	"padding": "70px 0 70px 0",
	"quarkly-title": "Info",
	"lg-padding": "50px 0px 50px 0px",
	"background": "#ff5906"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"lg-grid-template-columns": "1fr",
			"display": "grid",
			"grid-template-columns": "2fr 3fr",
			"grid-gap": "64px",
			"xl-grid-gap": "32px",
			"md-grid-template-columns": "1fr"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"display": "flex",
			"flex-direction": "column",
			"align-items": "flex-start"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"letter-spacing": "1px",
			"quarkly-title": "Title",
			"margin": "0px 0px 10px 0px",
			"color": "--dark",
			"opacity": "0.6",
			"lg-text-align": "center",
			"lg-margin": "0px 0px 6px 0px",
			"text-transform": "uppercase",
			"children": "Team"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"md-font": "--headline3",
			"font": "normal 900 42px/1.2 --fontFamily-googleBebasNeue",
			"margin": "0px 0px 28px 0px",
			"color": "--dark",
			"lg-text-align": "center",
			"lg-margin": "0px 0px 18px 0px",
			"sm-font": "--headline3",
			"children": "Who"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"lg-margin": "0px 0px 18px 0px",
			"sm-font": "--base",
			"font": "--lead",
			"margin": "0px 0px 20px 0px",
			"color": "#000000",
			"opacity": "0.6",
			"lg-text-align": "left",
			"children": "We are a collective of innovators dedicated to unlocking the potential of tomorrow's investors. Our mission leverages NFTs as keys to a world of knowledge, offering users the opportunity to deepen their understanding of cryptocurrencies, NFTsand beyond. By engaging with our platform, members not only gain invaluable insights but also earn cryptocurrency rewards. Embark with us on a path where knowledge and growth go hand-in-hand, transforming the way you build wealth."
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/about",
			"color": "--light",
			"padding": "8px 18px 8px 18px",
			"text-align": "center",
			"transition": "transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s",
			"text-decoration-line": "initial",
			"font": "--base",
			"letter-spacing": "0.5px",
			"margin": "9px 0px 0px 0px",
			"background": "--color-primary",
			"hover-transform": "translateY(-4px)",
			"children": "Read More"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"padding": "0px 0px 60% 0px",
			"height": "0px",
			"hover-background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/110% no-repeat",
			"transition": "background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s",
			"md-order": "-1",
			"width": "100%",
			"margin": "0px 0px 0px 0px",
			"lg-order": "-1",
			"background": "#ff5906 url(https://uploads.quarkly.io/65c28f65009abe001f02fdd6/images/ninth.png?v=2024-02-06T21:56:51.809Z) 50% 50% /contain repeat-y scroll padding-box",
			"position": "static"
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"md-margin": "44px 0px 0px 0px",
			"lg-grid-template-columns": "1fr",
			"display": "grid",
			"grid-template-columns": "3fr 2fr",
			"grid-gap": "64px",
			"margin": "96px 0px 0px 0px",
			"xl-grid-gap": "32px",
			"md-grid-template-columns": "1fr",
			"lg-margin": "64px 0px 0px 0px"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/65c28f65009abe001f02fdd6/images/third.png?v=2024-02-06T21:56:51.808Z",
			"display": "block",
			"width": "500px"
		}
	},
	"box4": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"flex-direction": "column",
			"align-items": "flex-start",
			"min-width": "100px",
			"min-height": "100px"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"lg-text-align": "center",
			"quarkly-title": "Title",
			"text-transform": "uppercase",
			"opacity": "0.6",
			"lg-margin": "0px 0px 6px 0px",
			"font": "--base",
			"margin": "0px 0px 10px 0px",
			"letter-spacing": "1px",
			"color": "--dark",
			"children": "Vision"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"font": "normal 900 42px/1.2 --fontFamily-googleBebasNeue",
			"margin": "0px 0px 28px 0px",
			"color": "--dark",
			"lg-text-align": "center",
			"lg-margin": "0px 0px 18px 0px",
			"sm-font": "--headline3",
			"md-font": "--headline3",
			"children": "Why"
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"opacity": "0.6",
			"sm-text-align": "left",
			"lg-text-align": "left",
			"lg-margin": "0px 0px 18px 0px",
			"sm-font": "--base",
			"font": "--lead",
			"margin": "0px 0px 20px 0px",
			"color": "--darkL2",
			"children": "We created this platform because we believe knowledge is key to navigating the digital economy's opportunities. Our aim is to bridge the gap between the vast potential of blockchain technology and the public's access to empowering information. By integrating education with rewards, we strive to make learning about cryptocurrencies, NFTs, and digital assets both accessible and rewarding. Our project is driven by the desire to foster a community where informed decision-making and innovation lead to growth and wealth, democratizing the future of finance and technology for all."
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"color": "--light",
			"text-align": "center",
			"background": "--color-primary",
			"transition": "transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s",
			"hover-transform": "translateY(-4px)",
			"href": "/team",
			"text-decoration-line": "initial",
			"padding": "8px 18px 8px 18px",
			"font": "--base",
			"letter-spacing": "0.5px",
			"margin": "9px 0px 0px 0px",
			"children": "Read More"
		}
	},
	"box5": {
		"kind": "Box",
		"props": {
			"md-margin": "44px 0px 0px 0px",
			"lg-grid-template-columns": "1fr",
			"display": "grid",
			"grid-template-columns": "2fr 3fr",
			"xl-grid-gap": "32px",
			"md-grid-template-columns": "1fr",
			"lg-margin": "64px 0px 0px 0px",
			"grid-gap": "64px",
			"margin": "96px 0px 0px 0px"
		}
	},
	"box6": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"display": "flex",
			"flex-direction": "column",
			"align-items": "flex-start"
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"quarkly-title": "Title",
			"text-transform": "uppercase",
			"lg-text-align": "center",
			"margin": "0px 0px 10px 0px",
			"letter-spacing": "1px",
			"color": "--dark",
			"opacity": "0.6",
			"lg-margin": "0px 0px 6px 0px",
			"font": "--base",
			"children": "NFTS"
		}
	},
	"text7": {
		"kind": "Text",
		"props": {
			"font": "--headline2",
			"margin": "0px 0px 28px 0px",
			"color": "--dark",
			"lg-text-align": "center",
			"lg-margin": "0px 0px 18px 0px",
			"sm-text-align": "left",
			"sm-font": "--headline3",
			"md-font": "--headline3",
			"children": "What"
		}
	},
	"text8": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 20px 0px",
			"color": "--darkL2",
			"opacity": "0.6",
			"lg-text-align": "left",
			"lg-margin": "0px 0px 18px 0px",
			"sm-font": "--base",
			"children": "BrainyJar NFTs' represent an exclusive collection launching on the Solana blockchain, designed to serve as your gateway to our innovative platform. Each NFT acts as a unique key, unlocking access to a comprehensive learning ecosystem focused on cryptocurrencies, NFTs and much more. Beyond mere access, holders of these NFTs are also eligible for cryptocurrency rewards. This dual function not only enhances the value of holding a BrainyJar NFT but also aligns with our mission to intertwine knowledge acquisition with tangible financial benefits. By owning a BrainyJar NFT, you're not just part of a community; you're holding a piece of the future where education meets opportunity on the blockchain."
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"margin": "9px 0px 0px 0px",
			"hover-transform": "translateY(-4px)",
			"text-decoration-line": "initial",
			"padding": "8px 18px 8px 18px",
			"font": "--base",
			"transition": "transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s",
			"text-align": "center",
			"href": "/contact",
			"color": "--light",
			"letter-spacing": "0.5px",
			"background": "--color-primary",
			"children": "Read More"
		}
	},
	"image1": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/65c28f65009abe001f02fdd6/images/fourth.png?v=2024-02-06T21:56:51.825Z",
			"display": "block",
			"width": "600px"
		}
	}
};

const Info = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			width="100%"
			min-width="auto"
			margin="0px 32px 0px 32px"
			md-margin="0px 16px 0px 16px"
		/>
		<Box {...override("box")}>
			<Box {...override("box1")}>
				<Text {...override("text")} />
				<Text {...override("text1")} />
				<Text {...override("text2")} />
				<Link {...override("link")} />
			</Box>
			<Box {...override("box2")} />
		</Box>
		<Box {...override("box3")}>
			<Image {...override("image")} />
			<Box {...override("box4")}>
				<Text {...override("text3")} />
				<Text {...override("text4")} />
				<Text {...override("text5")} />
				<Link {...override("link1")} />
			</Box>
		</Box>
		<Box {...override("box5")}>
			<Box {...override("box6")}>
				<Text {...override("text6")} />
				<Text {...override("text7")} />
				<Text {...override("text8")} />
				<Link {...override("link2")} />
			</Box>
			<Image {...override("image1")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(Info, { ...Section,
	defaultProps,
	overrides
});
export default Info;