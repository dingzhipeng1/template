<template>
  <div>
    <navMenu></navMenu>
    <div class="Navmenu_warp">
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped>
  .Navmenu_warp {
    position: absolute;
    width: calc(100% - 220px);
    top: 100px;
    left: 220px;
  }
</style>
<script>
  import menu from '../navMenu/navMenu.vue'
  export default {
    components: {
      navMenu: menu
    }
  }
</script>

