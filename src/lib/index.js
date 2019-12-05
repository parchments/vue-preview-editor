//index.js
import previewEditor from './PreviewEditor.vue'
const PreviewEditor = {
  install: function(Vue) {
    Vue.component(previewEditor.name, previewEditor)
  }
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(previewEditor)
}
// 导出模块
export default PreviewEditor
