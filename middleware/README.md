<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-28 10:48:33
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-08-08 17:57:54
 * @Description:
 * @FilePath: /nuxt3-ai-aide/middleware/README.md
-->

always-run.global.ts

命名中带有global的即为全局中间件，不用引用

```js
import { useAppStore } from '@/stores/app';

export default defineNuxtRouteMiddleware((to) => {
    const store = useAppStore();
    const isAuthenticated = store.authorization;
    if (to.path !== store.loginUrl && !isAuthenticated) {
        return store.loginUrl;
    }
});
```
