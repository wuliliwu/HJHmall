<template>
  <div id="home">
    <nav-bar class="home-title">
      <div slot="center" >购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>



  </div>
</template>

<script>
  // 导入组件
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "views/home/childComps/HomeSwiper";

  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",

    components: {
      NavBar,
      HomeSwiper
    },

    // 用来存放数据或者请求回来的数据
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      // 请求多个数据
      getHomeMultidata().then(res => {
        // console.log(res)
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;

      }, err => {
        // console.log(err)
      })

    }
  }
</script>

<style scoped>
  .home-title {
    font-size: 20px;
    background-color: var(--color-tint);

  }
</style>
