<template>
  <transition  
  @after-leave="$emit('destroy')"
  @before-leave="onClose">
    <div class="message" 
    v-show="visiable"
    :style="styles" 
    :class="classes">
      mdesag
    </div>
  </transition>
</template>
<script lang="ts" setup>
import type { Itype } from "./type"
const props = withDefaults(defineProps<{
  id?: string,
  message: string,
  center: boolean,
  onClose: Function,
  duration: number,
  type: Itype,
  offset: number
}>(), {
  message: '',
  center: true,
  duration: 3000,
  type: "info",
  offset: 20
});
const visiable = ref(false)
let timer: NodeJS.Timer | null = null;
let emit = defineEmits(['destroy'])
onMounted(() => {
  visiable.value = true;
  timer = setTimeout(() => {
    visiable.value = false
  }, props.duration)
})
onUnmounted(() => {
  clearTimeout(timer!)
})
const classes = computed(() => [
  props.type,
  props.center && 'is-center'
]);
const styles  = computed(()=>({
  top:`${ props.offset }px`
}));

props.center
</script>
<style lang="scss" scoped>
.v-enter-from,
.v-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}


.v-enter-active,
.v-leave-active {
  transition: all .5s ease
}

.message {
  @apply fixed rounded-md m-auto;
 
  & {
    width: 200px;
    height: 40px;
    line-height: 40px;
    left:calc(50% - 100px);
    transition: all 1.5s ease;
  //  transform: translateX(-50%);
  }
}

.is-center {
  @apply text-center
}

.primary {
  @apply text-green-900 bg-green-300
}

;

.warning {
  @apply text-red-900 bg-red-300
}

.info {
  @apply text-pink-900 bg-pink-300
}
</style>