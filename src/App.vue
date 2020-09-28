<template>
  <div id="app" class="wrapper">
      <keep-alive exclude="Detail">
          <router-view></router-view>
      </keep-alive>

<!--      <router-view></router-view>-->
      <main-tab-bar></main-tab-bar>

  </div>
</template>
<script>
  import MainTabBar from "components/content/maintabbar/MainTabBar";

  export default {
    name: 'app',
    components: {
      MainTabBar,
    }
  }
</script>

<style>  /*导入需要初始化的css样式，两个/base/normaliza*/
@import "assets/css/base.css";
@import "assets/css/normalize.css";


</style>
