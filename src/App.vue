<template>
  <div id="app">
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
// export default {
//   data () {
//     return {
//       msg: 'Hello Vue!'
//     }
//   }
// }

export default {
 components:{Hello}
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
