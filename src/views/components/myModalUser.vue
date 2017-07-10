<template>
    <Modal v-model="myModal_show" title="新增用户" @on-ok="ok" @on-cancel="cancel">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <Form-item label="姓名" prop="name">
                <Input v-model="formValidate.name" placeholder="请输入姓名"/>
            </Form-item>
            <Form-item label="邮箱" prop="mail">
                <Input v-model="formValidate.mail" placeholder="请输入邮箱"/>
            </Form-item>
            <Form-item label="城市" prop="city">
                <Select v-model="formValidate.city" placeholder="请选择所在地">
                    <Option value="beijing">北京市</Option>
                    <Option value="shanghai">上海市</Option>
                    <Option value="shenzhen">深圳市</Option>
                </Select>
            </Form-item>
            <Form-item label="性别" prop="gender">
                <Radio-group v-model="formValidate.gender">
                    <Radio label="male">男</Radio>
                    <Radio label="female">女</Radio>
                </Radio-group>
            </Form-item>
            <Form-item label="爱好" prop="interest">
                <Checkbox-group v-model="formValidate.interest">
                    <Checkbox label="吃饭"></Checkbox>
                    <Checkbox label="睡觉"></Checkbox>
                    <Checkbox label="跑步"></Checkbox>
                    <Checkbox label="看电影"></Checkbox>
                </Checkbox-group>
            </Form-item>
            <Form-item label="介绍" prop="desc">
                <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                       placeholder="请输入..."/>
            </Form-item>
            <Form-item>

            </Form-item>
        </Form>
        <div slot="footer">
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </div>
    </Modal>
</template>
<script>
    export default {
        props: ['modal_show'],
        watch: {
            //监听myModal_show的值，变更时对外发送事件通知
            modal_show(val){
                this.myModal_show = val;
            },
            myModal_show(val){
                this.$emit('watch_show', val);
            }
        },
        data () {
            return {
                myModal_show: this.modal_show,
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        {required: true, message: '姓名不能为空', trigger: 'blur'}
                    ],
                    mail: [
                        {required: true, message: '邮箱不能为空', trigger: 'blur'},
                        {type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
                    ],
                    city: [
                        {required: true, message: '请选择城市', trigger: 'change'}
                    ],
                    gender: [
                        {required: true, message: '请选择性别', trigger: 'change'}
                    ],
                    interest: [
                        {required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change'},
                        {type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change'}
                    ],
                    date: [
                        {required: true, type: 'date', message: '请选择日期', trigger: 'change'}
                    ],
                    time: [
                        {required: true, type: 'date', message: '请选择时间', trigger: 'change'}
                    ],
                    desc: [
                        {required: true, message: '请输入个人介绍', trigger: 'blur'},
                        {type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                let _this = this;
                this.$refs[name].validate(function (valid) {
                    if (valid) {
                        _this.$Message.success('提交成功!');
                        _this.$http.post('/user/save',{
                            user:_this.formValidate,
                            user_param:'xajiusuo'
                        }).then(function (response) {
                            // success
                            console.log(response.data);
                           if(response.data.code == 200){
                               _this.handleReset(name);
                               _this.myModal_show = false;
                               _this.$Message.success(response.data.message);
                           }if(response.data.code == 400){
                               _this.$Message.error(response.data.message);
                           }
                        }).catch(function (error) {
                            //error
                            console.log('ERROR axios get!');
                            console.log(error);
                        });
                    } else {
                        _this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            }
        }
    }
</script>
