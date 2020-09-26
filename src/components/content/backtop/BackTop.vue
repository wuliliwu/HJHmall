<template>
    <div class="back-top" @click="backTop">
        <img src="~assets/img/common/top.png" alt="">
    </div>
</template>

<script>
    import Scroll from "../../common/scroll/Scroll";
  export default {
    name: "backTop",
    components: {
      Scroll
    },
    methods: {
      backTop(){

        this.$emit('backTop')
      }
    }
  }
</script>

<style scoped>
    .back-top img {
        width: 43px;
        height: 43px;
    }

</style>