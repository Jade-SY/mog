<template>
  <v-container>
    <v-row justify="space-between" class="pop-tags-wrap pb-10 my-10">
      <v-btn
        :color="randomBgColor()"
        depressed
        v-for="(tag, i) in tags"
        :key="i"
        class="text"
        >{{ tag.tagName }}</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PopularHashtags',
  data() {
    return {
      tags: [
        { tagName: '인기태그1' },
        { tagName: '인기태그2' },
        { tagName: '인기태그3' },
        { tagName: '인기태그4' },
        { tagName: '인기태그5' },
        { tagName: '인기태그6' },
      ],
      bgColor: [
        '#E1F5DE',
        '#F5E5DE',
        '#DEE0F5',
        '#F5DEEE',
        '#CEE4F6',
        '#E6F6CE',
      ],
    };
  },
  methods: {
    randomBgColor() {
      let randomNum = Math.random() * this.bgColor.length;
      let i = Math.floor(randomNum);
      console.log(i);
      return this.bgColor[i];
    },
  },
};
</script>

<style lang="scss" scoped>
.pop-tags-wrap {
  max-width: 800px;
  margin: 0 auto;
}
</style>
