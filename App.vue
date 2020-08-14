<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
  font-family: uniicons;
  src: url("/static/uni.ttf");
}
/* #endif */
.test1 {
  width: 750uxp;
  height: 400px;
  background-color: #c3dff0;
}
.test2 {
  width: 750uxp;
  height: 400px;
  background-color: #f0b1c6;
}
.test3 {
  width: 750uxp;
  height: 400px;
  background-color: #c1f0bc;
}
</style>
