<template>
    <div class="message">
        <h3>基本信息</h3>
        <p>
            <span>{{title1}}</span>
            <span>性 别：男</span></p>
        <p><span>求职意向：web前端开发工程师</span>
            <span>联系电话：18523704718</span></p>
        <p><span>现居地址：浙江杭州市下城区</span>
            <span>工作经验：1年</span></p>
        <p class="dd">邮箱地址：1916023298@qq.com
        </p>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        data() {
            return {};
        },
        computed: {
            title1() {
                return this.$store.state.title1;
            },
        },
    };
</script>

<style>
    .message {
        width: 100%;
        margin: 0 auto;
        padding: 2% 5%;
        box-sizing: border-box;
        /* background: lightpink; */
        text-align: left;
    }

    .message h3 {
        margin-bottom: 1rem;
    }

    .message p {
        display: flex;
        text-align: left;
        margin-bottom: .5rem;
    }

    .message span {
        display: inline-block;
        width: 50%;
    }

    .dd {

        float: left;
    }
</style>>
