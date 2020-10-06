<template>
 <div class="cart">
  <nav-bar class="bav-bar">
   <div slot="center">分类</div>

  </nav-bar>
 </div>
</template>

<script>
 //导入模块
 import NavBar from "components/common/navbar/NavBar";


 export default {
  name: "Category",
  components: {
   NavBar
  }
 }
</script>

<style scoped>
 .bav-bar {
  background-color: var(--color-tint);
  font-size: 20px;
 }

</style>