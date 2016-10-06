<template>
  <div>
    <a v-link="{path:'/a',activeClass: 'active'}">A组件</a>
    <a v-link="{path:'/b',activeClass: 'active'}">B组件</a>
    <router-view></router-view>
  </div>
</template>

<script>
// import Hello from './components/Hello'
// import Index from './components/index'

export default {
  components: {
    // Hello
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

a {
  color: #42b983;
  text-decoration: none;
}
a.active{
  color: red;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
