<template>
    <div id="login">
       
        <div class='login_box'>
            <div class="login_box_box">
                <div class="login_title">登录</div>
                <el-form :model="ruleForm" status-icon ref="ruleForm" class="demo-ruleForm">
                <el-form-item prop="account">
                    <el-input v-model="ruleForm.account" autocomplete="off" ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="ruleForm.password" @keyup.enter.native="submitForm"></el-input>
                </el-form-item>
                <el-form-item class='submit'>
                    <el-button type="primary" @click="submitForm('ruleForm')">登 &nbsp;&nbsp;录</el-button>
                </el-form-item>
                </el-form>
                <div class="ifpwd">
                    <!-- <el-checkbox v-model="checked">记住账号密码</el-checkbox> -->
                </div>
            </div>
            
        </div>
        <div class="login_bottom">
            <div>大 数 据 可 视 化 平 台</div>
        </div>
    </div>
</template>

<script>
// import base64 from 'js-base64'
// import md5 from 'js-md5'
export default {
    data() {
        return {
            ruleForm:{
                account:'',
                password:''
            },
            token:'',
            checked:false//是否记住密码
        }
    },
    methods: {
        submitForm () {
           this.axios({
               url:'/api/monitor/user/login',
               method:'POST',
               data:{
                  ...this.ruleForm
               },
               headers:{
                      "Authorization":" "
                }
           }).then( res => {
               if ( res.data.code === 0 ) {
                   this.token = res.data.data
                   sessionStorage.setItem('Authorization',res.data.data)
                //    if(this.checked==true){
                //         localStorage.setItem(md5('name'),Base64.encode(this.ruleForm.account));
                //         localStorage.setItem(md5('password'),Base64.encode(this.ruleForm.password));
                //     }else{
                //         localStorage.removeItem(md5('name'));
                //         localStorage.removeItem(md5('password'));
                //     }
                   this.getUser()  
               }else{
                    
                    this.$alert(res.data.msg, '提示', {
                        confirmButtonText: 'OK',
                    });
                    this.ruleForm.account='';
                    this.ruleForm.password='';
                }
           })
        },
        getUser () {
            this.axios({
                url: '/api/monitor/user',
                method: 'post',
                data:{

                }
            }).then( res => {
                sessionStorage.setItem('user_id',res.data.data.id);
                sessionStorage.setItem('unitId',res.data.data.unitId?res.data.data.unitId:-1);
                sessionStorage.setItem('unitIdChange',res.data.data.unitId?res.data.data.unitId:-1)
                sessionStorage.setItem('user_name',res.data.data.account);
                sessionStorage.setItem('userName',res.data.data.username);
                sessionStorage.setItem('img',res.data.data.avatar);
                sessionStorage.setItem('userType',res.data.data.userType);
                this.getUserType()
            })
        },
        getUserType () {
             this.axios({
                url: '/api/monitor/user/check',
                method: 'post',
                data:{
                    
                }
            }).then( res => { 
                if ( res.data.data ) {
                    sessionStorage.setItem('mapFlag',1);
                }else{
                    sessionStorage.setItem('mapFlag',0);
                }
                this.$router.push('/mapdata')
            })
        }
    },
    computed: {
        
    },
    mounted() {
        // if(localStorage.getItem(md5('name'))){
        //     this.checked=true;
        //     this.ruleForm.account=Base64.decode(localStorage.getItem(md5('name')));
        //     this.ruleForm.password=Base64.decode(localStorage.getItem(md5('password')));
        // }
    },
}
</script>

<style lang="scss">
  .login_box {
    position: absolute;
    width: 572px;
    height: 334px;
    top: calc(50% - 220px);
    left: calc(50% - 286px);
    border: 3px solid #28353e;
    border-radius: 10px;
    .login_box_box{
        margin: 5% 8%;
    }
  }
  
  #login{
    background-color: #232d36;
    background-size:100% 100%;
    height: 100%;
    .login_title{
        font-size: 30px;
        font-weight: 700;
        color: #bebebe;
        margin-bottom: 8%;
    }
  .demo-ruleForm {
    text-align: center;
  }
.el-input input {
      height: 55px!important;
      width: 440px!important;
      font-size: 18px!important;
  }
  /deep/ .el-input .el-input__inner{
    border:none;
    background-color: #2c3a43!important;
    color: #d7d9d8!important;
    font-size: 18px!important;
  }
  input:-webkit-autofill{
    // 　　-webkit-box-shadow: 0 0 0 400px #E8ECED inset;
     //input 背景色     #0C2034根据自己需要替换
      -webkit-box-shadow : 0 0 0 1000px #2c3a43 inset !important;
      //input字体颜色 颜色根据自己要求替换
      -webkit-text-fill-color: #d7d9d8 !important;
    }
  .el-input__inner:focus{
      background-color: #2c3a43!important;
      border: 1PX solid #f8b62c;
      box-shadow: 0 0px 5px 2px #f8b62c;
  }
  /deep/ .el-form-item {
      margin-bottom: 3%;
  }
  .submit{
      position:absolute;
      top: 110%;
      left: calc(50% - 83px);
      .el-button{
          width: 166px;
          height: 55px;
          border: none;
          background-color: #f8b62c;
          color: #000;
          font-size: 24px;
      }
  }
  .login_bottom{
      position:absolute;
      width: 10%;
      height: 10%;
      text-align: center;
      bottom: 2%;
      left: 45%;
      color: #d7d9d8;
    //   &>:nth-of-type(1){
    //       background: url(../assets/image/dingren.png) no-repeat;
    //       width: 70%;
    //       height: 50%;
    //       margin-left:30%;
    //   }
      &>:nth-of-type(1){
          font-size: 18px;
      }
  }
  .ifpwd{
      .el-checkbox__label{
          color: #d7d9d8;
      }
      .el-checkbox__inner{
          background-color: #232d36;
          border-color: #d7d9d8;
      }
  }
}
</style>