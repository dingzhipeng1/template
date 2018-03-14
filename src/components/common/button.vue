<template>
  <div>
    <el-button @click="alert()" type="primary">操作</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: ['propsdata'],
    methods: {
      alert: function () {
        alert(JSON.stringify(this.propsdata))
      }

    }
  }
</script>


