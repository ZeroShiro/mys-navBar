<template>
  <view class="nv_demo">
    <mvBar :mysNavConfig="mysNavConfig"></mvBar>
    <view class="tag">简单使用</view>
    <view class="demo" @click="go('/pages/demo1')">
      <view class="text">1.固定位置,占位</view>
      <image class="img" src="/static/back_r.png" />
    </view>
    <view class="demo" @click="go('/pages/demo2')">
      <view class="text">2.不固定位置,占位</view>
      <image class="img" src="/static/back_r.png" />
    </view>
    <view class="demo" @click="go('/pages/demo3')">
      <view class="text">3.透明导航,不占位</view>
      <image class="img" src="/static/back_r.png" />
    </view>
    <view class="tag">小程序版</view>
    <view class="demo" @click="go('/pages/demo4')">
      <view class="text">1.小程序版,胶囊button</view>
      <image class="img" src="/static/back_r.png" />
    </view>
    <view class="tag">渐变使用</view>
    <view class="demo" @click="go('/pages/demo5')">
      <view class="text">1.透明渐变导航</view>
      <image class="img" src="/static/back_r.png" />
    </view>
    <view class="tag">搜索框使用</view>
    <view class="demo" @click="go('/pages/demo6')">
      <view class="text">1.导航栏带搜索框</view>
      <image class="img" src="/static/back_r.png" />
    </view>
    <view class="tag">自定义图标事件</view>
    <view class="demo" @click="go('/pages/demo7')">
      <view class="text">1.自定义图标事件</view>
      <image class="img" src="/static/back_r.png" />
    </view>
    <view class="tag">插槽使用</view>
    <view class="demo" @click="go('/pages/demo8')">
      <view class="text">1.左侧插槽</view>
      <image class="img" src="/static/back_r.png" />
    </view>
    <view class="demo" @click="go('/pages/demo9')">
      <view class="text">2.居中插槽1(分配中心剩余空间)</view>
      <image class="img" src="/static/back_r.png" />
    </view>
    <view class="demo" @click="go('/pages/demo10')">
      <view class="text">3.居中插槽2(定位居中)</view>
      <image class="img" src="/static/back_r.png" />
    </view>
    <view class="demo" @click="go('/pages/demo11')">
      <view class="text">4.右侧插槽</view>
      <image class="img" src="/static/back_r.png" />
    </view>

    <!-- <view class="ww"></view> -->
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
        /* 开启单页访问时 ，显示首页图标 */
        isHome: false,
        /* 背景 */
        bgColor: "#ffffff",
        /* 固定导航 */
        navFixed: true,
        /* 标题 （屏幕中心居中 两边图标中心居中使用slot center1） */
        navTitle: {
          text: "案例",
          color: "",
          fontSize: "16px", // px upx rpx
          fontWeight: "", // 100 - 700
        },
        /* 左侧文字 */
        leftText: {
          text: "首页",
          color: "",
          fontSize: "", // px upx rpx, // px upx rpx
          fontWeight: "", // 100 - 700
        },
      },
    };
  },
  methods: {
    go(url) {
      uni.navigateTo({
        url: url,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.ww {
  height: 1000px;
}
.nv_demo {
  width: 750upx;
  // height: 100vh;
  background-color: #f8f8f8;
}
.tag {
  padding: 3px 15px;
  font-size: 13px;
  font-weight: 200;
  color: #202020;
}
.demo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80upx;
  background-color: #ffffff;
  padding: 0 15px;
}
.text {
  font-size: 16px;
  font-weight: 300;
}
.img {
  width: 16px;
  height: 16px;
}
</style>
