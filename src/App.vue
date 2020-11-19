<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
#app {
  color: #333333;
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    border: 0;
    outline: none;
  }
}
</style>
