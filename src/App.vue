<template>
  <div id="app">
    <router-link active-class="active" to="/china">China</router-link>
    <router-link active-class="active" to="/guangdong">广东省</router-link>
    <router-link active-class="active" to="/guangzhou">广州市</router-link>
    <router-link active-class="active" to="/conghua">从化区</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  background-color: black;
}

#app a {
  margin: 10px;
  font-size: 30px;
  color: white;
}
</style>
