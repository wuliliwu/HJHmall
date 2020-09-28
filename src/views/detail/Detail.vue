<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav"/>
        <scroll class="detail-content" ref="scroll">
            <detail-swiper :top-images="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info
                    :detail-info="detailInfo"
                    @imageLoad="imageLoad"
            ></detail-goods-info>
        </scroll>
    </div>
</template>

<script>
    import DetailNavBar from "./childComps/DetailNavBar";
    import DetailSwiper from "./childComps/DetailSwiper";
    import DetailBaseInfo from "./childComps/DetailBaseInfo";
    import DetailShopInfo from "./childComps/DetailShopInfo";
    import Scroll from "components/common/scroll/Scroll";
    import DetailGoodsInfo from "./childComps/DetailGoodsInfo";


    import {getDetailData,Goods,Shop} from "network/detail";


    export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      Scroll,

    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {}
      }
    },
    created() {
      // 保存传入的iid
      this.iid = this.$route.params.iid
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
        // console.log(res)
      },err => {
        console.log(err)
      })

    },
     methods: {
        imageLoad() {
            this.$refs.scroll.refresh()
        }
      }
  }
</script>

<style scoped>
    #detail {
        position: relative;
        z-index: 10;
        background-color: #ffffff;
        height: 100vh;
    }
    .detail-nav {
        /*position: sticky;*/
        /*top: 0;*/
        /*left: 0;*/
        /*right: 0;*/
        position: relative;
        z-index: 11;
        background-color: #fff;
    }
    .detail-content {
        height: calc(100% - 44px);
    }
    /*.detail-nav {*/
    /*    position: relative;*/
    /*    z-index: 99;*/
    /*    background-color: #fff;*/
    /*}*/
    /*.detail-content {*/
    /*    height: 900px;*/

    /*    position: absolute;*/
    /*    top: 44px;*/
    /*    bottom: 60px;*/
    /*}*/
</style>