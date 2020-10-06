<template>
    <div class="detail">
        <detail-nav-bar class="detail-nav" @titleClick="titleClick"/>

<!--        <scroll class="content">-->
<!--            <div>{{$store.state.cartList.length}}</div>-->
            <detail-swiper :top-images="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
            <detail-param-info :param-info="paramInfo"></detail-param-info>
            <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
            <goods-list :goods="recommendList"></goods-list>


<!--        </scroll>-->

            <detail-bottom-bar class="bottom-bar" @addToCart="addToCart"></detail-bottom-bar>


    </div>
</template>

<script>
    import Scroll from "../../components/common/scroll/Scroll";
    import DetailNavBar from "./childComps/DetailNavBar";
    import DetailSwiper from "./childComps/DetailSwiper";
    import DetailBaseInfo from "./childComps/DetailBaseInfo";
    import DetailShopInfo from "./childComps/DetailShopInfo";
    import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
    import DetailParamInfo from "./childComps/DetailParamInfo";
    import DetailCommentInfo from "./childComps/DetailCommentInfo";
    import DetailRecommendInfo from "./childComps/DetailRecommendInfo";
    import DetailBottomBar from "./childComps/DetailBottomBar";
    import GoodsList from "components/content/goods/GoodsList";


    import {getDetailData,Goods,Shop,GoodsParam,getRecommend} from "network/detail";

    export default {
    name: "Detail",
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailRecommendInfo,
      DetailBottomBar,
      GoodsList

    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommendList: [],
        // 导航点击滚动的
        themeTopYs: [0,1000,2000,3000]
      }
    },
    created() {
      // 保存传入的iid
      this.iid = this.$route.params.iid
      // this.getRecommend()
      // 根据iid请求数据
      getDetailData(this.iid).then(res => {
        // console.log(res.result.itemInfo)
        const data = res.result
        this.topImages = res.result.itemInfo.topImages

        // 获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //获取店铺信息
        this.shop = new Shop(data.shopInfo)
        // 获取商品的详细信息
        this.detailInfo = data.detailInfo
        // 获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        //获取评论信息
        // 2.7.保存评论信息
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
        // 获取推荐的信息
        getRecommend().then(res => {
          console.log(res)
            this.recommendList = res.data.list
        },err => {
          console.log(err)
        })

        // console.log(res)
      },err => {
        console.log(err)
      })

    },

     methods: {
       //这是准备弄点击顶部导航然后跳转的，因为没有用上better-scroll，所以暂时不做切换
       titleClick(index) {
         // console.log(index)
       },
        //添加到购物车
       addToCart() {
         // 获取购物车需要展示的信息
         const product = {}
         product.image = this.topImages[0];
         product.title = this.goods.title;
         product.desc = this.goods.desc;
         product.price = this.goods.nowPrice;
         product.iid = this.iid;

         //将商品添加到购物车
         this.$store.dispatch('addCart',product)



       }
      },
      mounted() {
        // const newrefresh = this.debounce(this.$refs.scroll.refresh,10000)
        this.$bus.$on('itemLoad', () => {

        })
      }
    }
</script>

<style scoped>

/*------------------------------------------------*/
    .detail {
        position: relative;
        z-index: 99;
        background-color: #ffffff;
    }
    .detail-nav {
        position: sticky;
        left: 0;
        right: 0;
        top: 0;
        background-color: #fff;
        z-index: 99;
    }

    .bottom-bar {
        position: sticky;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
    }

    /*--------------使用better-scroll的代码-----------------------*/
    /*.detail {*/
    /*    position: relative;*/
    /*    height: 999px;*/
    /*    background-color: #fff;*/
    /*    z-index: 99;*/
    /*}*/
    /*.content {*/
    /*    background-color: #fff;*/
    /*    height: calc(100% - 44px);*/
    /*}*/

</style>