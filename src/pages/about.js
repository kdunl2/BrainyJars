import React from "react";
import theme from "theme";
import { Theme, Text, Button, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	function toggleWhiteListContent(){
		debugger
		const whiteListTextDiv = document.querySelector(".whiteListContent");
		if (whiteListTextDiv) {
			if (whiteListTextDiv) {
			  // Ensure the transition effect is applied to the div
			  whiteListTextDiv.style.transition = "all 0.5s ease-in-out";
		  
			  // Check the current display style and toggle it
			  if (whiteListTextDiv.style.display === "block") {
				whiteListTextDiv.style.height = "0"; // Adjust as needed for hiding
				setTimeout(() => { whiteListTextDiv.style.display = "none"; }, 500); // Ensure display:none is applied after the transition
			  } else {
				whiteListTextDiv.style.display = "block";
				setTimeout(() => { whiteListTextDiv.style.height = "100%"; }, 0); // Delay height adjustment to allow for transition
			  }
			}
		}
	  };

	  function getWhitelist(){

				// Query for the div with the class 'section'
				var sectionDiv = document.querySelector(".sections");
				if (sectionDiv) {
				  // Set the display of the section div to block
				  sectionDiv.style.display = "block";
				  const sectionCompleteButton = document.querySelector(".sectionComplete");
				  if (sectionCompleteButton) {
					sectionCompleteButton.disabled = true;
				  }
				}
			  
	  }

	  		// Function to check if all modules are complete
		function checkAllModulesComplete() {
			// Query all module buttons
			const modules = document.querySelectorAll(".module");
			// Check if every module has the 'complete' class
			const allComplete = Array.from(modules).every(module => module.classList.contains("complete"));
			debugger
			// If all modules are complete, enable the sectionComplete button
			if (allComplete) {
		  var completedAllElement = document.querySelector(".completedAll");
		  if (completedAllElement) {
			  completedAllElement.innerText = "";
		  }
		  
			  const sectionCompleteButton = document.querySelector(".sectionComplete");
			  if (sectionCompleteButton) {
				sectionCompleteButton.disabled = false;
			  }
			}
		  }

		  function moduleClick(){
			// Set the background to light green and add 'complete' class
			this.style.backgroundColor = "lightgreen";
			this.classList.add("complete");
			// Check if all modules are complete
			checkAllModulesComplete();
		  }
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"about"} />
		<Helmet>
			<title>
				About | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"About | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Head2>
			<Override slot="button" font="normal 400 0px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" />
		</Components.Head2>
		<Section background="url(https://uploads.quarkly.io/65c28f65009abe001f02fdd6/images/output-onlinepngtools%20%284%29.png?v=2024-02-07T20:27:57.901Z) 0% 0%/auto repeat,#f71414" height="600px">
			<Override slot="SectionContent" display="flex" flex-direction="row-reverse" />
			<Section background="rgba(249, 137, 137, 0.77)" className="sections" transition="all .5s ease-in-out 0s" display="none">
				<Override slot="SectionContent" align-items="center" />
				<Text
					margin="0px 0px 0px 0px"
					font="60px --fontFamily-googleBebasNeue"
					text-align="center"
					border-color="--color-light"
					color="--light"
				>
					Sections
				</Text>
				<Components.QuarklycommunityKitPopup>
					<Override slot="Content" width="100%" />
					<Override slot="Wrapper" width="25%" />
					<Override
						slot="Button Open"
						background="--color-lightD2"
						color="--dark"
						font="normal 500 20px/1.5 --fontFamily-googleOswald"
						border-radius="15px"
						type="button"
						className="module"
					>
						What are BrainyJar NFT's
					</Override>
					<Text margin="0px 0px 0px 0px" font="80px --fontFamily-googleBungeeShade" color="--red" text-align="center">
						4134 NFTs
					</Text>
					<Text margin="10px 10px 10px 10px" font="20px --fontFamily-googleOswald">
						Collection of 4134 NFT's minting on the Solona Ecosytstem. Each NFT will act as a key to our KnowledgeNFT Platform as well as generate crypto rewards for holders.
					</Text>
				</Components.QuarklycommunityKitPopup>
				<Components.QuarklycommunityKitPopup margin="10px 0px 0px 0px">
					<Override slot="Content" width="100%" />
					<Override slot="Wrapper" width="25%" />
					<Override
						slot="Button Open"
						background="--color-lightD2"
						color="--dark"
						font="normal 500 20px/1.5 --fontFamily-googleOswald"
						border-radius="15px"
						type="button"
						className="module"
					>
						What is the Knowledge Jar
					</Override>
					<Text margin="0px 0px 0px 0px" font="80px --fontFamily-googleBungeeShade" color="--red" text-align="center">
						4134 NFTs
					</Text>
					<Text margin="10px 10px 10px 10px" font="20px --fontFamily-googleOswald">
						Collection of 4134 NFT's minting on the Solona Ecosytstem. Each NFT will act as a key to our KnowledgeNFT Platform as well as generate crypto rewards for holders.
					</Text>
				</Components.QuarklycommunityKitPopup>
				<Components.QuarklycommunityKitPopup margin="10px 0px 0px 0px">
					<Override slot="Content" width="100%" />
					<Override slot="Wrapper" width="25%" />
					<Override
						slot="Button Open"
						background="--color-lightD2"
						color="--dark"
						font="normal 500 20px/1.5 --fontFamily-googleOswald"
						border-radius="15px"
						type="button"
						className="module"
					>
						Benefits & Rewards
					</Override>
					<Text margin="0px 0px 0px 0px" font="80px --fontFamily-googleBungeeShade" color="--red" text-align="center">
						4134 NFTs
					</Text>
					<Text margin="10px 10px 10px 10px" font="20px --fontFamily-googleOswald">
						Collection of 4134 NFT's minting on the Solona Ecosytstem. Each NFT will act as a key to our KnowledgeNFT Platform as well as generate crypto rewards for holders.
					</Text>
				</Components.QuarklycommunityKitPopup>
				<Components.QuarklycommunityKitPopup margin="10px 0px 0px 0px">
					<Override slot="Content" width="100%" />
					<Override slot="Wrapper" width="25%" />
					<Override
						slot="Button Open"
						background="--color-lightD2"
						color="--dark"
						font="normal 500 20px/1.5 --fontFamily-googleOswald"
						border-radius="15px"
						type="button"
						className="module"
					>
						Mint Info
					</Override>
					<Text margin="0px 0px 0px 0px" font="80px --fontFamily-googleBungeeShade" color="--red" text-align="center">
						4134 NFTs
					</Text>
					<Text margin="10px 10px 10px 10px" font="20px --fontFamily-googleOswald">
						Collection of 4134 NFT's minting on the Solona Ecosytstem. Each NFT will act as a key to our KnowledgeNFT Platform as well as generate crypto rewards for holders.
					</Text>
				</Components.QuarklycommunityKitPopup>
				<Components.QuarklycommunityKitPopup margin="10px 0px 0px 0px">
					<Override slot="Content" width="100%" />
					<Override slot="Wrapper" width="25%" />
					<Override
						slot="Button Open"
						background="--color-lightD2"
						color="--dark"
						font="normal 500 20px/1.5 --fontFamily-googleOswald"
						border-radius="15px"
						type="button"
						className="module"
					>
						Socials
					</Override>
					<Text margin="0px 0px 0px 0px" font="80px --fontFamily-googleBungeeShade" color="--red" text-align="center">
						4134 NFTs
					</Text>
					<Text margin="10px 10px 10px 10px" font="20px --fontFamily-googleOswald">
						Collection of 4134 NFT's minting on the Solona Ecosytstem. Each NFT will act as a key to our KnowledgeNFT Platform as well as generate crypto rewards for holders.
					</Text>
				</Components.QuarklycommunityKitPopup>
				<Components.QuarklycommunityKitPopup margin="10px 0px 0px 0px">
					<Override slot="Content" width="100%" text-align="center" />
					<Override slot="Wrapper" width="75%" />
					<Override
						slot="Button Open"
						background="--color-lightD2"
						color="--dark"
						font="normal 500 20px/1.5 --fontFamily-googleOswald"
						border-radius="15px"
						type="button"
						className="sectionComplete"
						disabled={false}
					>
						Complete
					</Override>
					<Text margin="0px 0px 0px 0px" font="65px --fontFamily-googleBungeeShade" color="--red" text-align="center">
						Welcome To The Whitelist!
					</Text>
					<Components.QuarklycommunityKitInput
						placeholder="Enter your Discord handle"
						width="75%"
						text-align="center"
						margin="10px 0px 10px 0px"
						border-width="1px"
						border-style="solid"
					>
						<Override slot="Input" text-align="center" />
					</Components.QuarklycommunityKitInput>
					<Button
						background="--color-red"
						color="--lightD2"
						border-radius="15px"
						margin="0px 0px 0px 5px"
						font="normal 400 18px/1.5 --fontFamily-googleOswald"
					>
						Submit
					</Button>
				</Components.QuarklycommunityKitPopup>
				<Text margin="0px 0px 0px 0px" color="--lightD2" className="completedAll">
					Please complete each section first.
				</Text>
			</Section>
			<Section>
				<Text
					margin="0px 0px 0px 0px"
					font="60px --fontFamily-googleBebasNeue"
					text-align="center"
					border-color="--color-light"
					color="--light"
				>
					Modules
				</Text>
				<Section>
					<Override slot="SectionContent" />
					<Button
						type="button"
						className="whiteListButton"
						background="--color-lightD1"
						color="--dark"
						font="normal 500 22px/1.5 --fontFamily-googleOswald"
						border-radius="15px"
						onClick={toggleWhiteListContent}
					>
						BrainyJars NFT{" "}
					</Button>
					<Box
						min-width="100px"
						min-height="0px"
						text-align="center"
						className="whiteListContent"
						height="0px"
						overflow-x="hidden"
						overflow-y="hidden"
						transition="all .5s ease-in-out 0s"
						display="none"
					>
						<Text
							margin="0px 0px 0px 15%"
							background="#b8b8b8"
							padding="20px 20px 20px 20px"
							border-radius="15px"
							font="17px --fontFamily-googleJosefinSans"
							width="70%"
							display="block"
							border-width="1px"
							border-style="solid"
							height="fit-content"
							className="whiteListText"
						>
							Complete this Module to earn a whitelist spot to our upcoming NFT mint! (First 100 to complete and submit their Discord handle will be added to the whitelist when our server doors open!
						</Text>
						<Box min-width="100px" min-height="100px" text-align="center">
							<Button
								margin="2px 0px 0px 0"
								background="--color-lightD1"
								color="--green"
								font="normal 500 19px/1.5 --fontFamily-googleOswald"
								className="getWhitelist"
								onClick={getWhitelist}
							>
								Get Whitlisted
							</Button>
						</Box>
					</Box>
				</Section>
			</Section>
		</Section>
		<Components.Social>
			<Override slot="socialMedia" sm-align-items="flex-start" sm-margin="0px 0px 0px 0" />
		</Components.Social>

	</Theme>;
});