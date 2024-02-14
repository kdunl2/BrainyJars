import React from "react";
import theme from "theme";
import { Theme, Image, Strong, Link, Text, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Home | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Home | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			lg-padding="25px 0 25px 0"
			sm-padding="0px 0 25px 0"
			justify-content="center"
			padding="25px 0 75px 0"
			sm-align-items="center"
			sm-justify-content="center"
			quarkly-title="Hero"
			background="#000000"
			text-align="center"
			height="100%"
		>
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				width="100%"
				height="620px"
				justify-content="center"
				sm-width="100%"
				min-width="auto"
				margin="0px 32px 0px 32px"
				align-items="center"
				lg-height="520px"
				md-height="420px"
				md-padding="0px 24px 0px 24px"
				position="static"
				sm-height="100%"
			/>
			<Image
				src="https://uploads.quarkly.io/65c28f65009abe001f02fdd6/images/NFT-BRAIN-F_copy-removebg-preview.png?v=2024-02-06T20:06:36.102Z"
				display="block"
				bottom="auto"
				height="100vh"
				left="auto"
				position="relative"
				width="770.7740375976563px"
				opacity=".25"
				z-index="1"
				sm-width="10p"
				sm-height="50%"
				srcSet="https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/NFT-BRAIN-F_copy-removebg-preview.png?v=2024-02-06T20%3A06%3A36.102Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/NFT-BRAIN-F_copy-removebg-preview.png?v=2024-02-06T20%3A06%3A36.102Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/NFT-BRAIN-F_copy-removebg-preview.png?v=2024-02-06T20%3A06%3A36.102Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/NFT-BRAIN-F_copy-removebg-preview.png?v=2024-02-06T20%3A06%3A36.102Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/NFT-BRAIN-F_copy-removebg-preview.png?v=2024-02-06T20%3A06%3A36.102Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/NFT-BRAIN-F_copy-removebg-preview.png?v=2024-02-06T20%3A06%3A36.102Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/NFT-BRAIN-F_copy-removebg-preview.png?v=2024-02-06T20%3A06%3A36.102Z&quality=85&w=3200 3200w"
				sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw"
			/>
			<Link
				text-decoration-line="initial"
				color="--light"
				letter-spacing="0.5px"
				transition="transform 0.5s --transitionTimingFunction-easeInOut 0s"
				href="/main"
				background="--color-green linear-gradient(0deg,#ffffff 0%,rgba(0,0,0,1) 100%)"
				font="normal 400 24px/1.5 --fontFamily-googleJosefinSans"
				hover-transform="translateY(-4px)"
				position="relative"
				z-index="1"
				left="auto"
				top="auto"
				hover-background="--color-green radial-gradient(circle at center,#ffffff 0%,rgba(0,0,0,1) 100%)"
				border-width="1px"
				border-radius="19px"
				border-color="#112357"
				hover-color="--dark"
				text-align="center"
				active-background="--color-green"
				width="auto"
				height="auto"
				padding="5px 15px 5px 15px"
			>
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Enter
				</Strong>
			</Link>
			<Text
				font="normal 900 50px/1.2 --fontFamily-googleTitanOne"
				sm-text-align="center"
				sm-width="80%"
				lg-text-align="center"
				lg-font="--headline2"
				color="--light"
				position="relative"
				bottom="auto"
				height="84.57479306640624px"
				left="auto"
				width="355.9216904296875px"
				z-index="2"
				hover-color="--red"
				transition="all 0.5s ease-in-out 0s"
			>
				Enter The Jar
			</Text>
			<Text
				sm-text-align="center"
				sm-width="80%"
				opacity="1"
				md-text-align="center"
				font="normal 400 20px/1.5 --fontFamily-googleRighteous"
				color="--lightD2"
				position="relative"
				bottom="auto"
				height="112.51968383789062px"
				left="auto"
				width="164.62268945312502px"
				text-align="center"
				z-index="2"
				hover-color="--orange"
				transition="all 0.5s ease-in-out 0s"
			>
				3140 BrainyJars excited to join the Solana Ecosystem
			</Text>
		</Section>
		<RawHtml>
			<script place={"endOfHead"} rawKey={"65caaca2aced8fcc8306120d"} />
			<script place={"endOfHead"} rawKey={"65cbefcd4c742584b173ea24"}>
				{"document.addEventListener('DOMContentLoaded', function() {\ndocument.querySelector(\".whiteListButton\").addEventListener('click', function() {\n  var whiteListTextDiv = document.querySelector(\".whiteListContent\");\n  if (whiteListTextDiv) {\n    // Ensure the transition effect is applied to the div\n    whiteListTextDiv.style.transition = \"all 0.5s ease-in-out\";\n\n    // Check the current display style and toggle it\n    if (whiteListTextDiv.style.display === \"block\") {\n      whiteListTextDiv.style.height = \"0\"; // Adjust as needed for hiding\n      setTimeout(() => { whiteListTextDiv.style.display = \"none\"; }, 500); // Ensure display:none is applied after the transition\n    } else {\n      whiteListTextDiv.style.display = \"block\";\n      setTimeout(() => { whiteListTextDiv.style.height = \"100%\"; }, 0); // Delay height adjustment to allow for transition\n    }\n  }\n});\n\n// New event listener for the getWhitelist button\ndocument.querySelector(\".getWhitelist\").addEventListener('click', function() {\n  // Query for the div with the class 'section'\n  var sectionDiv = document.querySelector(\".sections\");\n  if (sectionDiv) {\n    // Set the display of the section div to block\n    sectionDiv.style.display = \"block\";\n    const sectionCompleteButton = document.querySelector(\".sectionComplete\");\n    if (sectionCompleteButton) {\n      sectionCompleteButton.disabled = true;\n    }\n  }\n});\n\n// Function to check if all modules are complete\nfunction checkAllModulesComplete() {\n  // Query all module buttons\n  const modules = document.querySelectorAll(\".module\");\n  // Check if every module has the 'complete' class\n  const allComplete = Array.from(modules).every(module => module.classList.contains(\"complete\"));\n  debugger\n  // If all modules are complete, enable the sectionComplete button\n  if (allComplete) {\nvar completedAllElement = document.querySelector(\".completedAll\");\nif (completedAllElement) {\n    completedAllElement.innerText = \"\";\n}\n\n    const sectionCompleteButton = document.querySelector(\".sectionComplete\");\n    if (sectionCompleteButton) {\n      sectionCompleteButton.disabled = false;\n    }\n  }\n}\n\n// Attach event listeners to each module button\ndocument.querySelectorAll(\".module\").forEach(moduleButton => {\n  moduleButton.addEventListener('click', function() {\n    // Set the background to light green and add 'complete' class\n    this.style.backgroundColor = \"lightgreen\";\n    this.classList.add(\"complete\");\n    \n    // Check if all modules are complete\n    checkAllModulesComplete();\n  });\n});\n});"}
			</script>
		</RawHtml>
	</Theme>;
});