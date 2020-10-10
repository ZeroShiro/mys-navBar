<template>
  <view>
    <mvBar :mysNavConfig="mysNavConfig" @onLeftClick="onLeftClick" @onRightClick="onRightClick">
      <view slot="left" class="left" @tap="soltLeft">
        <image class="img" src="/static/map.png"></image>
      </view>
    </mvBar>
    <view class="test1" @click="goBack">返回</view>
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
        /* 站位开启 */
        navPadding: true,
        /* 背景 */
        bgColor: "#ffffff",
        /* 开启单页访问时 ，显示首页图标 */
        isHome: true,
        /* 固定导航 */
        navFixed: true,
        /* type1 左侧文字配置 */
        // leftText: {
        //   text: "MENU",
        //   color: "",
        // fontSize: "16px", // px upx rpx
        //   fontWeight: "", // 100 - 700
        // },
        /* 标题 （屏幕中心居中 两边图标中心居中使用slot center1） */
        navTitle: {
          text: "DEMO8",
          color: "",
          fontSize: "16px", // px upx rpx
          fontWeight: "", // 100 - 700
        },
        /* 左侧返回自定义事件开启 */
        isCustomFn: true,
        /* 自定义左侧图标 */
        leftIconPath: "/static/menus.png",
        /* 自定义右侧图标 */
        rightIconPath: "/static/searchB.png",
      },
    };
  },
  methods: {
    /* 左侧返回自定义事件 */
    onLeftClick() {
      console.log("onLeftClick");
      uni.showToast({
        title: "onLeftClick",
        duration: 1000,
      });
    },
    /* 点击右侧 */
    onRightClick() {
      console.log("onRightClick");
    },
    soltLeft() {
      console.log("soltLeft");
      uni.showToast({
        title: "soltLeft",
        duration: 1000,
      });
    },
    goBack() {
      uni.navigateBack();
    },
  },
};
</script>

<style lang="scss" scoped>
.left {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  align-items: center;
  padding-left: 6px;
}
.img {
  width: 16px;
  height: 16px;
}
</style>
