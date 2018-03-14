<template>
  <div>
    <separator :list="list"></separator>

    <div class="content">

      这里是内容 随便什么内容
    </div>
  </div>
</template>
<script>
  import separator from '../common/separator.vue'

  export default {
    data() {
      return {list: [{title: '导航一', to: '/'}, {title: '分组一', to: '/index'}, {title: '选项一', to: '/index'}]}
    },
    components: {
      separator: separator
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
