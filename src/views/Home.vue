<!--
 * @Author: your name
 * @Date: 2020-06-11 10:00:01
 * @LastEditTime: 2020-06-11 10:08:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue模板\test\src\views\Home.vue
--> 
<template>
  <div class="main">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
