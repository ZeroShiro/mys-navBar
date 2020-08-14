<template>
  <view>
    <!-- 不固定位置 -->
    <mvBar :mysNavConfig="mysNavConfig"></mvBar>
    <view class="test1"></view>
    <view class="test2"></view>
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
        /* 占位 背景色 */
        navPadding: true,
        /* 开启单页显示首页图标 */
        isHome: true,
        /* 背景 */
        bgColor: "#f8f8f8",
        /* 固定导航  */
        navFixed: false,
        /* 标题 （屏幕中心居中 两边图标中心居中使用slot center1） */
        navTitle: {
          text: "DEMO2",
          color: "",
          fontSize: "32upx", // px upx rpx
          fontWeight: "", // 100 - 700
        },
        /* 左侧文字 */
        leftText: {
          text: "返回",
          color: "",
          fontSize: "", // px upx rpx, // px upx rpx
          fontWeight: "", // 100 - 700
        },
        /* 定义右侧图标 */
        rightIconPath: "/static/s.png",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
