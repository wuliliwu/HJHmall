<template>
    <div class="goods" @click="itemClick">
        <img :src="showImage" alt="" @load="imgLoad">
        <div class="goods-infos">
            <p class="title">{{goodsItem.title}}</p>
            <span class="price">跳楼价￥ {{goodsItem.price}}      </span>
            <span class="collect">    {{goodsItem.cfav}}  </span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImage() {
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      imgLoad(){
        // console.log(111)
        this.$bus.$emit('itemImageLoad')
      },
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    }
  }
</script>

<style scoped>
    .goods {
        width: 45%;
        margin-top: 8px;
        padding-bottom: 40px;
        position: relative;

    }
    .goods img {
        width: 100%;
        margin-bottom: 5px;
        border-radius: 5px;
    }

    .goods-infos {
        font-size: 14px;
        position: absolute;
        bottom: 0px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }

    .goods-infos .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 4px;
    }

    .goods-infos .price {
        font-weight: bold;
        color: var(--color-high-text);
        margin-right: 20px;
    }

    .goods-infos .collect {
        font-weight: bold;
        position: relative;
    }

    .goods-infos .collect::before {
        content: '';
        vertical-align: bottom;
        position: absolute;
        left: -15px;
        top: 0;
        width: 14px;
        height: 14px;
        background: url("~assets/img/home/collect.svg") 0 0/14px 14px;
    }
</style>