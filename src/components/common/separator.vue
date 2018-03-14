<template>
  <div style="padding: 20px 0">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item,index) in lists" :to="item.to">{{item.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <slot></slot>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        lists: this.list
      }
    },
    props: {
      list: {
        type: Array,
        default: function () {
          return [{title, to}];
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
