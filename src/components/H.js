import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import Head2 from "./Head2";
const defaultProps = {};
const overrides = {};

const H = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Head2 {...rest}>
		<Override slot="overrideOverride4">
			BrainyJars NFT
		</Override>
		{children}
	</Head2>;
};

Object.assign(H, { ...Head2,
	defaultProps,
	overrides
});
export default H;