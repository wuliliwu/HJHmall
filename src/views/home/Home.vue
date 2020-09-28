<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center" >购物街</div>
    </nav-bar>
    <tab-control class="tab-control fixed"
                 :titles="['流行','新款','精选']"
                 ref="tabControl1"
                 v-show="isTabFixed"
                 @tabClick="tabClick"></tab-control>

    <scroll class="content"
            ref="scroll"
            @scroll="contentScroll"
            @pullingUp="loadMore"
            :data="showGoodsList"
            :pull-up-load="true"
            :probe-type="3">
      <home-swiper :banners="banners"
                   ref="hSwiper"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']"
                   ref="tabControl2"
                   @tabClick="tabClick"></tab-control>
      <!-- 这里注意子组件向父组件传递数据，函数方法默认带上参数，不需要写tabClick（index）-->
      <goods-list :goods="showGooods"></goods-list>
    </scroll>

    <back-top @backTop="backTop" class="back-top" v-show="showBackTop"></back-top>


  </div>
</template>

<script>
  // 导入组件
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "views/home/childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";
  import TabControl from "components/content/tabcontrol/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backtop/BackTop";
  // 导入函数
  import {getHomeMultidata} from "network/home";
  import {getHomeGoods} from "network/home";

  // 滚动组件

  import {BACKTOP_DISTANCE} from "../../common/common/const";

  export default {
    name: "Home",

    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },

    // 用来存放数据或者请求回来的数据
    data() {
      return {
        banners: [],
        recommends: [],
          // 首页的商品数据
        goods: {
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}

        },

        isTabFixed: false,
        tabOffsetTop: 0,
        showBackTop: false,
        // 类型
        currentType: 'pop',
        currentPage: 1,
        // 保存离开前的y值
        saveY: 0
      }
    },
    // --------------------------------------------
    computed: {
      showGooods() {
        return this.goods[this.currentType].list
      },
      showGoodsList() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      // 请求轮播图和推荐相关数据
      this.getHomeMultidata()

      // 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')


      },

    // ----------------------------------------
    mounted() {
      // 监听item图片是否加载完成
      const refresh = this.debounce(this.$refs.scroll.refresh,10000)
      this.$bus.$on('itemImageLoad',() => {
        // console.log('---------')
        // this.$refs.scroll.refresh()
        refresh()
      })
    },
    // 生命周期函数
    // activated() {
    //   console.log(111111)
    //   this.$refs.scroll.scrollTo(0,-1000,0)
    // },
    // deactivated() {
    //   this.saveY = -1000
    // },
    // activated: function () {
    //   // this.$refs.hSwiper.startTimer()
    // },
    // deactivated: function () {
    //   // this.$refs.hSwiper.stopTimer()
    // },


    // ---------------------------------------------------
    updated() {
      // 所有的组件都有一个属性$el用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      // console.log(this.tabOffsetTop);
    },

    //------------------------------------------------
    methods: {
      // 网络请求的相关方法
      getHomeMultidata(){

        // 请求多个数据
        getHomeMultidata().then(res => {
            // console.log(res)
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
            this.$nextTick(() => {
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
          })

        }, err => {
            // console.log(err)
        })
      },
      // 防抖函数
      debounce(func,delay){
        let timer = null
        return function (...args) {
          if(timer) clearInterval(timer)
          timer = setInterval(() => {
            func.apply(this,args)
            // console.log(this)
          },delay)
        }


      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,1).then(res => {
          // 目前res是pop的前三十条数据
          // 要把数据保存起来，否则函数栈就会销毁
          // 这里不能用赋值的方法，赋值会覆盖掉原来的数据，采用push方法
          this.goods[type].list.push(...res.data.list);//数组解构
          this.goods[type].page + 1;

          this.$refs.scroll.finishPullUp();

        },error => {
          // console.log(err)
        })
      },
      //事件监听相关方法
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break

        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      contentScroll(position) {
        // 1.决定tabFixed是否显示
        this.isTabFixed = position.y < -this.tabOffsetTop

        // 2.决定backTop是否显示
        this.showBackTop = position.y < -BACKTOP_DISTANCE
      },

      backTop() {
        this.$refs.scroll.scrollTo(0, 0, 800)
        // console.log(111)
      },


     }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }

  .home-nav {
    font-size: 20px;
    background-color: var(--color-tint);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;


  }
    /*.tab-control {*/
    /*  position: sticky;*/
    /*  top: 44px;*/
    /*  background-color: #fff;*/
        
    /*}*/
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    background-color: #fff;

  }
  .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
  }
</style>
