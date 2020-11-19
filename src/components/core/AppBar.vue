<template>
  <v-app-bar fixed color="#ffffff" elevate-on-scroll elevation="1">
    <v-row no-gutters justify="space-between" align="center">
      <div class="left-wrap">
        <h1 class="logo mr-2">
          <a href="#"
            ><v-img src="../../assets/logo.svg" width="100"></v-img
          ></a>
        </h1>
      </div>
      <v-text-field
        class="pa-0 mt-6"
        v-model="search"
        placeholder="검색"
        append-icon="mdi-magnify"
        rounded
        dense
        filled
        outlined
        color="pink lighten-2"
      ></v-text-field>
      <div class="right-icon-wrap">
        <v-btn icon>
          <v-icon color="pink lighten-2" size="30" title="팔로우"
            >mdi-heart-outline</v-icon
          >
        </v-btn>
        <v-btn icon>
          <v-icon color="pink lighten-2" size="30" title="나도 그리기"
            >mdi-draw</v-icon
          >
        </v-btn>
        <v-btn icon>
          <router-link to="/sign-in">
            <v-icon color="pink lighten-2" size="30" title="내 계정"
              >mdi-account-outline</v-icon
            >
          </router-link>
        </v-btn>
      </div>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: 'coreAppBar',
};
</script>

<style lang="scss" scoped>
.left-wrap {
  display: flex;
  align-items: center;
}
.v-input {
  max-width: 50%;
}
</style>
