<template>
  <div class="gallery-wrap">
    <h1 class="gallery-title text-h5 mb-10">
      <span class="new">New</span>모두의 <span>MoG</span>
    </h1>
    <v-row>
      <gallery-item
        v-for="(post, i) in posts"
        :key="i"
        :post="post"
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

<style lang="scss" scoped>
.gallery-wrap {
  margin-top: 120px;
  max-width: 1590px;
}
.gallery-title {
  position: relative;
  .new {
    position: absolute;
    top: -33px;
    border: 3px solid #f06292;
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
    color: #f06292;
    line-height: 25px;
    padding: 0px 10px;
  }
  span {
    font-weight: bold;
  }
}
</style>
