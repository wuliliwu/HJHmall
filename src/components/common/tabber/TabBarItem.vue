<template>
  <div class="tab-bar-item" @click="itemClick" >
<!--    剧名插槽-->
<!--    设置相关属性的时候最好外面包裹一层div，以免替换出错-->
    <div v-if="!isActive"> <slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot  name="item-text"></slot></div>

  </div>

</template>

<script>
    export default {
      name: "TabBarItem",
      data() {
        return {
          // isActive: true

        }
      },
      props: {
        path: String,
        activeColor: {
          type: String,
          default: '#c41373',
        }

      },
      computed: {
        isActive(){
          return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
          return this.isActive ? {color : this.activeColor} : {}
        }
      },
      methods: {
        itemClick(){
          this.$router.replace(this.path).catch(err => {err})
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-weight: bold;
    font-size: 12px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>
