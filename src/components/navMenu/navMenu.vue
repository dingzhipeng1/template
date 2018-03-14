<template>
  <div style="height: 100%;">
    <div class="systemName">
      <b style="">XXXXXXXXX系统或者平台</b>
      <span class="logout" @click="logout">
        退出
      </span>
    </div>
    <el-menu router default-active="1-4-1" class="el-menu-vertical-demo" style="height: 100%" @open="handleOpen"
             @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="/tab1">选项1</el-menu-item>
          <el-menu-item index="/tab2">选项2</el-menu-item>
        </el-menu-item-group>

      </el-submenu>


    </el-menu>


  </div>

</template>
<style scoped>
  .logout {
    line-height: 80px;
    margin-right: 20px;
    float: right;
    cursor: pointer;
  }

  .systemName {
    line-height: 79px;
    padding-left: 20px;
    border-bottom: solid 1px #e6e6e6;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    position: fixed;
    top: 80px;
    left: 0px;

  }
</style>
<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      logout() {
        this.$store.commit('setlognameobj', "")
        this.$message.success("登出成功")
        this.$router.push("/")

      }
    }
  }
</script>

