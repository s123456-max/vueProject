<template>
  <div>
    <el-form ref="id" :model="forms" :rules="rules" class="login-box">
      <h3 style="text-align: center;">AlexandrMisko</h3>
      <el-form-item label="账号" prop="name">
        <el-input type="text" placeholder="请输入用户名" v-model="forms.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="forms.password"></el-input>
      </el-form-item>
      <el-form-item class="login-button">
        <el-button type="primary" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default{
    name: 'login',
    data(){
      return{
        forms:{
          name:'',
          password:''
        },
        rules:{
          name:[{
            required:true,
            message:'请输入用户名',
            trigger:'blur'
          }],
          password:[{
            required:true,
            message:'请输入密码',
            trigger:'blur'
          }]
        }
      }
    },
    methods:{
      submitForm(){
        this.$refs['id'].validate((valid) =>{
          if(valid){
            sessionStorage.setItem('isLogin','true')
            this.$store.dispatch("asyncUpdateUser",{name:this.forms.name})
            this.$router.push({name:'main',params:{name:this.forms.name}})
          }else{
            if(this.forms.name==''){
              this.$message({
                message: '用户名未填写！',
                type: 'warning'
              })
            }else{
              this.$message({
                message: '密码未填写！',
                type: 'warning'
              })
            }
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-box{
    width: 350px;
    margin: 150px auto;
    border: 1px solid #DCDFE6;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px gold;
  }
  .login-button{
    text-align: center;
  }
</style>
