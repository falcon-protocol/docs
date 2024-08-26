import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Falcon Protocol",
	 base: '/',
	description: "Documentation on the Falcon Protocol",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Merchants", link: "/merchant" },
			{ text: "Resellers", link: "/reseller" },
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
		],

	},
})
