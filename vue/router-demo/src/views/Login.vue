<template>
    <div class="login">
      <div class="login-wrap">
  
        <div class="username flex">
          <label>账号：</label>
          <input type="text" v-model="username">
        </div>
        <div class="password flex">
          <label>密码：</label>
          <input type="text" v-model="password">
        </div>
  
        <div class="btn" @click="signIn">登录</div>
  
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref }  from 'vue'
  import { useRouter } from 'vue-router'
  const username = ref('admin')
  const password = ref('123')
  const router = useRouter()
  const signIn = () => {
    // console.log(username.value, password.value);
    if(username.value === 'admin' && password.value === '123'){
      router.push('./home')
    }
  }
  </script>
  
  <style lang="css" scoped>
  .login{
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom, #fff, #6ec5f0);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-wrap{
    width: 350px;
  }
  .flex{
    height: 50px;
    display: flex;
    align-items: center;
  }
  label{
    width: 60px;
  }
  input{
    flex: 1;
    font-size: 20px;
    padding: 5px;
  }
  .btn{
    width: 80%;
    font-size: 20px;
    padding: 10px 0;
    background-color: #ac4bf0;
    color: #fff;
    text-align: center;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 100px;
    cursor: pointer;
  }
  </style>