import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import HeaderMain from "./HeaderMain";
const defaultProps = {};
const overrides = {};

const Head2 = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <HeaderMain {...rest}>
		<Override slot="overrideOverride4">
			Get Whitelisted
		</Override>
		<Override slot="overrideOverride" width="119px" />
		<Override slot="button" background="--color-primary url(https://uploads.quarkly.io/65c28f65009abe001f02fdd6/images/fotor-ai-20240206163641.jpg?v=2024-02-06T22:14:58.798Z) 0% 0%/cover" height="50px" width="50px" />
		{children}
	</HeaderMain>;
};

Object.assign(Head2, { ...HeaderMain,
	defaultProps,
	overrides
});
export default Head2;