<template>
    <div class="cart">
<!--        导航栏-->
        <nav-bar class="nav-bar">
            <div slot="center">购物车({{cartLenght}})</div>
        </nav-bar>
<!--        购物车列表哦-->

        <cart-list></cart-list>
        <bottom-bar></bottom-bar>
    </div>
</template>

<script>
    //导入模块
    import NavBar from "components/common/navbar/NavBar";
    import CartList from "./childComps/CartList";
    import BottomBar from "./childComps/BottomBar";
    import {mapGetters} from 'vuex'


  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      BottomBar

    },
    computed: {
      ...mapGetters(['cartLenght',])
    }
  }
</script>

<style scoped>
    .cart {
        height: 100%;
    }
    .nav-bar {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        background-color: var(--color-tint);
        font-size: 20px;
    }

</style>