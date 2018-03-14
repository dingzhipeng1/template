<template>
  <div class="login_warp_div">

    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" label-position="left"
             class="demo-ruleForm">
      <el-form-item label="用户名" prop="userName">
        <el-input type="password" v-model="ruleForm2.userName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input type="password" v-model="ruleForm2.passWord" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>

      </el-form-item>
    </el-form>
  </div>

</template>

<script>


  export default {
    data() {
      return {
        ruleForm2: {
          userName: '',
          passWord: '',
        },
        rules2: {
          userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
          ],
          passWord: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        var that = this;
        /*    this.axios({
              url: '13123'
            }).then(function () {
              //ajax请求逻辑
            }).catch(function () {

            })*/

        this.$refs[formName].validate((valid) => {
          if (valid) {


            new Promise((r1, r2) => {
              if (this.ruleForm2.userName === "admin" && this.ruleForm2.passWord === "admin") {
                r1(true)
              } else {
                r2(false)
              }
            }).then((data) => {
              this.$store.commit('setlognameobj', {login: true})
              this.$router.push("index")
            }).catch(() => {
              this.$message.error("用户名或密码错误！")
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login_warp_div {
    width: 400px;
    height: 300px;

    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -200px;
    margin-top: -150px;

  }
</style>
