import React from "react";
import theme from "theme";
import { Theme, Image, Section, Text, Icon, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { BsUnlock } from "react-icons/bs";
import { GiAlarmClock, GiTakeMyMoney, GiCalendar } from "react-icons/gi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"main"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.H>
			<Override slot="button" font="normal 400 0px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">
				Contact Us
			</Override>
		</Components.H>
		<Section display="block" height="782px" background="#f71414">
			<Override slot="SectionContent" flex-direction="row" height="800px" />
			<Image
				src="https://uploads.quarkly.io/65c28f65009abe001f02fdd6/images/second.png?v=2024-02-06T21:56:51.849Z"
				display="block"
				position="relative"
				left="-30%"
				right="auto"
				width="28vw"
				top="auto"
				bottom="50%"
				height="316.25572998046874px"
				srcSet="https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/second.png?v=2024-02-06T21%3A56%3A51.849Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/second.png?v=2024-02-06T21%3A56%3A51.849Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/second.png?v=2024-02-06T21%3A56%3A51.849Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/second.png?v=2024-02-06T21%3A56%3A51.849Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/second.png?v=2024-02-06T21%3A56%3A51.849Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/second.png?v=2024-02-06T21%3A56%3A51.849Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/second.png?v=2024-02-06T21%3A56%3A51.849Z&quality=85&w=3200 3200w"
				sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw"
			/>
			<Section
				align-items="center"
				overflow-x="visible"
				overflow-y="visible"
				padding="24px 0vw 24px 0"
				position="relative"
				right="6vw"
			>
				<Image
					src="https://uploads.quarkly.io/65c28f65009abe001f02fdd6/images/Screenshot%202024-02-07%20at%202.43.51%20PM.png?v=2024-02-07T19:44:48.960Z"
					display="block"
					width="45vw"
					height="50vh"
					srcSet="https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/Screenshot%202024-02-07%20at%202.43.51%20PM.png?v=2024-02-07T19%3A44%3A48.960Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/Screenshot%202024-02-07%20at%202.43.51%20PM.png?v=2024-02-07T19%3A44%3A48.960Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/Screenshot%202024-02-07%20at%202.43.51%20PM.png?v=2024-02-07T19%3A44%3A48.960Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/Screenshot%202024-02-07%20at%202.43.51%20PM.png?v=2024-02-07T19%3A44%3A48.960Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/Screenshot%202024-02-07%20at%202.43.51%20PM.png?v=2024-02-07T19%3A44%3A48.960Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/Screenshot%202024-02-07%20at%202.43.51%20PM.png?v=2024-02-07T19%3A44%3A48.960Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/65c28f65009abe001f02fdd6/images/Screenshot%202024-02-07%20at%202.43.51%20PM.png?v=2024-02-07T19%3A44%3A48.960Z&quality=85&w=3200 3200w"
					sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw"
				/>
			</Section>
			<Section background="#f71414">
				<Override slot="SectionContent" margin="50% 28.7969px 0px 28.7969px" />
				<Text margin="0px 0px 0px 0px" font="72px --fontFamily-googleMaterialSymbolsOutlined" opacity="0.5">
					BrainyYJars
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					border-color="#ffffff"
					color="#ffffff"
					font="600 70px --fontFamily-googleBebasNeue"
					text-align="center"
					hover-color="#4db32d"
				>
					Unlock the Future
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					color="--lightD2"
					opacity=".8"
					font="19px --fontFamily-sans"
					text-align="center"
				>
					{" "}Discover, Learn, and Earn with BrainyJars NFTs
				</Text>
			</Section>
		</Section>
		<Components.Mission border-color="rgba(228, 232, 236, 0.3)" background="#ffffff">
			<Override slot="SectionContent" color="#000000" />
			<Override slot="text1" color="#000000" />
			<Override slot="text" color="#000000">
				Our Mission
			</Override>
		</Components.Mission>
		<Components.Info background="#f71414">
			<Override
				slot="box2"
				background="#f71414 url(https://uploads.quarkly.io/65c28f65009abe001f02fdd6/images/ninth.png?v=2024-02-06T21:56:51.809Z) 50% 50% /contain repeat-y scroll padding-box"
				hover-border-color="rgba(0, 0, 0, 0)"
				hover-color="rgba(0, 0, 0, 0)"
				transition=" "
				hover-background="#f71414 url(https://uploads.quarkly.io/65c28f65009abe001f02fdd6/images/ninth.png?v=2024-02-06T21:56:51.809Z) 50% 50% /contain repeat-y scroll padding-box"
				hover-mix-blend-mode="hue"
			/>
			<Override slot="image1" src="https://uploads.quarkly.io/65c28f65009abe001f02fdd6/images/sixth.png?v=2024-02-06T21:56:51.813Z" hover-opacity="." hover-mix-blend-mode="hue" />
			<Override slot="image" hover-mix-blend-mode="hue" />
			<Override slot="text2">
				We are a collective of innovators dedicated to unlocking the potential of tomorrow's investors. Our mission leverages NFTs as keys to a world of knowledge, offering users the opportunity to deepen their understanding of cryptocurrencies, NFTsand beyond. By engaging with our platform, members not only gain invaluable insights but also earn cryptocurrency rewards. Embark with us on a path where knowledge and growth go hand-in-hand, transforming the way you build wealth.
			</Override>
		</Components.Info>
		<Section>
			<Override slot="SectionContent" font="30px --fontFamily-googleAnton" />
			<Text margin="0px 0px 0px 0px" border-width="0 0 2px 0" border-style="solid">
				Why should YOU get a BrainyJars NFT?
			</Text>
		</Section>
		<Section flex-direction="row" display="block">
			<Override slot="SectionContent" flex-direction="row" display="flex" justify-content="space-between" />
			<Box
				min-width="100px"
				min-height="100px"
				background="rgba(231, 15, 15, 0)"
				display="block"
				flex-direction="row"
				width="50%"
			>
				<Icon category="bs" icon={BsUnlock} size="64px" margin="0px 0px 0px 35%" />
				<Text margin="0px 0px 0px 0px" font="25px --fontFamily-googleAnton">
					Exclusive Access to Premium Content
				</Text>
				<Text margin="0px 0px 0px 0px" font="20px --fontFamily-googleOswald">
					Owning a BrainyJar NFT unlocks exclusive access to a curated platform of educational materials. This includes in-depth courses, webinars, and articles on cryptocurrencies, NFTs and more, designed to expand your knowledge and skills in the digital economy.
				</Text>
				<Box min-width="100px" min-height="100px" />
				<Icon category="gi" icon={GiAlarmClock} size="64px" margin="0px 0px 0px 35%" />
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 0px 0px" font="25px --fontFamily-googleAnton">
						Early Access and Whitelist Spots for New Projects
					</Text>
					<Text margin="0px 0px 0px 0px" font="20px --fontFamily-googleOswald">
						Holders are rewarded with cryptocurrency for actively engaging with the platform’s educational content, offering a unique opportunity to earn while you learn.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Box min-width="100px" min-height="100px">
						<Box min-width="100px" min-height="100px" />
					</Box>
				</Box>
				<Box min-width="100px" min-height="44px" />
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 0px 0px" font="25px --fontFamily-googleAnton" color="#049304">
						And much more...
					</Text>
				</Box>
			</Box>
			<Box min-width="100px" min-height="100px" background="rgba(43, 231, 140, 0)" width="50%">
				<Box min-width="100px" min-height="100px" />
				<Box min-width="100px" min-height="100px" />
				<Box min-width="100px" min-height="100px">
					<Icon category="gi" icon={GiTakeMyMoney} size="64px" margin="0px 0px 0px 50%" />
					<Text margin="0px 0px 0px 0px" font="25px --fontFamily-googleAnton" text-align="right">
						Crypto Rewards for Engagement
					</Text>
					<Text margin="0px 0px 0px 0px" font="20px --fontFamily-googleOswald" text-align="right">
						Holders are rewarded with cryptocurrency for actively engaging with the platform’s educational content, offering a unique opportunity to earn while you learn.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px" />
				<Box min-width="100px" min-height="100px">
					<Icon category="gi" icon={GiCalendar} size="64px" margin="0px 0px 0px 50%" />
					<Text margin="0px 0px 0px 0px" />
					<Text margin="0px 0px 0px 0px" font="25px --fontFamily-googleAnton" text-align="right">
						Consolidated Platform for Upcoming Projects
					</Text>
					<Text margin="0px 0px 0px 0px" text-align="justify">
						Access a centralized hub for discovering and learning about upcoming blockchain projects, allowing you to get in early and seize opportunities before they become mainstream.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			padding="120px 0 130px 0"
			lg-padding="80px 0 90px 0"
			quarkly-title="Stages/Steps-5"
			background="url(https://uploads.quarkly.io/65c28f65009abe001f02fdd6/images/output-onlinepngtools%20%284%29.png?v=2024-02-07T20:27:57.901Z) 0% 0%/100%,#f71414"
			display="block"
			opacity="1"
		>
			<Override
				slot="SectionContent"
				position="relative"
				z-index="1"
				color="rgba(0, 0, 0, 0)"
				display="block"
			/>
			<Text
				margin="7px 0px 40px 0px"
				font="normal 600 85px/1.2 --fontFamily-googleCaveat"
				color="--light"
				border-color="--color-dark"
				text-align="center"
				lg-margin="0px 0px 50px 0px"
			>
				Road Map
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="1fr"
				md-grid-template-rows="auto"
				md-grid-gap={0}
				lg-padding="0px 0 0px 0"
				flex-direction="column"
				align-self="center"
				position="static"
				z-index="4"
				padding="0px 0px 0px 25%"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="row"
					padding="0px 50px 0 0"
					lg-padding="0px 25px 0 0"
				>
					<Box
						min-width="40px"
						min-height="40px"
						background="--color-darkL1"
						display="flex"
						width="40px"
						height="40px"
						border-radius="50%"
						margin="0px 0px 30px 0px"
						color="--darkL2"
						align-items="center"
						justify-content="center"
						position="relative"
						z-index="3"
					>
						<Text margin="0px 0px 0px 0px" color="--light" font="--lead" text-align="center">
							1
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						margin="0px 0px 0px -20px"
						border-width="0 0 0 1px"
						border-style="solid"
						border-color="--color-dark"
						padding="0px 0px 0px 20px"
					>
						<Text
							margin="0 0 15px 25px"
							border-color="--color-light"
							color="--light"
							font="normal 500 40px/1.2 --fontFamily-googleShadowsIntoLight"
							text-align="left"
						>
							Phase One: Launch and Establishment
						</Text>
						<Text
							margin="0 0 0 25px"
							font="normal 400 22px/1.5 --fontFamily-sansHelvetica"
							color="--light"
							text-align="left"
							border-color="#7a7c7f"
							padding="0px 0px 50px 0px"
						>
							Official launch of the 3140 BrainyJar NFT collection on the Solana blockchain.
							<br />
							Collaborations with new and current projects to receive content and whitelist spots.
							<br />
							Release of the initial set of premium educational content accessible exclusively by NFT holders.
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="row"
					padding="0px 50px 0 0"
					lg-padding="0px 25px 0 0"
				>
					<Box
						min-width="40px"
						min-height="40px"
						background="--color-darkL1"
						display="flex"
						align-items="center"
						justify-content="center"
						width="40px"
						height="40px"
						border-radius="50%"
						margin="0px 0px 30px 0px"
						color="--darkL2"
						position="relative"
						z-index="3"
					>
						<Text margin="0px 0px 0px 0px" color="--light" font="--lead" text-align="center">
							2
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						margin="0px 0px 0px -20px"
						padding="0px 0px 0px 20px"
						border-color="--color-dark"
						border-style="solid"
						border-width="0 0 0 1px"
					>
						<Text
							margin="0 0 15px 25px"
							border-color="--color-light"
							color="--light"
							font="normal 500 40px/1.2 --fontFamily-googleShadowsIntoLight"
							text-align="left"
						>
							Phase 2: Community Growth and Engagement
						</Text>
						<Text
							margin="0 0 0 25px"
							font="normal 400 22px/1.5 --fontFamily-sansHelvetica"
							color="--light"
							text-align="left"
							border-color="#7a7c7f"
							padding="0px 0px 50px 0px"
						>
							Continue to grow the community and collaborations.
							<br />
							Raffles and Airdrops.
							<br />
							{" "}Launch of a referral program to incentivize community growth and engagement.
							<br />
							Initial Airdrop to all holders from secondary market royalty treasury.
							<br />
							Maintain treasury to use as crypto rewards in platform
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="row"
					padding="0px 50px 0 0"
					sm-padding="0px 0 0 0"
					lg-padding="0px 25px 0 0"
					md-margin="0px 0px 30px 0px"
					sm-margin="0px 0px 20px 0px"
				>
					<Box
						min-width="40px"
						min-height="40px"
						background="--color-darkL1"
						display="flex"
						align-items="center"
						justify-content="center"
						width="40px"
						height="40px"
						border-radius="50%"
						margin="0px 0px 30px 0px"
						color="--darkL2"
						position="relative"
					>
						<Text margin="0px 0px 0px 0px" color="--light" font="--lead" text-align="center">
							3
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						margin="0px 0px 0px -20px"
						padding="0px 0px 0px 20px"
						border-width="0 0 0 1px "
						border-style="solid"
						border-color="--color-dark"
					>
						<Text
							margin="0 0 15px 25px"
							border-color="--color-light"
							color="--light"
							font="normal 500 40px/1.2 --fontFamily-googleShadowsIntoLight"
							text-align="left"
						>
							Phase 3: Platform Expansion and New Features
						</Text>
						<Text
							margin="0 0 50px 25px"
							font="normal 400 22px/1.5 --fontFamily-sansHelvetica"
							color="--light"
							text-align="left"
							border-color="#7a7c7f"
						>
							Expansion of educational content to cover more topics based on community feedback.
							<br />
							Expansion of platform to allow limited access to users who do not currently hold a BrainyJar NFT.
							<br />
							Introduction of gamification elements (badges, leaderboards) to enhance learning and engagement.
							<br />
							Early access and whitelist spots for new projects and exclusive NFT drops for BrainyJar holders.
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="row"
					padding="0px 50px 30px 0"
					sm-padding="0px 0 0 0"
					lg-padding="0px 25px 0 0"
					md-margin="0px 0px 30px 0px"
					sm-margin="0px 0px 20px 0px"
				>
					<Box
						min-width="40px"
						min-height="40px"
						background="--color-darkL1"
						display="flex"
						align-items="center"
						justify-content="center"
						width="40px"
						height="40px"
						border-radius="50%"
						margin="0px 0px 30px 0px"
						color="--darkL2"
						position="relative"
					>
						<Text margin="0px 0px 0px 0px" color="--light" font="--lead" text-align="center">
							4
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						margin="0px 0px 0px -20px"
						padding="0px 0px 0px 20px"
						border-width="0 0 0 1px "
						border-color="#c8ced7"
					>
						<Text
							margin="0 0 15px 25px"
							border-color="--color-light"
							color="--light"
							font="normal 500 40px/1.2 --fontFamily-googleShadowsIntoLight"
							text-align="left"
						>
							Phase 4: Innovation and Future Projects
						</Text>
						<Text
							margin="0 0 0 25px"
							font="normal 400 22px/1.5 --fontFamily-sansHelvetica"
							color="--light"
							text-align="left"
							border-color="#7a7c7f"
						>
							Official launch of BrainyJars Second Collection.
							<br />
							Introduction of new blockchain technologies and concepts into the curriculum, keeping content at the cutting edge.
							<br />
							Exploration of AR/VR for immersive learning experiences.
							<br />
							Incorporation of collaborating projects providing crypto as rewards
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Components.Social />
		<RawHtml>
			<script place={"endOfHead"} rawKey={"65caaca2aced8fcc8306120d"} />
			<script place={"endOfHead"} rawKey={"65cbefb9de221655450c727f"}>
				{"document.addEventListener('DOMContentLoaded', function() {\ndocument.querySelector(\".whiteListButton\").addEventListener('click', function() {\n  var whiteListTextDiv = document.querySelector(\".whiteListContent\");\n  if (whiteListTextDiv) {\n    // Ensure the transition effect is applied to the div\n    whiteListTextDiv.style.transition = \"all 0.5s ease-in-out\";\n\n    // Check the current display style and toggle it\n    if (whiteListTextDiv.style.display === \"block\") {\n      whiteListTextDiv.style.height = \"0\"; // Adjust as needed for hiding\n      setTimeout(() => { whiteListTextDiv.style.display = \"none\"; }, 500); // Ensure display:none is applied after the transition\n    } else {\n      whiteListTextDiv.style.display = \"block\";\n      setTimeout(() => { whiteListTextDiv.style.height = \"100%\"; }, 0); // Delay height adjustment to allow for transition\n    }\n  }\n});\n\n// New event listener for the getWhitelist button\ndocument.querySelector(\".getWhitelist\").addEventListener('click', function() {\n  // Query for the div with the class 'section'\n  var sectionDiv = document.querySelector(\".sections\");\n  if (sectionDiv) {\n    // Set the display of the section div to block\n    sectionDiv.style.display = \"block\";\n    const sectionCompleteButton = document.querySelector(\".sectionComplete\");\n    if (sectionCompleteButton) {\n      sectionCompleteButton.disabled = true;\n    }\n  }\n});\n\n// Function to check if all modules are complete\nfunction checkAllModulesComplete() {\n  // Query all module buttons\n  const modules = document.querySelectorAll(\".module\");\n  // Check if every module has the 'complete' class\n  const allComplete = Array.from(modules).every(module => module.classList.contains(\"complete\"));\n  debugger\n  // If all modules are complete, enable the sectionComplete button\n  if (allComplete) {\nvar completedAllElement = document.querySelector(\".completedAll\");\nif (completedAllElement) {\n    completedAllElement.innerText = \"\";\n}\n\n    const sectionCompleteButton = document.querySelector(\".sectionComplete\");\n    if (sectionCompleteButton) {\n      sectionCompleteButton.disabled = false;\n    }\n  }\n}\n\n// Attach event listeners to each module button\ndocument.querySelectorAll(\".module\").forEach(moduleButton => {\n  moduleButton.addEventListener('click', function() {\n    // Set the background to light green and add 'complete' class\n    this.style.backgroundColor = \"lightgreen\";\n    this.classList.add(\"complete\");\n    \n    // Check if all modules are complete\n    checkAllModulesComplete();\n  });\n});\n});"}
			</script>
		</RawHtml>
	</Theme>;
});