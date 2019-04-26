<template>
    <div class="all">
        <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
            <mt-button slot="left"><img id="img" src="../Msite/images/nav/icon_search.png"></mt-button>
            <mt-button slot="right">登录/注册</mt-button>
        </mt-header>
        <div id="lunbo">
            <mt-swipe :auto="2000">
                <mt-swipe-item v-for="item in items" :key="item.id">
                    <a>
                        <img :src="item.url" class="img"/>
                    </a>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <ShopList/>
    </div>
</template>

<script>
import {Swipe, SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'

import ShopList from '../../components/ShopList/ShopList'
 
 export default {
 components: {
  'mt-swipe': Swipe,
  'mt-swipe-item': SwipeItem,
  ShopList
 },
    data () {
        return {
            items: [
                {
                url: require('../Msite/images/nav/2.jpg')
                }, 
                {
                url: require('../Msite/images/nav/6.jpg')
                }
            ]
        }
    }
 }
</script>

<style lang="scss" scoped>
    .all{
        background-color: #ccc;
    }
    img {
        width: 100%;
        height: 200px;
    }
    .mint-swipe {
        height: 180px;
    }
    #lunbo{
        background-color: #fafafa;
        margin-bottom: 20px;
    }
    #img{
        width: 24px;
        height: 24px;
    }
</style>


