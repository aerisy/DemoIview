<style scoped lang="less">
    .demo-carousel {
        height: 200px;
        line-height: 200px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        background: #495060;
    }

    .ivu-row-flex {
        /**
            Row flex的样式
         */
        margin-top: 5px;
        margin-bottom: 5px;
    }
</style>
<template>
    <div>
        <Row type="flex" justify="center" align="middle">
            <Col span="10">
            <Carousel >
                <Carousel-item>
                    <div class="demo-carousel">1</div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel">2</div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel">3</div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel">4</div>
                </Carousel-item>
            </Carousel>
            </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
            <Col span="10" align="center">
            <div id="maine2" style="width: 600px;height:400px;"></div>
            </Col>
            <Col span="10" align="center">
            <div id="maine" style="width: 600px;height:400px;"></div>
            </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
            <Col span="9">
            <Card>
                <p slot="title">系统使用须知</p>
                <p>1.使用系统前请安装系统必需插件,确保功能正常使用</p>
                <p>2.系统开放时间为每日9:00~18:00</p>
                <p>3.登陆系统必须使用UKEY登陆</p>
                <p>4.提交文章前请上传文章所需材料</p>
            </Card>
            </Col>
            <Col span="3" offset="2">
            <i-circle size="150" :percent="30">
                <Icon type="android-settings" size="40" style="color:#495060"></Icon>
                <h2>内存使用率</h2>
            </i-circle>
            </Col>
            <Col span="4" offset="1">
            <i-circle size="150" :percent="90" stroke-color="#ff5500">
                <Icon type="android-desktop" size="40" style="color:#495060"></Icon>
                <h2>CPU使用率</h2>
            </i-circle>
            </Col>
        </Row>
        <!--<Row type="flex" justify="center" align="middle">
            <Col span="18">
            <h2>
                <p>Demo1</p>
                <p>欢迎使用iview!</p>
                <p>这里是Demo1!</p>
                <p>Filter demo!</p>
            </h2>
            </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
            <Col span="18">
            <p v-for='tel in telephone'>{{tel | newtel}}</p>
            </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
            <Col span="18">
            <h2>
                <p>Filter + vbind demo!</p>
            </h2>
            <a v-for='(url,index) in urlList' :href='url.url | getquery(url.name,url.age)'>{{url.url}}<br></a>
            </Col>
        </Row>-->

    </div>
