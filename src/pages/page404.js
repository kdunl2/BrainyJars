import React from "react";
import theme from "theme";
import { Theme, Image, Link, Button, Section, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Sorry nothing more to read....
			</title>

		</Helmet>
		<Components.H>
			<Override slot="button" font="normal 400 0px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">
				Contact Us
			</Override>
		</Components.H>
		
	</Theme>;
});
