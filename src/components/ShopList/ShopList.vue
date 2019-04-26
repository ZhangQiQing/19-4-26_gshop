<template>
    <div class="all">
        <div class="shop_header">
            <span class="shop_header_title">附近商家</span>
        </div>
        <div class="shop_container">
            <ul class="shop_list">
              <li class="shop_li border-1px">
                <a>
                  <div class="shop_left">
                    <img class="shop_img" src="./images/shop/1.jpg">
                  </div>
                  <div class="shop_right">
                    <section class="shop_detail_header">
                      <h4 class="shop_title item-title">锄禾日当午，汗滴禾下土</h4>
                    </section>
                    <section class="shop_rating_order">
                      <section class="shop_rating_order_left">
                        <div class="order_section">
                          月售106单
                        </div>
                        <div class="flex">
                            硅谷专送
                        </div>
                      </section>
                    </section>
                    <section class="shop_distance">
                      <p class="shop_delivery_msg">
                        <span>¥20起送</span>
                        <span class="segmentation">/</span>
                        <span>配送费约¥5</span>
                      </p>
                    </section>
                  </div>
                </a>
              </li>
              <li class="shop_li border-1px">
                <a>
                  <div class="shop_left">
                    <img class="shop_img" src="./images/shop/2.jpg">
                  </div>
                  <div class="shop_right">
                    <section class="shop_detail_header">
                      <h4 class="shop_title item-title">锄禾日当午，汗滴禾下土</h4>
                    </section>
                    <section class="shop_rating_order">
                      <section class="shop_rating_order_left">
                        <div class="order_section">
                          月售106单
                        </div>
                        <div class="flex">
                            硅谷专送
                        </div>
                      </section>
                    </section>
                    <section class="shop_distance">
                      <p class="shop_delivery_msg">
                        <span>¥20起送</span>
                        <span class="segmentation">/</span>
                        <span>配送费约¥5</span>
                      </p>
                    </section>
                  </div>
                </a>
              </li>
              <li class="shop_li border-1px">
                <a>
                  <div class="shop_left">
                    <img class="shop_img" src="./images/shop/3.jpg">
                  </div>
                  <div class="shop_right">
                    <section class="shop_detail_header">
                      <h4 class="shop_title item-title">锄禾日当午，汗滴禾下土</h4>
                    </section>
                    <section class="shop_rating_order">
                      <section class="shop_rating_order_left">
                        <div class="order_section">
                          月售106单
                        </div>
                        <div class="flex">
                            硅谷专送
                        </div>
                      </section>
                    </section>
                    <section class="shop_distance">
                      <p class="shop_delivery_msg">
                        <span>¥20起送</span>
                        <span class="segmentation">/</span>
                        <span>配送费约¥5</span>
                      </p>
                    </section>
                  </div>
                </a>
              </li>
              <li class="shop_li border-1px">
                <a>
                  <div class="shop_left">
                    <img class="shop_img" src="./images/shop/4.jpg">
                  </div>
                  <div class="shop_right">
                    <section class="shop_detail_header">
                      <h4 class="shop_title item-title">锄禾日当午，汗滴禾下土</h4>
                    </section>
                    <section class="shop_rating_order">
                      <section class="shop_rating_order_left">
                        <div class="order_section">
                          月售106单
                        </div>
                        <div class="flex">
                            硅谷专送
                        </div>
                      </section>
                    </section>
                    <section class="shop_distance">
                      <p class="shop_delivery_msg">
                        <span>¥20起送</span>
                        <span class="segmentation">/</span>
                        <span>配送费约¥5</span>
                      </p>
                    </section>
                  </div>
                </a>
              </li>
            </ul>
          </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .all{
      width: 100%;
      background-color: #fafafa;
    }
    .all img{
        width: 120px;
        height: 100px;
    }
    .shop_header{
        padding: 10px 10px;
    }
    .shop_header_title{
        text-align: center;
        line-height: 20px;
        font-size: 16px;
    }
    .shop_list{
        padding: 0 10px 10px 10px;
        display: flex;
        flex-direction: column;
    }
    .shop_li a{
        display: flex;
        flex-direction: row;
        /* justify-content: space-between; */
    }
    .shop_right{
        color: black;
    }
    .shop_rating_order_left{
        font-size: 16px;
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .shop_right{
        margin-left: 30px;
    }
    .shop_distance{
        margin-top: 10px;
    }
    .shop_li{
        padding-bottom: 10px;
    }
    .flex{
      margin-top: -2.5px;
      color: green;
    }
    .shop_title{
      width: 180px;
      font-size: 17px;
    }
    .item-title{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
</style>

