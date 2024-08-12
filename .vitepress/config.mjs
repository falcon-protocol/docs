import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Falcon Protocol",
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
				text: "Bundling modes",
				items: [
					{ text: "Soft bundle", link: "/soft" },
					{ text: "Super bundle", link: "/super" },
				],
			},
			{
				text: "Merchants",
				items: [
					{ text: "Entitlement management", link: "/merchant" },
				],
			},
			{
				text: "Resellers",
				items: [
					{ text: "Purchase management", link: "/reseller" },
				],
			},
		],

	},
})
