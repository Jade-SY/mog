<template>
  <div class="home">
   <core-app-bar></core-app-bar>
   <core-view></core-view>
   <core-footer></core-footer>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
    coreAppBar: ()=> import('@/components/core/AppBar.vue'),
    coreView: ()=> import('@/components/core/View.vue'),
    coreFooter: ()=> import('@/components/core/Footer.vue')
  }
};
</script>
