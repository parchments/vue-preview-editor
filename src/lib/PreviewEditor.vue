<template>
  <div :style="{'transform': 'scale(' + previewScale + ')','width': boxWidth + 'px','height': boxHeight + 'px'}">
    <div v-if="previewSizes.length > 0 || previewTypes.length > 0" class="header">
      <span v-if="previewTypes.length > 0" style="padding: 23.5% 5.3% 21% 5.3%;box-sizing: content-box;">
        <span>预览尺寸</span>
        <select v-model="previewType" @change="choseSelect(previewType)">
          <option :value="item" v-for="item in previewTypes" :key="item.type">
            {{item.type}}
          </option>
        </select>
        <span class="input-box">
          <input type="text" v-model="boxWidth" disabled="disabled"> x
          <input type="text" v-model="boxHeight" disabled="disabled">
        </span>
      </span>
      <!-- 如果单纯只需要一个显示框，不需要手机背景图可不传参 -->
      <span v-if="previewSizes.length > 0">
        <span> 缩放尺寸</span>
        <select v-model="previewScale">
          <option :value="item.key" v-for="item in previewSizes" :key="item.key">{{item.key}}</option>
        </select>
      </span>
    </div>
    <div class="content"
		:style="{'transform': 'scale(' + previewScale + ')','width': boxWidth + 'px','height': boxHeight + 'px', backgroundImage: `url(${img})`}"
		style="padding: 23.5% 5.3% 21% 5.3%;transform-origin: 50% 0 0; background-repeat: no-repeat; background-size: 100% 100%;">
      <div
      style="overflow-x: hidden;transform-origin: 50% 0 0; border: 1px solid #efefef;"
      :style="{'transform': 'scale(' + previewScale + ')','width': boxWidth + 'px','height': boxHeight + 'px'}"
      v-html="previewContent">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviewEditor',
  props: {
    //富文本html
    previewContent: {
      type: String,
      default: '',
      required: true
    },
    //预览类型、建议使用英文或数字
    previewTypes: {
      type: Array,
      default: Array,
      required: false
    },
    //预览尺寸
    previewSizes: {
      type: Array,
      default: Array,
      required: false
    }
  },
  data() {
    return {
      img: require('../assets/mobile-bg.png'),
      //默认为iPhone6/7/8的预览尺寸
      boxWidth: 375,
      boxHeight: 667,
      //默认显示放大倍数
      previewScale: 1,
      //默认预览类型为iPhone6/7/8
      previewType: {
        type: 'iPhone6/7/8',
        boxWidth: 375,
        boxHeight: 667,
      }
    }
  },
  methods: {
    //选择预览类型
    choseSelect(item){
      this.boxWidth = item.boxWidth
      this.boxHeight = item.boxHeight
    }
  }
}
</script>
<style scoped>
  .header{
    font-size: 16px;
    /* text-align: center; */
    margin-bottom: 10px;
  }
  .input-box input{
    padding: 2px 3px;
    text-align: center;
    width: 33px;
    border: 1px solid #ccc;
  }
/* 滚动条凹槽的颜色，还可以设置边框属性 */
::-webkit-scrollbar-track-piece {
  background-color:#f8f8f8;
}
/* 滚动条的宽度 */
::-webkit-scrollbar {
  width:4px;
  height:4px;
  border-radius: 4px;
}
/* 滚动条的设置 */
::-webkit-scrollbar-thumb {
  background-color:#ddd;
  background-clip:padding-box;
  min-height:28px;
}
::-webkit-scrollbar-thumb:hover {
  background-color:#aaa;
}
</style>
