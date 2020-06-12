<!--
 * @Author: your name
 * @Date: 2020-06-11 10:00:01
 * @LastEditTime: 2020-06-11 10:08:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue模板\test\src\App.vue
--> 
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
