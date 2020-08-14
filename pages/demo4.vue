<template>
  <view>
    <!-- 胶囊 -->
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
        /* 占位开启  */
        // navPadding: true,
        /* 背景 */
        // bgColor: "#f8f8f8",
        /* 开启单页显示首页图标 */
        isHome: true,
        /* 固定导航  */
        navFixed: true,
        /* 标题 （屏幕中心居中 两边图标中心居中使用slot center1） */
        navTitle: {
          text: "DEMO4",
          color: "",
          fontSize: "16px", // px upx rpx
          fontWeight: "", // 100 - 700
        },
        btnType: "type2",
        /* type2 按钮 */
        type2Config: {
          // 左图标
          leftPath: "/static/back_w.png",
          // 右图标
          rightPath: "/static/home.png",
          // 圆角
          radius: "40rpx",
        },
        /* 定义右侧图标 */
        rightIconPath: "/static/s.png",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
