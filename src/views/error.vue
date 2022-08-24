<template>
    <div class="err404">
        <h4 style="margin:-10px -210px;font-size: 70px">404</h4>
        <br/>
        <br/>
        <h4>您访问的页面不见了！</h4>
        <h5>
            <router-link to="/main" class="go-home">去首页</router-link>
        </h5>
    </div>
</template>

<script>
    export default {
        name: 'notFound'
    }
</script>

<style>
    .err404 {
        width: 280px;
        margin: 3px auto;
        height: 255px;
        padding: 140px 0 0 420px;
        background: gold;
    }

    .err404 h4 {
        margin: 0px -200px;
        width: 300px;
        height: 38px;
        line-height: 38px;
        font-size: 16px;
        color: #fff;
        text-align: center;
        display: inline-block;
        border-radius: 2px;
        font-size: 30px;
    }

    .err404 .go-home {
        margin: 0px -120px;
        width: 130px;
        height: 38px;
        background: #aaffff;
        line-height: 38px;
        font-size: 16px;
        color: orange;
        text-align: center;
        display: inline-block;
        border-radius: 2px
    }
</style>
