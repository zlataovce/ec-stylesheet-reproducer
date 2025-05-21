// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Starlight",
			sidebar: [
				{ label: "With code block", link: "/reproducer/working" },
				{ label: "Without code block", link: "/reproducer/not-working" },
			],
			expressiveCode: {
				emitExternalStylesheet: false,
			},
		}),
	],
});
