import type { info } from 'console'; import type { info } from 'console'; import type { info } from 'console';
<!--
 * @Author: freeser freeser@126.com
 * @Date: 2023-11-15 18:07:00
 * @LastEditors: freeser freeser@126.com
 * @LastEditTime: 2023-11-17 10:26:05
 * @Description:
 * @FilePath: /nuxt3-ai-aide/components/content/ProseCode.vue
-->
<template>
    <div ref="ele" class="group pre-outer overflow-hidden">
        <div v-if="info">
            <div
                v-if="info.header"
                class="bg-[rgb(39,39,42)] px-5 py-4 text-xs font-semibold text-white border-b border-[rgb(63,63,70)]"
            >
                {{ info.header }}
            </div>
            <div v-if="info.url" class="flex-center-x gap-1 px-5 py-2 border-b border-[#60606d]">
                <div class="font-mono text-[0.625rem] font-semibold leading-6 uppercase" :class="tagClass">
                    {{ info.method }}
                </div>
                <span class="h-0.5 w-0.5 rounded-full bg-zinc-500"></span>
                <div class="font-mono text-xs text-zinc-400">{{ info.url }}</div>
            </div>
        </div>
        <div class="relative">
            <slot />
            <button
                class="flex-center absolute top-2 right-2 overflow-hidden rounded-full pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 bg-white/40 hover:bg-white/75"
                @click="copy(code)"
            >
                <span
                    class="pointer-events-none absolute inset-0 flex-center text-green-600 transition duration-300"
                    :class="{ 'translate-y-[150%] opacity-0': !copied }"
                >
                    Copied
                </span>
                <span
                    class="pointer-events-none flex-center gap-1 transition duration-300"
                    :class="{ 'translate-y-[-150%] opacity-0': copied }"
                >
                    <nuxt-icon name="task/copy"></nuxt-icon>
                    Copy
                </span>
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const ele = ref();
    const info = ref();
    const { copy, copied } = useClipboard();

    const colorStyles = {
        emerald: {
            small: 'text-emerald-500 dark:text-emerald-400',
        },
        sky: {
            small: 'text-sky-500',
        },
        amber: {
            small: 'text-amber-500',
        },
        rose: {
            small: 'text-red-500 dark:text-rose-500',
        },
        zinc: {
            small: 'text-zinc-400 dark:text-zinc-500',
        },
    } as { [key: string]: { [key: string]: string } };

    const valueColorMap = {
        get: 'emerald',
        post: 'sky',
        put: 'amber',
        delete: 'rose',
    } as { [key: string]: string };

    const tagClass = computed(() => colorStyles[valueColorMap[info.value.method?.toLowerCase()] ?? 'emerald']?.small);
    const code = () => ele.value.getAttribute('code');

    onMounted(() => {
        const filename = ele.value.getAttribute('filename');
        const res = getJsonFromStr(filename);
        if (res) {
            info.value = res;
        }
    });
</script>
