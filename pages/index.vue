<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2022-06-11 10:26:17
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-11-22 10:28:03
 * @Description:
 * @FilePath: /nuxt-blog-example/pages/index.vue
-->
<template>
	<div class="grid h-screen place-content-center gap-3">
		<h1 class="text-5xl text-blue-500">Welcome to Nuxt Content</h1>
		<p class="text-xl text-red-600">
			Visit
			<a href="https://content.nuxtjs.org/">content.nuxtjs.org</a>
			to read the documentation
		</p>
		<div class="flex gap-3 justify-center">
			<nuxt-link
				href="/blog"
				class="mx-auto rounded-xl bg-amber-700 px-20 py-4 text-white"
			>
				Go to Blog
			</nuxt-link>
			<nuxt-link
				href="/test"
				class="mx-auto rounded-xl bg-amber-700 px-20 py-4 text-white"
			>
				Go to test
			</nuxt-link>
			<nuxt-link
				href="/test2"
				class="mx-auto rounded-xl bg-amber-700 px-20 py-4 text-white"
			>
				Go to test2
			</nuxt-link>
		</div>
	</div>
</template>
