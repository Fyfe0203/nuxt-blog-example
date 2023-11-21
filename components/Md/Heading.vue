<!--
 * @Author: freeser freeser@126.com
 * @Date: 2023-11-15 16:53:20
 * @LastEditors: freeser freeser@126.com
 * @LastEditTime: 2023-11-16 14:25:27
 * @Description:
 * @FilePath: /nuxt3-ai-aide/components/Md/Heading.vue
-->
<template>
    <div>
        <div class="flex-center-x gap-3">
            <div
                class="uppercase font-mono text-[0.625rem] font-semibold leading-6 rounded-lg px-1.5 ring-1 ring-inset"
                :class="className"
            >
                {{ method }}
            </div>
            <div class="font-mono text-xs text-zinc-400">{{ url }}</div>
        </div>
        <h2 class="!mt-2">{{ title }}</h2>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        method: {
            type: String,
            default: 'post',
        },
        url: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
    });
    const className = computed(() => {
        switch (props.method.toUpperCase()) {
            case 'PUT':
                return 'ring-amber-300 bg-amber-400/10 text-amber-500 dark:ring-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400';
            case 'DELETE':
                return 'ring-rose-200 bg-rose-50 text-red-500 dark:ring-rose-500/20 dark:bg-rose-400/10 dark:text-rose-400';
            case 'POST':
                return 'ring-sky-300 bg-sky-400/10 text-sky-500 dark:ring-sky-400/30 dark:bg-sky-400/10 dark:text-sky-400';
            default:
                return 'ring-emerald-300 dark:ring-emerald-400/30 bg-emerald-400/10 text-emerald-500 dark:text-emerald-400';
        }
    });
</script>
