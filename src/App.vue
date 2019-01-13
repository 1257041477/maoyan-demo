<template>
  <div id="app">
		<navbar></navbar>
		<!-- <tabbar></tabbar> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "../static/myfont/font.css";
.cinema-list .list-wrap .title-block .label-block>div {
  
    font-size: 12px;
}
</style>
