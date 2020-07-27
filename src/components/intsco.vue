<template>
    <div>
        <div class="content">
      <img class="content-logo" src="../../public/logo.png" alt="logo" />
      <h1 class="content-title">登录</h1>
      <div class="content-form">
        <form method="post" action onsubmit="return submitTest()">
          <div id="change_margin_1">
            <input
              class="user"
              type="text"
              name="user"
              placeholder="请输入用户名"
              onblur="oBlur_1()"
              onfocus="oFocus_1()"
            />
          </div>
          <!-- input的value为空时弹出提醒 -->
          <p id="remind_1"></p>
          <div id="change_margin_2">
            <input
              class="password"
              type="password"
              name="password"
              placeholder="请输入密码"
              onblur="oBlur_2()"
              onfocus="oFocus_2()"
            />
          </div>
          <!-- input的value为空时弹出提醒 -->
          <p id="remind_2"></p>
          <div id="change_margin_3">
            <input class="content-form-signup" type="submit" value="登录" @click="chang" />
          </div>
        </form>
      </div>

      <div>
        <span class="content-login-description">没有账户？|&nbsp;</span>
        <a class="content-login-link">注册</a>
      </div>
    </div>
    </div>
</template>

<style>
/*重置样式*/
* {
  margin: 0;
  padding: 0;
  border: 0;
}


/*content*/
.content {
  width: 28%;
  margin: 70px auto 0;
  text-align: center;
}
.content-logo {
  width: 80px;
  height: 80px;
}
.content-title {
  margin: 10px 0 25px 0;
  font-size: 2em;
  color: #747474;
  font-weight: normal;
}
.content-form {
  width: 100%;
  padding: 36px 0 20px;
  border: 1px solid #dedede;
  text-align: center;
  background: #fff;
}
.content-form form div {
  margin-bottom: 19px;
}
.content-form form .user,
.content-form form .password {
  width: 77%;
  height: 20px;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #cccbcb;
  border-radius: 7px;
  letter-spacing: 1px;
}
.content-form form input:focus {
  outline: none;
  -webkit-box-shadow: 0 0 5px #0dbfdd;
  box-shadow: 0 0 5px #0dbfdd;
}
.content-form-signup {
  width: 84%;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #cccbcb;
  border-radius: 7px;
  font-size: 1em;
  font-weight: bold;
  color: #fff;
  background: #0dbfdd;
  cursor: pointer;
}
.content-form-signup:hover {
  background: #0cb3d0;
}
.content-form-signup:focus {
  outline: none;
  border: 1px solid #0cb3d0;
}
.content-login-description {
  margin-top: 25px;
  line-height: 1.63636364;
  color: #747474;
  font-size: 0.91666667rem;
}
.content-login-link {
  font-size: 16px;
  color: #0dbfdd;
  text-decoration: none;
}

/*输入框无内容便提示*/
#remind_1,
#remind_2 {
  width: 76%;
  margin: 0 auto 2px;
  text-align: left;
  font-size: 0.2em;
  color: #f00;
}
</style>