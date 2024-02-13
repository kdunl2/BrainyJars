import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import Header from "./Header";
const defaultProps = {
	"background": "--color-light"
};
const overrides = {};

const HeaderMain = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Header {...rest}>
		<Override slot="text" text-align="left" position="relative" padding="2% 0px 0px 0px" />
		{children}
	</Header>;
};

Object.assign(HeaderMain, { ...Header,
	defaultProps,
	overrides
});
export default HeaderMain;