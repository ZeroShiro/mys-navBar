<template>
  <view>
    <!-- center1 flex:1 根据两边大小 分配剩余空间 -->
    <mvBar :mysNavConfig="mysNavConfig" @onLeftClick="onLeftClick" @onRightClick="onRightClick">
      <view slot="center2" class="soltCenter" @tap="soltCenter">
        <image class="img" src="/static/map.png"></image>
        <text>居中2</text>
      </view>
    </mvBar>
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
        /* 站位开启 */
        navPadding: true,
        /* 背景 */
        bgColor: "#ffffff",
        /* 开启单页访问时 ，显示首页图标 */
        isHome: true,
        /* 固定导航 */
        navFixed: true,
        /* type1 左侧文字配置 */
        leftText: {
          text: "MENU",
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
    soltCenter() {
      console.log("soltCenter");
      uni.showToast({
        title: "soltCenter",
        duration: 1000,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.soltCenter {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
  padding-left: 6px;
}
.img {
  width: 16px;
  height: 16px;
}
</style>