</template>
<script src="http://echarts.baidu.com/resource/echarts-gl-latest/dist/echarts-gl.min.js">
</script>
<script>
    import echarts from 'echarts'
    import echarts_wordcloud from 'echarts-wordcloud'
    import echarts_gl from 'echarts-gl'

    export default {
        data () {
            return {
                telephone: [
                    10000000000,
                    10000000001,
                    10000000002,
                    10000000003,
                    10000000004,
                    10000000005,
                    10000000006,
                    10000000007,
                    10000000008,
                    10000000009,
                    10000000000,
                ],
                urlList: [
                    {url: 'http://www.baidu.com', name: 'ziksang', age: 20},
                    {url: 'http://www.google.com', name: 'ziksang2', age: 30}
                ],
                MissMsgCount: 0
            }
        },
        filters: {
            newtel (value) {
                if (!value) return ''
                value = value.toString().substr(7, 4)
                value = '*'.repeat(7) + value
                let endMember = value.substr(-1, 1)
                if (endMember % 2) {
                    value = value + '中奖'
                } else {
                    value = value + '谢谢参与'
                }
                return value
            },
            getquery (value, name, age) {
                if (!value) return ""
                return `${value}?name=${name}&age=${age}`
            }
        },
        mounted(){
            //echart

            var myChart = echarts.init(document.getElementById('maine'));
            //data

            var option = {
                title:{
                    text:"词云图",
                    link:'https://github.com/ecomfe/echarts-wordcloud',
                    subtext: 'data-visual.cn',
                    sublink:'http://data-visual.cn',
                },
                tooltip: {},
                series: [{
                    type: 'wordCloud',
                    gridSize: 20,
                    sizeRange: [12, 50],
                    rotationRange: [0, 0],
                    shape: 'circle',
                    textStyle: {
                        normal: {
                            color: function() {
                                return 'rgb(' + [
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160)
                                    ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: [{
                        name: 'Sam S Club',
                        value: 10000,
                        textStyle: {
                            normal: {
                                color: 'black'
                            },
                            emphasis: {
                                color: 'red'
                            }
                        }
                    }, {
                        name: 'Macys',
                        value: 6181
                    }, {
                        name: 'Amy Schumer',
                        value: 4386
                    }, {
                        name: 'Jurassic World',
                        value: 4055
                    }, {
                        name: 'Charter Communications',
                        value: 2467
                    }, {
                        name: 'Chick Fil A',
                        value: 2244
                    }, {
                        name: 'Planet Fitness',
                        value: 1898
                    }, {
                        name: 'Pitch Perfect',
                        value: 1484
                    }, {
                        name: 'Express',
                        value: 1112
                    }, {
                        name: 'Home',
                        value: 965
                    }, {
                        name: 'Johnny Depp',
                        value: 847
                    }, {
                        name: 'Lena Dunham',
                        value: 582
                    }, {
                        name: 'Lewis Hamilton',
                        value: 555
                    }, {
                        name: 'KXAN',
                        value: 550
                    }, {
                        name: 'Mary Ellen Mark',
                        value: 462
                    }, {
                        name: 'Farrah Abraham',
                        value: 366
                    }, {
                        name: 'Rita Ora',
                        value: 360
                    }, {
                        name: 'Serena Williams',
                        value: 282
                    }, {
                        name: 'NCAA baseball tournament',
                        value: 273
                    }, {
                        name: 'Point Break',
                        value: 265
                    }]
                }]
            };
            // init echart
            myChart.setOption(option);

            var myChart2 = echarts.init(document.getElementById('maine2'));
            var hours2 = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
                '7a', '8a', '9a', '10a', '11a',
                '12p', '1p', '2p', '3p', '4p', '5p',
                '6p', '7p', '8p', '9p', '10p', '11p'
            ];
            var days2 = ['Saturday', 'Friday', 'Thursday',
                'Wednesday', 'Tuesday', 'Monday', 'Sunday'
            ];

            var data2 = [
                [0, 0, 5],
                [0, 1, 1],
                [0, 2, 0],
                [0, 3, 0],
                [0, 4, 0],
                [0, 5, 0],
                [0, 6, 0],
                [0, 7, 0],
                [0, 8, 0],
                [0, 9, 0],
                [0, 10, 0],
                [0, 11, 2],
                [0, 12, 4],
                [0, 13, 1],
                [0, 14, 1],
                [0, 15, 3],
                [0, 16, 4],
                [0, 17, 6],
                [0, 18, 4],
                [0, 19, 4],
                [0, 20, 3],
                [0, 21, 3],
                [0, 22, 2],
                [0, 23, 5],
                [1, 0, 7],
                [1, 1, 0],
                [1, 2, 0],
                [1, 3, 0],
                [1, 4, 0],
                [1, 5, 0],
                [1, 6, 0],
                [1, 7, 0],
                [1, 8, 0],
                [1, 9, 0],
                [1, 10, 5],
                [1, 11, 2],
                [1, 12, 2],
                [1, 13, 6],
                [1, 14, 9],
                [1, 15, 11],
                [1, 16, 6],
                [1, 17, 7],
                [1, 18, 8],
                [1, 19, 12],
                [1, 20, 5],
                [1, 21, 5],
                [1, 22, 7],
                [1, 23, 2],
                [2, 0, 1],
                [2, 1, 1],
                [2, 2, 0],
                [2, 3, 0],
                [2, 4, 0],
                [2, 5, 0],
                [2, 6, 0],
                [2, 7, 0],
                [2, 8, 0],
                [2, 9, 0],
                [2, 10, 3],
                [2, 11, 2],
                [2, 12, 1],
                [2, 13, 9],
                [2, 14, 8],
                [2, 15, 10],
                [2, 16, 6],
                [2, 17, 5],
                [2, 18, 5],
                [2, 19, 5],
                [2, 20, 7],
                [2, 21, 4],
                [2, 22, 2],
                [2, 23, 4],
                [3, 0, 7],
                [3, 1, 3],
                [3, 2, 0],
                [3, 3, 0],
                [3, 4, 0],
                [3, 5, 0],
                [3, 6, 0],
                [3, 7, 0],
                [3, 8, 1],
                [3, 9, 0],
                [3, 10, 5],
                [3, 11, 4],
                [3, 12, 7],
                [3, 13, 14],
                [3, 14, 13],
                [3, 15, 12],
                [3, 16, 9],
                [3, 17, 5],
                [3, 18, 5],
                [3, 19, 10],
                [3, 20, 6],
                [3, 21, 4],
                [3, 22, 4],
                [3, 23, 1],
                [4, 0, 1],
                [4, 1, 3],
                [4, 2, 0],
                [4, 3, 0],
                [4, 4, 0],
                [4, 5, 1],
                [4, 6, 0],
                [4, 7, 0],
                [4, 8, 0],
                [4, 9, 2],
                [4, 10, 4],
                [4, 11, 4],
                [4, 12, 2],
                [4, 13, 4],
                [4, 14, 4],
                [4, 15, 14],
                [4, 16, 12],
                [4, 17, 1],
                [4, 18, 8],
                [4, 19, 5],
                [4, 20, 3],
                [4, 21, 7],
                [4, 22, 3],
                [4, 23, 0],
                [5, 0, 2],
                [5, 1, 1],
                [5, 2, 0],
                [5, 3, 3],
                [5, 4, 0],
                [5, 5, 0],
                [5, 6, 0],
                [5, 7, 0],
                [5, 8, 2],
                [5, 9, 0],
                [5, 10, 4],
                [5, 11, 1],
                [5, 12, 5],
                [5, 13, 10],
                [5, 14, 5],
                [5, 15, 7],
                [5, 16, 11],
                [5, 17, 6],
                [5, 18, 0],
                [5, 19, 5],
                [5, 20, 3],
                [5, 21, 4],
                [5, 22, 2],
                [5, 23, 0],
                [6, 0, 1],
                [6, 1, 0],
                [6, 2, 0],
                [6, 3, 0],
                [6, 4, 0],
                [6, 5, 0],
                [6, 6, 0],
                [6, 7, 0],
                [6, 8, 0],
                [6, 9, 0],
                [6, 10, 1],
                [6, 11, 0],
                [6, 12, 2],
                [6, 13, 1],
                [6, 14, 3],
                [6, 15, 4],
                [6, 16, 0],
                [6, 17, 0],
                [6, 18, 0],
                [6, 19, 0],
                [6, 20, 1],
                [6, 21, 2],
                [6, 22, 2],
                [6, 23, 6]
            ];
            var option2 = {
                tooltip: {},
                visualMap: {
                    max: 20,
                    inRange: {
                        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                    }
                },
                xAxis3D: {
                    type: 'category',
                    data: hours2
                },
                yAxis3D: {
                    type: 'category',
                    data: days2
                },
                zAxis3D: {
                    type: 'value'
                },
                grid3D: {
                    boxWidth: 200,
                    boxDepth: 80,
                    light: {
                        main: {
                            intensity: 1.2
                        },
                        ambient: {
                            intensity: 0.3
                        }
                    }
                },
                series: [{
                    type: 'bar3D',
                    data: data2.map(function(item) {
                        return {
                            value: [item[1], item[0], item[2]]
                        }
                    }),
                    shading: 'color',

                    label: {
                        show: false,
                        textStyle: {
                            fontSize: 16,
                            borderWidth: 1
                        }
                    },

                    itemStyle: {
                        opacity: 0.4
                    },

                    emphasis: {
                        label: {
                            textStyle: {
                                fontSize: 20,
                                color: '#900'
                            }
                        },
                        itemStyle: {
                            color: '#900'
                        }
                    }
                }]
            }

            myChart2.setOption(option2);
        },
        created: function () {
            let _this = this;
            _this.$http.get('/getMissMsgCount').then(function (response) {
                _this.MissMsgCount = response.data.count;

            }).catch(function (error) {
                console.log('ERROR axios get!');
                console.log(error);
            });
            _this.$Notice.open({
                title: '系统更新通知',
                desc: '本系统将于2017年6月28日12:00~20:00间进行系统更新维护,届时系统将不提供服务,望各位提前做好数据备份工作,以免造成不必要的数据丢失,期间造成的不便敬请谅解。',
                duration: 0
            });



        }
    }
</script>
