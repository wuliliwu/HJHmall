<template>
    <div class="recommend">
        <div v-for="item in recommends" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div class="">{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecommendView",
        props: {
            recommends:{
                type: Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .recommend {
        display: flex;
        padding: 8px 0 15px;
        text-align: center;
        /*font-weight: bold;*/
        font-size: 16px;
        box-shadow: 0 10px rgba(100,100,100,.1);

    }
    .recommend-item {
        flex: 1;
    }
    .recommend-item img {

        width: 75px;
        height: 75px;
        margin-bottom: 10px;
    }
</style>