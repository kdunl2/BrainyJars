export default {
	"pages": {
		"root": {
			"name": "root",
			"children": [
				"65c28f65009abe001f02fdef",
				"65c28f65009abe001f02fdf3",
				"65c2c25e1d712a00232fb3d5",
				"65c28f65009abe001f02fdf7"
			],
			"id": "root",
			"pageUrl": "root"
		},
		"65c28f65009abe001f02fdef": {
			"id": "65c28f65009abe001f02fdef",
			"name": "404",
			"pageUrl": "404"
		},
		"65c28f65009abe001f02fdf3": {
			"id": "65c28f65009abe001f02fdf3",
			"name": "index",
			"pageUrl": "index",
			"seo": {
				"og:description": "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
				"title": "Home | Website Example",
				"og:title": "Home | Website Example",
				"og:image": "https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z",
				"description": "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."
			}
		},
		"65c28f65009abe001f02fdf7": {
			"id": "65c28f65009abe001f02fdf7",
			"pageUrl": "about",
			"name": "Whitelist",
			"seo": {
				"og:title": "About | Website Example",
				"og:description": "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
				"description": "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
				"og:image": "https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z",
				"title": "About | Website Example"
			},
			"customCode": {
				"65cabcb502d7b4b3c0c01dae": {
					"name": "script",
					"place": "endOfHead",
					"tag": "script",
					"data": {
						"content": "document.addEventListener('DOMContentLoaded', function() {\ndocument.querySelector(\".whiteListButton\").addEventListener('click', function() {\n  var whiteListTextDiv = document.querySelector(\".whiteListContent\");\n  if (whiteListTextDiv) {\n    // Ensure the transition effect is applied to the div\n    whiteListTextDiv.style.transition = \"all 0.5s ease-in-out\";\n\n    // Check the current display style and toggle it\n    if (whiteListTextDiv.style.display === \"block\") {\n      whiteListTextDiv.style.height = \"0\"; // Adjust as needed for hiding\n      setTimeout(() => { whiteListTextDiv.style.display = \"none\"; }, 500); // Ensure display:none is applied after the transition\n    } else {\n      whiteListTextDiv.style.display = \"block\";\n      setTimeout(() => { whiteListTextDiv.style.height = \"100%\"; }, 0); // Delay height adjustment to allow for transition\n    }\n  }\n});\n\n// New event listener for the getWhitelist button\ndocument.querySelector(\".getWhitelist\").addEventListener('click', function() {\n  // Query for the div with the class 'section'\n  var sectionDiv = document.querySelector(\".sections\");\n  if (sectionDiv) {\n    // Set the display of the section div to block\n    sectionDiv.style.display = \"block\";\n    const sectionCompleteButton = document.querySelector(\".sectionComplete\");\n    if (sectionCompleteButton) {\n      sectionCompleteButton.disabled = true;\n    }\n  }\n});\n\n// Function to check if all modules are complete\nfunction checkAllModulesComplete() {\n  // Query all module buttons\n  const modules = document.querySelectorAll(\".module\");\n  // Check if every module has the 'complete' class\n  const allComplete = Array.from(modules).every(module => module.classList.contains(\"complete\"));\n  debugger\n  // If all modules are complete, enable the sectionComplete button\n  if (allComplete) {\nvar completedAllElement = document.querySelector(\".completedAll\");\nif (completedAllElement) {\n    completedAllElement.innerText = \"\";\n}\n\n    const sectionCompleteButton = document.querySelector(\".sectionComplete\");\n    if (sectionCompleteButton) {\n      sectionCompleteButton.disabled = false;\n    }\n  }\n}\n\n// Attach event listeners to each module button\ndocument.querySelectorAll(\".module\").forEach(moduleButton => {\n  moduleButton.addEventListener('click', function() {\n    // Set the background to light green and add 'complete' class\n    this.style.backgroundColor = \"lightgreen\";\n    this.classList.add(\"complete\");\n    \n    // Check if all modules are complete\n    checkAllModulesComplete();\n  });\n});\n});"
					}
				}
			}
		},
		"65c2c25e1d712a00232fb3d5": {
			"id": "65c2c25e1d712a00232fb3d5",
			"pageUrl": "main",
			"name": "BrainyJarsNFT"
		}
	},
	"mode": "production",
	"projectType": "create-react-app",
	"site": {
		"styles": {},
		"seo": {}
	}
}