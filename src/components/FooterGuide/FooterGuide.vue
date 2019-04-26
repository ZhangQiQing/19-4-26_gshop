<template>
    <nav class="mui-bar mui-bar-tab">
          <router-link class="mui-tab-item" to="/msite">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
          </router-link>
          <router-link class="mui-tab-item" to="/search">
            <span class="mui-icon mui-icon-search"></span>
            <span class="mui-tab-label">搜索</span>
          </router-link>
          <router-link class="mui-tab-item" to="/profile">
            <span class="mui-icon mui-icon-order mui-icon-extra-cart"><span class="mui-badge">0</span></span>
            <span class="mui-tab-label">订单</span>
          </router-link>
          <router-link class="mui-tab-item" to="/order">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">我的</span>
          </router-link>
        </nav>
</template>

<<script>
export default {
    
}
</script>

<style scoped>

</style>

