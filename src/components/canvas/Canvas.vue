<template>
  <v-container>
    <v-row class="canvas-wrap" justify="space-between">
      <v-col cols="5">
        <canvas
          class="mogCanvas"
          ref="canvas"
          @click="fillCanvas"
          @mousedown="paintingStart"
          @mouseup="paintingEnd"
          @mousemove="paintingNow"
        ></canvas>
        <v-row
          class="tool-set mt-2"
          justify="space-around"
          no-gutters="no-gutters"
        >
          <v-btn icon="icon" class="controls-btn mogBrush" @click="brushMode">
            <v-icon>mdi-brush</v-icon>
          </v-btn>
          <v-btn icon="icon" class="controls-btn mogFill" @click="fillMode">
            <v-icon>mdi-format-color-fill</v-icon>
          </v-btn>
          <v-btn icon="icon" class="controls-btn mogEraser" @click="eraserMode">
            <v-icon>mdi-eraser</v-icon>
          </v-btn>
          <span class="text-caption">{{ brushSizeValue.min }}</span>
          <input
            class="mogRange"
            type="range"
            :min="brushSizeValue.min"
            :max="brushSizeValue.max"
            value="1"
            step="1"
            @input="brushResize"
          />
          <span class="text-caption">{{ brushSizeValue.max }}</span>
          <v-btn
            class="controls-btns mogClear font-weight-bold pa-1"
            title="전체 지우기"
            text
            color="error"
            @click="clearAll"
            >전체 지우기</v-btn
          >
        </v-row>
      </v-col>
      <v-col cols="5">
        <v-color-picker dot-size="20" @input="changeColor"></v-color-picker>
      </v-col>
    </v-row>
    <canvas-text :myProfile="myProfile"></canvas-text>
  </v-container>
</template>

<script>
export default {
  name: 'CanvasArea',
  props: ['myProfile'],
  components: {
    CanvasText: () => import('@/components/canvas/CanvasText.vue'),
  },
  data() {
    return {
      brushSizeValue: {
        min: 1,
        max: 10,
      },
      isPainting: false,
      isFillMode: false,
      canvas: '',
      ctx: '',
      brushSize: 1,
      selectedColor: '#2b2b2b',
    };
  },
  methods: {
    paintingStart() {
      this.isPainting = true;
    },
    paintingEnd() {
      this.isPainting = false;
    },
    paintingNow(e) {
      const x = e.offsetX;
      const y = e.offsetY;
      // console.log(x, y, this.ctx, this.canvas);
      this.ctx.strokeStyle = this.selectedColor;
      this.ctx.fillStyle = this.selectedColor;
      this.ctx.lineWidth = this.brushSize;
      if (this.isPainting) {
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
      } else {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
      }
    },
    changeColor(e) {
      this.selectedColor = e.hexa;
    },
    brushResize(e) {
      this.brushSize = e.target.value;
    },
    brushMode() {
      this.isFillMode = false;
    },
    fillMode() {
      this.isFillMode = true;
    },
    eraserMode() {
      if (!this.isFillMode) {
        this.selectedColor = '#ffffff';
      } else {
        this.isFillMode = false;
        this.selectedColor = '#ffffff';
      }
    },

    fillCanvas() {
      if (this.isFillMode) {
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      }
    },
    clearAll() {
      this.ctx.fillStyle = '#fff';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.canvas.width = 400;
    this.canvas.height = 400;
    this.ctx = this.canvas.getContext('2d');
  },
};
</script>

<style lang="scss" scoped="scoped">
.canvas-wrap {
  min-width: 420px;
  margin: 0 auto;
}
.mogCanvas {
  width: 400px;
  height: 400px;
  /* 이 사이즈는 사용자가 시각적으로 보기위한 css 사이즈일 뿐이고
  js쪽 canvas 엘리먼트에도 동일한 사이즈값을 줘야함. 실제 픽셀을 다루는
  영역값 지정은 js가 담당하는 것. js쪽에 사이즈 미지정시 이상하게 움직임*/
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(110, 110, 145, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
}
.tool-set {
  width: 400px;
}
.v-color-picker {
  box-shadow: 0 4px 6px rgba(110, 110, 145, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
