<template>
    <div>
        <Row type="flex" justify="center" align="middle">
            <Button @click="modal_show = true">新增用户</Button>
            <my-modal-user :modal_show="modal_show" :userdata="user" @watch_show="getModalShow"></my-modal-user>
        </Row>
    </div>
</template>
<script>
    import myModalUser from '../components/myModalUser.vue'

    export default {
        components:{
            myModalUser
        },
        created: function () {


        },
        data () {
            return {
                modal_show:false,
                count: [0, 1, 2],
                tag_content: ['Hello', '标签'],
                tag_group: [],
                tag_text: '',
                tag_type: 'QQ',
                tag_types: []
            }
        },
        methods: {
            //接收modal组件传回的show值（2.0 的props不支持双向绑定，需要手动实现 ）
            getModalShow(val){
                this.modal_show = val;
            }
        }
    }
</script>