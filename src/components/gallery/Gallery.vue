<template>
  <div class="gallery-wrap">
    <v-row>
      <gallery-item
        v-for="(content, i) in posts"
        :key="i"
        :imgSrc="content.content.img"
      ></gallery-item>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: ['posts'],
  components: {
    GalleryItem: () => import('../gallery/GalleryItem.vue'),
  },
};
</script>

<style lang="scss" scoped></style>
