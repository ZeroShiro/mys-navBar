<template>
  <view>
    <mvBar
      :mysNavConfig="mysNavConfig"
      @onLeftClick="onLeftClick"
      @onRightClick="onRightClick"
      @changeInput="changeInput"
      @clearInput="clearInput"
      @submitInput="submitInput"
      @clickInput="clickInput"
    ></mvBar>
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
          text: "返回",
          color: "",
          fontSize: "16px", // px upx rpx
          fontWeight: "", // 100 - 700
        },
        /* 搜索框配置 */
        searchConfig: {
          value: "",
          confirmType: "search",
          placeholder: "输入搜索内容",
          bgColor: "#f8f8f8",
          // marginRight: "",
          // marginLeft: "",
          // disabled: true,
          // placeholderStyle: 'color:red;',
        },
        /* 自定义右侧图标 */
        rightIconPath: "/static/s.png",
      },
    };
  },
  methods: {
    onLeftClick() {
      console.log("onLeftClick");
    },
    /* 点击右侧 */
    onRightClick() {
      console.log("onRightClick");
    },
    /* 输入框改变 */
    changeInput(e) {
      let value = e.detail.value;
      this.mysNavConfig.searchConfig.value = value;
      console.log(value);
    },
    /* 清空输入框 */
    clearInput() {
      this.mysNavConfig.searchConfig.value = "";
      console.log("清空");
    },
    /* disabled: true 点击搜索框 */
    clickInput() {
      console.log("disabled: true");
    },
    /* 提交 */
    submitInput(e) {
      let value = e.detail.value;
      console.log(value, "提交");
      uni.showModal({
        title: "ms_nav",
        content: "提交：" + JSON.stringify(value),
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
