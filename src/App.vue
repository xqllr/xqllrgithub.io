<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/">个人简介</router-link>
      <router-link to="/about">职业技能</router-link>
      <router-link to="/work" >工作经历</router-link>
    </div>

  </div>
</template>
<script>
export default {
   data() {
    return {
      xs: true,
      msg: false,
    };
  },
  methods: {
    chang() {
      this.msg = !this.msg;
      this.xs = !this.xs;
    },
  },
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
body {
    background: #333333;
    padding: 30px 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  padding-bottom: 1rem;
}

#nav {
  position: fixed;
  display: flex;
  justify-content: space-around;
  width: 100%;
  box-sizing: border-box;
  bottom: 0;
  padding: 2% 0;
  background: rgb(	240 255 240);
  color: #333;
}
#nav a {
  font-weight: bold;
  color: #333;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
  h1,h2,h3,h4,h5,h6 {
    text-align: center;
    color: red;
  }
</style>
