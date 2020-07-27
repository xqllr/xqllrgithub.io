<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">个人简介</router-link>|
      <router-link to="/about">职业技能</router-link>|
      <router-link to="/work" >工作经历</router-link> 
    </div>
    <router-view/>
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
  padding: 30px 0;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #FFFFFf;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
