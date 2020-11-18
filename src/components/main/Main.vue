<template>
  <div class="contents-wrap main">
    <p class="main-title ma-0">모두가 그리는 한 컷 MoG!</p>
    <p class="text-h6">지금 그리고 싶은 것이 있나요?</p>
    <v-row justify="center">
      <v-btn
        class="text-h6 rounded-pill"
        depressed
        width="160"
        height="45"
        @click="overlay = !overlay"
        color="pink lighten-2"
        dark
        >let's mog!</v-btn
      >
      <v-overlay :z-index="zIndex" :value="overlay">
        <v-btn
          class="white--text"
          color="pink lighten-2"
          @click="overlay = false"
        >
          캔버스 닫기
        </v-btn>
        <v-card light>
          <canvas-area></canvas-area>
        </v-card>
      </v-overlay>
    </v-row>
    <gallery-wrap :posts="posts"></gallery-wrap>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      overlay: false,
      zIndex: 999,
    };
  },
  components: {
    CanvasArea: () => import('@/components/canvas/Canvas.vue'),
    GalleryWrap: () => import('@/components/gallery/Gallery.vue'),
  },
  computed: { ...mapState(['posts']) },
};
</script>

<style lang="scss" scoped>
.main {
  width: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 200px auto 0;
  .main-title {
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 3.125rem;
  }
  button {
    text-transform: capitalize;
  }
}
</style>
