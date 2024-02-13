import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Text, Button, Section } from "@quarkly/widgets";
import BurgerMenu from "./BurgerMenu";
import { MdMenu } from "react-icons/md";
const defaultProps = {
	"padding": "16px 0 16px 0",
	"quarkly-title": "Header",
	"align-items": "center",
	"justify-content": "center",
	"background": "#ff5906"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "16px --fontFamily-googleMaterialSymbolsOutlined",
			"children": "BrainyYJars"
		}
	},
	"burgerMenu": {
		"kind": "BurgerMenu",
		"props": {
			"md-display": "flex",
			"md-align-items": "center",
			"md-justify-content": "flex-end"
		}
	},
	"burgerMenuOverride": {
		"kind": "Override",
		"props": {
			"slot": "icon-open",
			"md-position": "fixed",
			"md-top": "18px",
			"md-right": "18px"
		}
	},
	"burgerMenuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "menu",
			"md-top": 0,
			"md-width": "100%",
			"justify-content": "center",
			"lg-transition": "transform 400ms ease 0s",
			"md-position": "fixed",
			"display": "flex",
			"md-left": 0,
			"lg-transform": "translateY(0px) translateX(0px)",
			"md-height": "100%",
			"padding": "0px 0 0px 0",
			"align-items": "center"
		}
	},
	"overrideOverride": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"md-padding": "16px 40px 16px 40px",
			"display": "inline-block",
			"text-transform": "uppercase",
			"text-align": "center",
			"padding": "8px 20px 8px 20px"
		}
	},
	"overrideOverride1": {
		"kind": "Override",
		"props": {
			"slot": "item-404",
			"lg-display": "none",
			"display": "none"
		}
	},
	"overrideOverride2": {
		"kind": "Override",
		"props": {
			"slot": "item-index",
			"lg-display": "none",
			"display": "none"
		}
	},
	"overrideOverride3": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"md-hover-opacity": "1",
			"md-active-opacity": "1",
			"md-color": "--dark",
			"font": "--base",
			"text-transform": "initial",
			"md-font": "16px/24px sans-serif",
			"text-decoration-line": "initial",
			"color": "--dark",
			"transition": "opacity .15s ease 0s",
			"letter-spacing": "0.5px",
			"md-opacity": ".5",
			"md-transition": "opacity .15s ease 0s",
			"opacity": ".5",
			"hover-opacity": "1"
		}
	},
	"overrideOverride4": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"md-opacity": "1",
			"md-cursor": "default",
			"opacity": "1",
			"color": "--primary",
			"cursor": "default"
		}
	},
	"burgerMenuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "icon,icon-close",
			"category": "md",
			"icon": MdMenu
		}
	},
	"burgerMenuOverride3": {
		"kind": "Override",
		"props": {
			"slot": "icon",
			"category": "md",
			"icon": MdMenu,
			"size": "36px",
			"md-right": "0px",
			"md-position": "relative"
		}
	},
	"burgerMenuOverride4": {
		"kind": "Override",
		"props": {
			"slot": "menu-open",
			"md-justify-content": "center",
			"md-top": 0,
			"md-bottom": 0,
			"md-display": "flex",
			"md-flex-direction": "column",
			"md-align-items": "center"
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"md-display": "none",
			"white-space": "nowrap",
			"transition": "transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s",
			"font": "--base",
			"letter-spacing": "0.5px",
			"z-index": "5",
			"background": "--color-primary",
			"padding": "8px 18px 8px 18px",
			"border-radius": "0px",
			"hover-transform": "translateY(-4px)",
			"justify-self": "end"
		}
	}
};

const Header = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			md-margin="0px 16px 0px 16px"
			display="grid"
			grid-template-columns="repeat(3, 1fr)"
			md-grid-template-columns="repeat(2, 1fr)"
			margin="0px 32px 0px 32px"
			width="100%"
		/>
		<Text {...override("text")} />
		<BurgerMenu {...override("burgerMenu")}>
			<Override {...override("burgerMenuOverride")} />
			<Override {...override("burgerMenuOverride1")}>
				<Override {...override("overrideOverride")} />
				<Override {...override("overrideOverride1")} />
				<Override {...override("overrideOverride2")} />
				<Override {...override("overrideOverride3")} />
				<Override {...override("overrideOverride4")} />
			</Override>
			<Override {...override("burgerMenuOverride2")} />
			<Override {...override("burgerMenuOverride3")} />
			<Override {...override("burgerMenuOverride4")} />
		</BurgerMenu>
		<Button {...override("button")}>
			Contact Us
		</Button>
		{children}
	</Section>;
};

Object.assign(Header, { ...Section,
	defaultProps,
	overrides
});
export default Header;