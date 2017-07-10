<style scoped lang="less">
</style>
<template>
    <div>
        <Row type="flex" justify="center" align="middle">
            <Col span="20">
            <Alert show-icon>
                DataTables Demo
                <template slot="desc">DataTables 测试页面.</template>
            </Alert>
            </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
            <Col span="20">
            <table id="dtable" class="table table-bordered ns-dataTable">
                <thead>
                <tr>
                    <th width="14%">姓名</th>
                    <th width="10%">date</th>
                    <th width="10%">age</th>
                    <th width="10%">籍贯</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="data in datalist">
                    <tr>
                        <td>{{data.name}}</td>
                        <td>{{data.date}}</td>
                        <td>{{data.age}}</td>
                        <td>{{data.address}}</td>
                    </tr>
                </template>
                </tbody>
            </table>
            </Col>
        </Row>
        <Back-top></Back-top>
    </div>
</template>
<script>
    //import '../../libs/datatables/dataTables.bootstrap4.css'
    import jqueryd from '../../libs/datatables/jquery.dataTables'
    import jquery from '../../libs/datatables/jquery.min'
    import datatables from '../../libs/datatables/dataTables.bootstrap4'

    export default {
        components: {},
        methods: {
            msgTest(){

            }
        },
        created: function () {
            let _this = this;
            _this.$http.get('/getAllUser')
                    .then(function (response) {
                        // success
//                    console.log(response.data);
                        _this.datalist = response.data.tableData3;
                    }).catch(function (error) {
                //error
                console.log('ERROR axios get!');
                console.log(error);
            })

        },
        data () {
            return {
                datalist: []
            }
        },
        computed: {},
        mounted(){

            document.getElementById('dtable').DataTable({
                'language': {
                    'sProcessing': '处理中',
                    'sLengthMenu': '_MENU_',// '显示_MENU_ 项结果',
                    'sZeroRecords': '没有匹配结果',
                    'sInfo': '显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项',
                    'sInfoFiltered': '（结果从 _MAX_ 条数据中过滤所得）',
                    'sInfoEmpty': '(由 _MAX_ 项结果过滤)',
                    'sInfoPostFix': '',
                    'sSearch': '搜索： ',
                    'sUrl': '',
                    'sEmptyTable': '表中数据为空',
                    'sLoadingRecords': '载入中...',
                    'sInfoThousands': ',',
                    'oPaginate': '',
                    'oAria': {
                        'sSortAscending': '以升序排列此列',
                        'sSortDescending': '以降序排列此列'
                    },
                    'oPaginate': {
                        'sPrevious': '上一页',
                        'sNext': '下一页',
                        'sFirst': '首页',
                        'sLast': '末页'
                    }
                },
                'bProcessing': true,
                // 'scrollY':500,
                'scrollX': true,
                'bScrollCollapse': true,
                'bStateSave': true
            });

        }
    }
</script>
