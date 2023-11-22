/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-25 13:27:31
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-11-22 10:17:44
 * @Description:
 * @FilePath: /nuxt-blog-example/middleware/auth.global.ts
 */

export default defineNuxtRouteMiddleware((to) => {
	console.log('to', to.fullPath);
});

// export default defineNuxtRouteMiddleware(() => {});
