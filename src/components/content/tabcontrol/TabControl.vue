<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles"
             class="tab-control-item" @click="TitleClick(index)" :class="{active: index === currentIndex}">
            <span>{{item}}</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TabControl",
        data(){
            return {
                currentIndex: 0
            }
        },
        props: {
            titles: {
                type: Array,
                default(){
                    return []
                }
            },

        },
        methods: {
            TitleClick(index){
                this.currentIndex = index
                // console.log(111)
            }
        }
    }
</script>

<style scoped>
    .tab-control {
        display: flex;
        text-align: center;
        font-weight: bold;
        height: 40px;
        line-height: 40px;
        /*border-bottom: 1px solid #ccc;*/
    }
    .tab-control-item {
        flex: 1;
        /*margin-bottom: 20px;*/

    }

    .active {
        border-bottom: 3px solid #ff627b;
        color: #ff627b;
    }

</style>