<template>
    <div class="login_content">
        <form>
            <div class="on">
                <section class="login_message">
                    <input type="tel" maxlength="11" placeholder="手机号">
                    <button disabled="disabled" class="get_verification">获取验证码</button>
                </section>
                <section class="login_verification">
                    <input type="tel" maxlength="8" placeholder="验证码">
                </section>
                <section class="login_hint">
                    温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                    <a href="javascript:;">《用户服务协议》</a>
                </section>
            </div>
            <button class="login_submit">登录</button>
            <a href="javascript:;" class="about_us">关于我们</a>
         </form>
    </div>                         
</template>
<script>
export default {
    
}
</script>

<style scoped>
    .login_message input{
        position: relative;
        margin-left: 30px;
        width: 86%;
    }
    .login_verification input{
        margin-left: 30px;
        width: 86%;
    }
    .login_message{
        display: flex;
        flex-direction: row;
    }
    .get_verification{
        margin-left: 68.5%;
        position: absolute;
        height: 40px;
    }
    .login_hint{
        font-size: 15px;
        width: 86%;
        margin-left: 30px;
    }
    .login_submit{
        margin-top: 20px;
        margin-left: 30px;
        width: 86%;
        background-color: #40c56b;
        padding: 10px;
        margin-bottom: 20px;
        font-size: 16px;
        color: #fafafa;
    }
    .login_hint a{
        color: #40c56b;
    }
    .about_us{
        margin-left: 30px;
        width: 86%;
        display: inline-block;
        font-size: 14px;
        padding: 10px;
        text-align: center;
    }
</style>

