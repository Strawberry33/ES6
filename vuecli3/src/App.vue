<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
       <router-link to="/mine">我的</router-link> |
        <router-link :to="{name:'test1', params:{name:'sunruyue', age:18}}">子路由1</router-link> |
         <router-link to="/mine/test2">子路由2</router-link> |
        <router-link to="/testUrl/6/lisi">URL传参</router-link> |
        <router-link to="/xx/8/zhangsan">重定向</router-link> |
        <router-link to="/minealias">别名</router-link> |
         <router-link to="/movie">电影列表</router-link> |
         <router-link to="/vuex">Vuex</router-link>


    </div>
   <transition name="move">
      <router-view/>
   </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.move-enter{
      opacity: 0;
}
.move-enter-active{
  transition: opacity 1s ease;
}
.move-enter-to{
   opacity: 1;
}
.move-leave{
    transform: translateX(0);
}
.move-leave-active{
   transition: transform 1s ease;
}
.move-leave-to{
  transform: translateX(100%);
}
</style>
