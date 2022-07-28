<template>
  <div class="darkBg bg-red-200 text-gray-900">
    <t-button 
    @click="dd"
    iconName="Edit"
    >daa</t-button>
  </div>
</template>
<script lang="ts" setup>
import tButton from "../packages/button/src/index.vue"
import tMeesage from "../packages/Message/index"
const dd= (e:HTMLButtonElement)=>{
  // console.log(tButton.name)
  tMeesage({
    center:false,
    type:"primary"
  })
}
</script>

<style lang="scss">
html,
body,


.darkBg {
  @apply dark:bg-slate-900 dark:text-white;
}
</style>
