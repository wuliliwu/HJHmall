<template>
    <tab-bar>
      <tab-bar-item path="/home" >
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home1.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" >
        <img slot="item-icon" src="~assets/img/tabbar/grid.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/grid1.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/gouwuche.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/gouwuche1.svg" alt="">
        <div slot="item-text">购物车 </div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/gerenzhongxin.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/gerenzhongxin1.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>

    </tab-bar>
</template>

<script>

  // 使用其他组件的时候需要导入
  import TabBar from "components/common/tabber/TabBar";
  import TabBarItem from "components/common/tabber/TabBarItem";


  export default {
      name: "MainTabBar",
      components: {
        TabBar,
        TabBarItem
      }
    }
</script>

<style scoped>

</style>
