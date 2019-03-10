<template>
    <div id="authorize">
        <h1>教务信息查询服务协议</h1>
        <br/>
            <p>在使用教务处信息查询服务之前，请您仔细阅读下述协议条款。如果您点击勾选同意本协议，即表示您已接受了以下所述的条款和条件，同意受本协议约束。如果您不同意接受全部的条款和条件，那么您将无法使用本协议约定的技术服务。</p>
        <h3>第一条    服务说明</h3>
            <p>CrazyE在得到您授权后，通过您所在学校的教务处网站执行登录、查询等相关操作。
            <br/>1.1如果您使用CrazyE提供的课表、成绩、考试安排等服务，表示您同意将您的教务处账号和密码授权给CrazyE，允许CrazyE使用您的教务处账号账户和密码登陆，并完成为您执行的查询课表、成绩、考试安排等操作。
                <br/>1.2同时您将允许CrazyE在服务器端保存您的教务处账号和密码，定时自动执行查询课表、成绩、考试安排等操作。</p>
        <h3>第二条    权利及义务</h3>
            <p>2.1为了更好地给您提供教务处信息查询服务，CrazyE会根据您的授权使用您的教务处账户及密码操作查询等事宜，也会在系统中记录您的前述相关信息，但是对于您的个人数据，CrazyE会严格进行保护。
                <br/>2.2如发生账号及密码信息变更，请您及时更新，CrazyE不对因此带来的查询操作失败等问题承担责任。
                <br/>2.3CrazyE可根据国家法律法规变化及保护用户权益需要，不时修改本协议。
                <br/>2.4本协议下的技术服务暂不向用户收取技术服务费，但CrazyE保留收费的权利。</p>
    </div>
</template>

<script>
    export default {
        name: "authorize"
    }
</script>

<style scoped lang="less">
    #authorize {
        p{
            margin-top: 15px;
            text-align: left;
            padding-left: 11px;
            padding-right: 11px;
        }
        h3{
            text-align: left;
            padding-left: 11px;
        }
        h1{
            padding-top: 45px;
        }
    }
</style>