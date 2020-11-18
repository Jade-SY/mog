<template>
  <div class="gallery-item-wrap">
    <div class="gallery-item">
      <v-img :src="imgSrc"></v-img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryItem',
  props: ['imgSrc'],
};
</script>

<style lang="scss" scoped></style>
