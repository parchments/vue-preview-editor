<template>
  <div id="app">
<<<<<<< HEAD
    <previewEditor :previewContent="msg" :previewTypes="types"></previewEditor>
=======
    <PreviewEditor :previewContent="msg" :previewTypes="types"></PreviewEditor>
>>>>>>> 4cce886c4042be7977bd6b7e7580f4ddc545c285
  </div>
</template>

<script>
<<<<<<< HEAD
  import PreviewEditor from './lib/PreviewEditor.vue'
export default {
  components: {
    'previewEditor': PreviewEditor
  },
=======
export default {
>>>>>>> 4cce886c4042be7977bd6b7e7580f4ddc545c285
  name: 'app',
  data () {
    return {
      //预览类型数组
      types :[{
        type: 'iPhone5',
        boxWidth: 320,
        boxHeight: 568,
      },{
        type: 'iPhone6/7/8',
        boxWidth: 375,
        boxHeight: 667,
      }],
      msg: `<p style="line-height: 150%; text-indent: 32px;">
    <span style="line-height: 150%; font-family: 宋体,SimSun; font-size: 16px;">受委托，本公司定于2019年11月25日下午15时在文山市三七药物产业园区文山-中国中药生物谷发展中心8幢文山三七拍卖中心二楼电子竞价大厅对如下标的进行拍卖，现将有关事项公告如下：</span>
</p>
<p style="line-height: 150%; text-indent: 32px;">
    <span style="line-height: 150%; font-family: 宋体,SimSun; font-size: 16px;"><strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">一、拍卖标的：</span></strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">三七一批（详细清单备索）</span></span>
</p>
<p style="color: rgb(0, 0, 0); line-height: 150%; text-indent: 2em; font-size: 14px; font-style: normal; font-weight: normal; margin-top: 0px; margin-bottom: 0px;">
    <span style="line-height: 150%; font-family: 宋体,SimSun; font-size: 16px;">&nbsp;</span>
</p>
<p style="color: rgb(0, 0, 0); line-height: 150%; text-indent: 2em; font-family:;">
    <span style="font-family: 宋体,SimSun; font-size: 16px;"><strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">二、拍卖标的展示时间</span></strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">：2019年11月20日至2019年11月21日(来电预约)</span></span>
</p>
<p style="color: rgb(0, 0, 0); line-height: 150%; text-indent: 2em; font-family:;">
    <span style="line-height: 150%; font-family: 宋体,SimSun; font-size: 16px;">&nbsp;</span>
</p>
<p style="color: rgb(0, 0, 0); line-height: 150%; text-indent: 2em; font-family:;">
    <span style="font-family: 宋体,SimSun; font-size: 16px;"><strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">三、标的展示地点</span></strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">：文山三七拍卖中心一楼展示厅</span></span>
</p>
<p style="color: rgb(0, 0, 0); line-height: 150%; text-indent: 2em; font-family:;">
    <span style="line-height: 150%; font-family: 宋体,SimSun; font-size: 16px;">&nbsp;</span>
</p><p style="line-height: 150%; text-indent: 32px;">
    <span style="line-height: 150%; font-family: 宋体,SimSun; font-size: 16px;">受委托，本公司定于2019年11月25日下午15时在文山市三七药物产业园区文山-中国中药生物谷发展中心8幢文山三七拍卖中心二楼电子竞价大厅对如下标的进行拍卖，现将有关事项公告如下：</span>
</p>
<p style="line-height: 150%; text-indent: 32px;">
    <span style="line-height: 150%; font-family: 宋体,SimSun; font-size: 16px;"><strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">一、拍卖标的：</span></strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">三七一批（详细清单备索）</span></span>
</p>
<p style="color: rgb(0, 0, 0); line-height: 150%; text-indent: 2em; font-size: 14px; font-style: normal; font-weight: normal; margin-top: 0px; margin-bottom: 0px;">
    <span style="line-height: 150%; font-family: 宋体,SimSun; font-size: 16px;">&nbsp;</span>
</p>
<p style="color: rgb(0, 0, 0); line-height: 150%; text-indent: 2em; font-family:;">
    <span style="font-family: 宋体,SimSun; font-size: 16px;"><strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">二、拍卖标的展示时间</span></strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">：2019年11月20日至2019年11月21日(来电预约)</span></span>
</p>
<p style="color: rgb(0, 0, 0); line-height: 150%; text-indent: 2em; font-family:;">
    <span style="line-height: 150%; font-family: 宋体,SimSun; font-size: 16px;">&nbsp;</span>
</p>
<p style="color: rgb(0, 0, 0); line-height: 150%; text-indent: 2em; font-family:;">
    <span style="font-family: 宋体,SimSun; font-size: 16px;"><strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">三、标的展示地点</span></strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">：文山三七拍卖中心一楼展示厅</span></span>
</p>
<p style="color: rgb(0, 0, 0); line-height: 150%; text-indent: 2em; font-family:;">
    <span style="line-height: 150%; font-family: 宋体,SimSun; font-size: 16px;">&nbsp;</span>
</p><p style="line-height: 150%; text-indent: 32px;">
    <span style="line-height: 150%; font-family: 宋体,SimSun; font-size: 16px;">受委托，本公司定于2019年11月25日下午15时在文山市三七药物产业园区文山-中国中药生物谷发展中心8幢文山三七拍卖中心二楼电子竞价大厅对如下标的进行拍卖，现将有关事项公告如下：</span>
</p>
<p style="line-height: 150%; text-indent: 32px;">
    <span style="line-height: 150%; font-family: 宋体,SimSun; font-size: 16px;"><strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">一、拍卖标的：</span></strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">三七一批（详细清单备索）</span></span>
</p>
<p style="color: rgb(0, 0, 0); line-height: 150%; text-indent: 2em; font-size: 14px; font-style: normal; font-weight: normal; margin-top: 0px; margin-bottom: 0px;">
    <span style="line-height: 150%; font-family: 宋体,SimSun; font-size: 16px;">&nbsp;</span>
</p>
<p style="color: rgb(0, 0, 0); line-height: 150%; text-indent: 2em; font-family:;">
    <span style="font-family: 宋体,SimSun; font-size: 16px;"><strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">二、拍卖标的展示时间</span></strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">：2019年11月20日至2019年11月21日(来电预约)</span></span>
</p>
<p style="color: rgb(0, 0, 0); line-height: 150%; text-indent: 2em; font-family:;">
    <span style="line-height: 150%; font-family: 宋体,SimSun; font-size: 16px;">&nbsp;</span>
</p>
<p style="color: rgb(0, 0, 0); line-height: 150%; text-indent: 2em; font-family:;">
    <span style="font-family: 宋体,SimSun; font-size: 16px;"><strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">三、标的展示地点</span></strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">：文山三七拍卖中心一楼展示厅</span></span>
</p>
<p style="color: rgb(0, 0, 0); line-height: 150%; text-indent: 2em; font-family:;">
    <span style="line-height: 150%; font-family: 宋体,SimSun; font-size: 16px;">&nbsp;</span>
</p><p style="line-height: 150%; text-indent: 32px;">
    <span style="line-height: 150%; font-family: 宋体,SimSun; font-size: 16px;">受委托，本公司定于2019年11月25日下午15时在文山市三七药物产业园区文山-中国中药生物谷发展中心8幢文山三七拍卖中心二楼电子竞价大厅对如下标的进行拍卖，现将有关事项公告如下：</span>
</p>
<p style="line-height: 150%; text-indent: 32px;">
    <span style="line-height: 150%; font-family: 宋体,SimSun; font-size: 16px;"><strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">一、拍卖标的：</span></strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">三七一批（详细清单备索）</span></span>
</p>
<p style="color: rgb(0, 0, 0); line-height: 150%; text-indent: 2em; font-size: 14px; font-style: normal; font-weight: normal; margin-top: 0px; margin-bottom: 0px;">
    <span style="line-height: 150%; font-family: 宋体,SimSun; font-size: 16px;">&nbsp;</span>
</p>
<p style="color: rgb(0, 0, 0); line-height: 150%; text-indent: 2em; font-family:;">
    <span style="font-family: 宋体,SimSun; font-size: 16px;"><strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">二、拍卖标的展示时间</span></strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">：2019年11月20日至2019年11月21日(来电预约)</span></span>
</p>
<p style="color: rgb(0, 0, 0); line-height: 150%; text-indent: 2em; font-family:;">
    <span style="line-height: 150%; font-family: 宋体,SimSun; font-size: 16px;">&nbsp;</span>
</p>
<p style="color: rgb(0, 0, 0); line-height: 150%; text-indent: 2em; font-family:;">
    <span style="font-family: 宋体,SimSun; font-size: 16px;"><strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">三、标的展示地点</span></strong><span style="line-height: 150%; font-family: 宋体; font-size: 16px;">：文山三七拍卖中心一楼展示厅</span></span>
</p>
<p style="color: rgb(0, 0, 0); line-height: 150%; text-indent: 2em; font-family:;">
    <span style="line-height: 150%; font-family: 宋体,SimSun; font-size: 16px;">&nbsp;</span>
</p>`
    }
  }
}
</script>
