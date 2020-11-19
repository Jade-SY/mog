<template>
  <div class="canvas-text-wrap">
    <v-row align="center" class="my-info-area ml-2 mb-2">
      <v-avatar><v-img :src="myProfile.img"></v-img></v-avatar>
      <p class="my-name my-0 ml-2">{{ myProfile.name }}</p>
    </v-row>
    <v-text-field
      label="Solo"
      flat
      hide-details
      placeholder="제목을 입력해주세요"
      solo
      v-model="canvasTitle"
      class="canvas-title-area mb-2"
    ></v-text-field>
    <v-textarea
      solo
      flat
      hide-details
      no-resize
      v-model="canvasText"
      class="canvas-text-area mb-2"
    ></v-textarea>
    <v-text-field
      label="Solo"
      flat
      hide-details
      placeholder="태그를 입력해주세요. 띄어쓰기로 여러개 작성 가능"
      solo
      v-model="canvasTags"
      class="canvas-tag-area mb-3"
    ></v-text-field>
    <v-hover v-slot="{ hover }">
      <v-btn
        :color="hover ? 'pink lighten-2' : '#282828'"
        rounded
        depressed
        class="white--text mogSave px-8 py-6 mb-2"
        @click="upLoadNewCanvas"
        >올리기</v-btn
      >
    </v-hover>
  </div>
</template>

<script>
export default {
  name: 'CanvasText',
  props: ['myProfile'],
  data() {
    const canvasForm = Object.freeze({
      id: 1,
      img: '',
      subject: this.canvasTitle,
      text: this.canvasText,
      tags: this.canvasTags,
    });

    return {
      newText: '',
      canvasTitle: '',
      canvasText: '',
      canvasTags: '',
      canvasForm,
    };
  },
  methods: {
    upLoadNewCanvas() {
      this.$store.commit('pushNewCanvas', this.canvasForm);
    },
  },
};
</script>

<style lang="scss" scoped>
.canvas-text-wrap {
  display: flex;
  flex-direction: column;
}
.canvas-title-area,
.canvas-text-area,
.canvas-tag-area {
  box-shadow: 0 4px 6px rgba(110, 110, 145, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
}
.mogSave {
  align-self: flex-end;
  transition: all 0.3s;
}
</style>
