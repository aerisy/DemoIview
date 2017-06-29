<style scoped>
    .layout-logo {
        width: 100px;
        height: 30px;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 5px;
        left: 10px;
    }

    .layout-logo img {
        border-radius: 25px; /**5px**/
        left: 30px;
        position: relative;
    }

    .layout-copy p {
        text-align: center;
        padding: 20px 0 30px;
        color: #9ea7b4;
    }

    .demo-badge {
        top: -10px;
        display: inline-block;
    }

    .footer-info {
        margin: 30px;
    }

    .content-blank {
        margin-top: 20px;
    }

</style>
<template>
    <div>
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <Row type="flex" justify="center" align="middle">
                <Col span="21">
                <div class="layout-logo">
                    <img src="../images/logo.jpg" height="50px">
                </div>
                <Menu-item name="1">
                    <router-link :to="{ name:'demo1'}">
                        <Icon type="ios-paper"></Icon>
                        Demo1
                    </router-link>
                </Menu-item>
                <Menu-item name="2">
                    <router-link :to="{ name:'demo2'}">
                        <Icon type="ios-people"></Icon>
                        Demo2
                    </router-link>
                </Menu-item>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        插件示例
                    </template>
                    <Menu-group title="DEMOS">
                        <router-link :to="{ name:'demo3'}">
                            <Menu-item name="3-1">demo3</Menu-item>
                        </router-link>
                        <router-link :to="{ name:'demo4'}">
                            <Menu-item name="3-2">demo4</Menu-item>
                        </router-link>
                        <router-link :to="{ name:'demo5'}">
                            <Menu-item name="3-3">demo5</Menu-item>
                        </router-link>
                    </Menu-group>
                    <Menu-group title="插件DEMO">
                        <Menu-item name="3-4">Echarts-GL</Menu-item>
                        <router-link :to="{ name:'demo6'}">
                        <Menu-item name="3-5">Leaflet+Echarts</Menu-item>
                        </router-link>
                    </Menu-group>
                </Submenu>
                <Menu-item name="4">
                    <Icon type="settings"></Icon>
                    综合设置
                </Menu-item>
                <Submenu name="5">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        切换主题
                    </template>
                    <Menu-group title="颜色">
                        <!--<Radio-group v-model="theme1">-->
                        <Menu-item name="dark"><a @click="theme1='dark'">黑色</a></Menu-item>
                        <Menu-item name="light" @click="theme1='light'"><a @click="theme1='light'">白色</a></Menu-item>
                        <Menu-item name="primary" @click="theme1='primary'"><a @click="theme1='primary'">蓝色</a>
                        </Menu-item>
                        <!--<Menu-item name="light" ><Radio label="light">L   I   G   H   T</Radio></Menu-item>
                        <Menu-item name="dark" ><Radio label="dark">D   A   R   K</Radio></Menu-item>
                        <Menu-item name="primary" ><Radio label="primary">P R I M A R Y</Radio></Menu-item>-->
                        <!--</Radio-group>-->
                    </Menu-group>
                </Submenu>
                </Col>
                <Col span="3">
                <Submenu name="7">
                    <template slot="title">
                        <Icon type="android-person "></Icon>
                        <template v-if="MissMsgCount > 0">
                            <Badge dot>
                                个人中心
                            </Badge>
                        </template>
                        <template v-else>
                            个人中心
                        </template>
                    </template>
                    <!--<Radio-group v-model="theme1">-->
                    <Menu-item name="6">
                        未读消息
                        <Badge :count="MissMsgCount" overflow-count="99">
                        </Badge>
                    </Menu-item>
                    <Menu-item name="dark"><a @click="theme1='dark'">修改密码</a></Menu-item>
                    <Menu-item name="primary" @click="theme1='primary'">
                        <Icon type="power"></Icon>
                        <a @click="theme1='primary'">注销</a>
                    </Menu-item>
                </Submenu>
                </Col>
            </Row>
        </Menu>
        <!--<br>
        <p>切换主题</p>
        <Radio-group v-model="theme1">
            <Radio label="light"></Radio>
            <Radio label="dark"></Radio>
            <Radio label="primary"></Radio>
        </Radio-group>-->

        <div class="content-blank">
        </div>
        <router-view></router-view>
        <Row type="flex" justify="center" align="middle">
            <Col span="8">
            <div class="layout-copy">
                <p>
                    2017~ &copy; 西安九索数据<br>
                    西华门
                </p>
            </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        created: function () {
            let _this = this;
            _this.$http.get('/getMissMsgCount').then(function (response) {
                _this.MissMsgCount = response.data.count;

            }).catch(function (error) {
                console.log('ERROR axios get!');
                console.log(error);
            });
        },
        data () {
            return {
                theme1: 'dark',
                MissMsgCount: 0
            }
        }
    }
</script>