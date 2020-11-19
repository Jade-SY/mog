<template>
  <div class="gallery-item-wrap">
    <div class="gallery-item" @click="showCanvasDetail">
      <v-img :src="post.contents.img"></v-img>
    </div>
    <v-overlay :z-index="zIndex" :value="overlay">
      <v-btn
        class="white--text"
        color="pink lighten-2"
        @click="overlay = false"
      >
        캔버스 닫기
      </v-btn>
      <v-card class="pa-4" max-width="800" light color="#fbf9fa">
        <canvas-detail :post="post"></canvas-detail>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: 'GalleryItem',
  props: ['post'],
  components: {
    CanvasDetail: () => import('@/components/canvasDetail/CanvasDetail.vue'),
  },
  data() {
    return {
      overlay: false,
      zIndex: 999,
    };
  },
  methods: {
    showCanvasDetail() {
      this.overlay = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery-item {
  min-width: 200px;
  max-width: 400px;
  min-height: 200px;
  max-height: 400px;
  border-radius: 20px;
  border: 1px solid red;
}
</style>
