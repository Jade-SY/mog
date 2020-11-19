<template>
  <div>
    <v-card v-for="(comment, i) in comments" :key="i">
      <p>{{ comment.name }}</p>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'CanvasComments',
  props: ['comments'],
};
</script>

<style lang="scss" scoped></style>
