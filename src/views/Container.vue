<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home/card">卡片视图</router-link>
      <router-link to="/home/list">列表视图</router-link>
    </div>
    <router-link to="/welcome">列表视图</router-link>
    <router-view />
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
