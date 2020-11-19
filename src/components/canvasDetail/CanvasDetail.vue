<template>
  <div>
    <v-row align="center" class="user-info-area ml-2 mb-2">
      <v-avatar><v-img :src="post.userProfile.img"></v-img></v-avatar>
      <p class="user-name my-0 ml-2">{{ post.userProfile.name }}</p>
    </v-row>
    <v-card>
      <v-img :src="post.contents.img"></v-img>
    </v-card>
    <v-card flat class="mt-3 pa-2">
      <p class="canvas-detail-title text-h5 ">{{ post.contents.subject }}</p>
      <v-btn icon><v-icon>mdi-heart-outline</v-icon></v-btn>
      <p class="canvas-detail-description">{{ post.contents.text }}</p>
    </v-card>
    <canvas-comments :comments="post.comments"></canvas-comments>
  </div>
</template>

<script>
export default {
  name: 'CanvasDetail',
  props: ['post'],
  components: {
    CanvasComments: () =>
      import('@/components/canvasDetail/CanvasComments.vue'),
  },
};
</script>

<style lang="scss" scoped></style>
