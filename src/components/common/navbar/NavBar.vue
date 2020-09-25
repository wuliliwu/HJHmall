<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "BavBar"
    }
</script>

<style scoped>

    .nav-bar {
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        color: #f6f6f6;
        font-weight: bold;
        /*box-shadow: 0 1px rgba(100,100,100,.1);*/

    }
    .left, .right {
        width: 60px;

    }
    .center {
        flex: 1;

    }

</style>