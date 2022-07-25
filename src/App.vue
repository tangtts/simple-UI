<template>
  <div>
    <t-button 
    @click="dd"
    color="#626aef"
    iconName="Edit"
    >daa</t-button>
  </div>
</template>
<script lang="ts" setup>
import tButton from "components/button/index.vue"
const dd= (e:HTMLButtonElement)=>{
  console.log(e)
}
</script>

<style lang="scss">
html,
body,
#app {
  height: 100vh;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.darkBg {
  @apply dark:bg-slate-900 dark:text-white;
}
</style>
