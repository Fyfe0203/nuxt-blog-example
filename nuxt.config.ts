/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2022-06-11 10:26:17
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-11-21 19:00:35
 * @Description:
 * @FilePath: /nuxt-blog-example/nuxt.config.ts
 */
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	ssr: true,
	modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config',
		injectPosition: 'last',
		viewer: true,
		exposeConfig: true,
	},
	nitro: {
		prerender: {
			routes: ['/blog/foo-bar', '/blog/hello-world'],
		},
	},

	content: {
		highlight: {
			theme: 'github-dark',
			preload: ['javascript', 'bash', 'json'],
		},
		experimental: {
			clientDB: true,
			stripQueryParameters: false,
			advanceQuery: false,
		},
	},
	// routeRules: {
	// 	'/blog/**': { ssr: true },
	// },
});
