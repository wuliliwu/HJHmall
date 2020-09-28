<template>
    <nav-bar class="nav-bar">
        <div slot="left" class="back" @click="backClick">
            <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div slot="center">
            <div class="titleFather">
                <div v-for="(item,index) in titles"
                     :class="{active : currentIndex===index}"
                     @click="itemClick(index)"
                     class="titles">{{item}}</div>
            </div>
        </div>
    </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }

    },
    components: {
      NavBar
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
      },
      backClick() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
    .nav-bar {
        border-bottom: 1px solid rgba(100,100,100,.2);

        /*background-color: #ccc;*/
    }
    .titleFather {
        display: flex;
    }
    .titles {
        margin: 0 10px 0 10px;
        flex: 1;
        float: left;
        color: #606060;
        /*font-weight: bold;*/
        text-align: center;
        font-size: 15px;
        font-weight: normal;
    }
    .active {
        color: #ff627b;
    }
    .back {
        margin-top: 6px;
    }

</style>