<template>
  <div>
<!--      <scroll class="content1" ref="scroll">-->
    <div class="cart-list">
      <cart-list-item v-for="item in cartList"
                      :key="item.iid"
                      :item-info="item">
      </cart-list-item>
    </div>

<!--      </scroll>-->
  </div>

</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import CartListItem from "./CartListItem";
  import {mapGetters} from 'vuex'

	export default {
      name: "CartList",
      components: {
        Scroll,
        CartListItem
      },
      computed: {
        ...mapGetters(['cartList'])
      },
      //每次进购物车之前先刷新
      activated() {
        // this.$refs.scroll.refresh()
      }

    }
</script>

<style scoped>
  /*.cart-list {*/
  /*  height: calc(100vh - 44px - 58px);*/

  /*}*/

  /*.content1 {*/
  /*  height: 100%;*/
  /*}*/

</style>
