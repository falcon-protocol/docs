import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Falcon Protocol",
	 base: '/',
	description: "Documentation on the Falcon Protocol",
	head: [
		['meta', { name: 'impact-site-verification', content: 'c3083702-1e01-4586-87c7-274cc129b3ef' }]
	],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "https://falconprotocol.com" },
			{ text: "Merchants", link: "/merchant" },
			{ text: "Bundle Publisher", link: "/publisher" },
		],

		sidebar: [
			{
				text: "Getting started", link: "/getting-started/over-view",
				items: [
					{ text: "Overview", link: "/getting-started/over-view" },
					{ text: "Entities", link: "/getting-started/entities" },
					{ text: "Architecture & lifecycle", link: "/getting-started/architecture" },
					{ text: "Terminology", link: "/getting-started/terminology" },
				],
			},
			{
				text: "Bundling modes", link: "/bundle-modes",
				items: [
					{ text: "Super vs. Soft", link: "/bundle-modes" },
					{ text: "Bundle types", link: "/bundle-types" },
				],
			},
			{
				text: "Merchants",
				items: [
					{ text: "Overview", link: "/merchant" },
				],
			},
			{
				text: "Bundle Publisher",
				items: [
					{ text: "Overview", link: "/publisher" },
				],
			},
			{
				text: "Integration Guides",
				items: [
					{ text: "Overview", link: "/integration-guide/overview" },
					{ text: "iOS", link: "/integration-guide/ios" },
					{ text: "Android", link: "/integration-guide/android" },
					{ text: "Falcon web2app", link: "/integration-guide/falcon" },
				],
			},
		],

	},
})
