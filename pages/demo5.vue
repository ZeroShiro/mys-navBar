<template>
  <view>
    <!-- btn2 透明占位会出现背景色 -->
    <mvBar :mysNavConfig="mysNavConfig" :scrollTop="scrollTop"></mvBar>
    <view class="test2"></view>
    <view class="test1"></view>
    <view class="test3"></view>
  </view>
</template>

<script>
import mvBar from "@/components/mys_navBar/mysNavBar";
export default {
  components: {
    mvBar,
  },
  data() {
    return {
      mysNavConfig: {
        /* 占位开启  透明占位会出现背景色*/
        // navPadding: false,
        /* 背景颜色 */
        // bgColor: "#f8f8f8",
        /* 渐变背景 */
        bgImage: "linear-gradient(-90deg, #d4fff3 0%, #91c9ff 100%)",
        /* 图片背景 */
        // bgImage: "url(https://www.baidu.com/img/flexible/logo/pc/result@2.png)",
        /* 开启单页访问时 ，显示首页图标 */
        isHome: true,
        /* 固定导航 */
        navFixed: true,
        /* 渐变开启 */
        isOpacity: true,
        /* 渐变延时效果 */
        opacityTime: 200,
        /* type1 左侧文字配置 */
        leftText: {
          text: "返回",
          color: "",
          fontSize: "16px", // px upx rpx
          fontWeight: "", // 100 - 700
        },
        /* 标题 （屏幕中心居中 两边图标中心居中使用slot center1） */
        navTitle: {
          text: "DEMO5",
          color: "",
          fontSize: "16px", // px upx rpx
          fontWeight: "", // 100 - 700
        },
        /* 自定义右侧图标 */
        rightIconPath: "/static/s.png",
      },
      scrollTop: 0,
    };
  },
  onPageScroll({ scrollTop }) {
    this.scrollTop = scrollTop;
  },
};
</script>

<style lang="scss" scoped></style>
