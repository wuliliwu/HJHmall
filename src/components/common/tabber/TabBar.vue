<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /*给底部导航加上阴影*/
    box-shadow: 0px -2px rgba(100,100,100,.1);

  }



</style>
