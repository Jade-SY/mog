<template>
  <v-app>
   <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
  },

  data: () => ({
    //
  })
};
</script>
<style lang="scss">
#app{
  margin:0;
  padding:0;
  color: #282828;
  a{ text-decoration: none; color: inherit; }
  button{
    border:0;
    outline:none;
  }
}
</style>
