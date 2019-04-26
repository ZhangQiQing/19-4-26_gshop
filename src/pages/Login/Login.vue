<template>
    <div class="all">
        <section class="loginContainer">
            <router-link to="/order" class="log">
                <img src="./images/icon_arrow_left.png">
            </router-link>
            <div class="loginInner">
                <div class="login_header">
                    <h2 class="login_logo">硅谷外卖</h2>
                    <div class="login_header_title">
                        <router-link to="/login/message" :class="{color: $route.path === '/login/message'}">短信登录</router-link>
                        <router-link to="/login/password" :class="{color: $route.path === '/login/password'}">密码登录</router-link>
                    </div>
                </div>
                <router-view/>
            </div>
        </section>
    </div>
</template>

<script>

export default {
}
</script>

<style scoped>
    .all{
        background-color: #fafafa;
        height: 100%;
    }
    a{
        color: black;
    }
    .login_logo{
        margin-top: 40px;
        color: #40c56b;
        text-align: center;
    }
    .log img{
        margin: 10px;
        width: 30px;
        height: 30px;
    }
    .login_header_title{
        margin-top: 10px;
        /* font-style: italic; 倾斜 */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login_header_title a{
        padding: 5px;
        margin: 10px;
    }
    .color{
        color: #40c56b;
        border-bottom: 2px solid #40c56b;
    } 
    /* .input{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    } */
    
</style>
