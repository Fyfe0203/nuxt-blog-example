<!--
 * @Author: freeser freeser@126.com
 * @Date: 2023-11-17 11:12:37
 * @LastEditors: freeser freeser@126.com
 * @LastEditTime: 2023-11-17 11:42:16
 * @Description:
 * @FilePath: /nuxt3-ai-aide/components/Md/Inputs.vue
-->
<template>
    <div class="pl-6">
        <div ref="el" class="hidden"><slot></slot></div>
        <MdProperty v-for="(i, index) in list" :key="index" :name="i.variable" :type="i.type" class="!border-0 !py-0">
            {{ i.label }}
        </MdProperty>
    </div>
</template>

<script lang="ts" setup>
    const el = ref();
    const list = ref([]);
    onMounted(() => {
        const res = getJsonFromStr(el.value.textContent || '[]');
        list.value = res || [];
    });
</script>
