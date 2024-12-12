import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Falcon Perks Documentation",
	 base: '/',
	description: "Documentation on the Falcon Perks Platform",
	themeConfig: {
		nav: [
			{ text: "Home", link: "https://falconlabs.us" },
		],
		sidebar: [
			{
				text: "Getting started", link: "/getting-started/over-view",
				items: [
					{ text: "Overview", link: "/getting-started/over-view" },
					{ text: "Entities", link: "/getting-started/entities" },
				],
			},
			{
				text: "Integration Guides", link: "/integration-guide/overview",
				items: [
					{ text: "Overview", link: "/integration-guide/overview" },
					{ text: "iOS", link: "/integration-guide/ios/integration",
						items: [	
							{ text: "Integration", link: "/integration-guide/ios/integration" },
							{ text: "Manual SDK Integration", link: "/integration-guide/ios/manual" },
						],
					},
					{ text: "Android", link: "/integration-guide/android" },
					{ text: "Web", link: "/integration-guide/web" },
					{ text: "Flutter", link: "/integration-guide/flutter" },
				],
			},
		],
	},
})
