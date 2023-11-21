<!--
 * @Author: freeser freeser@126.com
 * @Date: 2023-11-15 16:53:20
 * @LastEditors: freeser freeser@126.com
 * @LastEditTime: 2023-11-16 15:05:42
 * @Description:
 * @FilePath: /nuxt3-ai-aide/components/Md/Property.vue
-->
<template>
    <div class="px-0 py-3 my-3 mx-0 first:pt-0 border-b :border-[rgba(24,24,27,.05)] last:border-b-0">
        <dl class="flex flex-wrap items-center m-0 gap-x-3 gap-y-2">
            <dd class="p-0 m-0">
                <code class="inline-code">{{ name }}</code>
            </dd>
            <dd class="font-mono text-xs text-zinc-400 dark:text-zinc-500 p-0 m-0">{{ type }}</dd>
            <dd class="w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0 p-0 m-0"><slot /></dd>
        </dl>
    </div>
</template>

<script lang="ts" setup>
    defineProps({
        name: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: '',
        },
    });
</script>
