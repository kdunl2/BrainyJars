import React from "react";
import { useOverrides, Override, SocialMedia } from "@quarkly/components";
import { Box, Section } from "@quarkly/widgets";
const defaultProps = {
	"margin": "0 0 0 0",
	"padding": "16px 0 16px 0",
	"box-sizing": "border-box",
	"quarkly-title": "Footer",
	"justify-content": "center"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"grid-gap": "32px",
			"width": "100%",
			"grid-template-columns": "repeat(2, 1fr)",
			"sm-grid-gap": "16px",
			"display": "grid"
		}
	},
	"socialMedia": {
		"kind": "SocialMedia",
		"props": {
			"facebook": "https://www.facebook.com/",
			"twitter": "https://twitter.com",
			"youtube": "https://www.youtube.com/",
			"justify-content": "flex-end"
		}
	},
	"socialMediaOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"background": "none",
			"border-radius": "50%"
		}
	},
	"socialMediaOverride1": {
		"kind": "Override",
		"props": {
			"slot": "icon",
			"color": "--dark"
		}
	}
};

const Social = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			width="100%"
			md-margin="0px 16px 0px 16px"
			min-width="auto"
			margin="0px 32px 0px 32px"
		/>
		<Box {...override("box")}>
			<SocialMedia {...override("socialMedia")}>
				<Override {...override("socialMediaOverride")} />
				<Override {...override("socialMediaOverride1")} />
			</SocialMedia>
		</Box>
		{children}
	</Section>;
};

Object.assign(Social, { ...Section,
	defaultProps,
	overrides
});
export default Social;