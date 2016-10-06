<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a-child></a-child>
  </div>
</template>

<script>
import aChild from './a1'
export default {
  compiled () {
    console.log('compiled-a')
  },
  ready () {
    console.log('ready-a')
  },
  attached () {
    console.log('attached-a')
  },
  data () {
    return {
      msg: '我是a组件'
    }
  },
  components: {
    aChild
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
