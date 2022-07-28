<template>
    <div>
        <el-button 
        @click="handleClick" 
        :icon="icon" 
        :type="type" 
        v-bind="$attrs">
            <slot />
        </el-button>
    </div>
</template>
<script lang="ts">
export default {
    name: "TButton"
}
</script>
<script lang="ts" setup>
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { DefineComponent, ref, shallowRef, useAttrs } from 'vue';
type Iicon = keyof typeof ElementPlusIconsVue
interface ButtonProps {
    type?: "primary" | "success" | "warning" | "danger" | "info",
    iconName?: Iicon,
};

const { type, iconName } = withDefaults(defineProps<ButtonProps>(), {
    type: 'primary',
});

let icon = shallowRef<DefineComponent | string | any>('')
if (iconName) {
    icon.value = ElementPlusIconsVue[iconName] || '';
}

let emit = defineEmits<{
    (e: 'click', event: HTMLButtonElement): void
}>()
const handleClick = (e: HTMLButtonElement) => {
    emit("click", e)
}
</script>