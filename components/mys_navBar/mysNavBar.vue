<template>
  <view class="nav">
    <view
      class="nv_padding"
      v-if="!!mysNavConfig.navPadding"
      :style="{
        height: navBarHeight,
      }"
    ></view>
    <view
      class="bg_box"
      :style="{
        backgroundColor: mysNavConfig.bgColor,
        backgroundImage: mysNavConfig.bgImage,
        paddingTop: navBarTop,
        height: navBarHeight,
        opacity: opacity,
      }"
      :class="{ fixed: mysNavConfig.navFixed }"
    ></view>

    <view
      class="mys_navBar"
      :style="{
        paddingTop: navBarTop,
        height: navBarHeight,
        paddingRight: navBarRight,
      }"
      :class="{ fixed: mysNavConfig.navFixed }"
    >
      <view class="my_left_box" :style="{ height: btnHeight }">
        <!-- 左侧单图标 + text -->
        <view class="my_left_icon" @tap="onLeftHome" :style="{ height: btnHeight, paddingLeft: navBarLeft }" v-if="isHome">
          <image class="nv_icon" :src="mysNavConfig.homeIconPath || homeIconPath" />
        </view>
        <view
          class="my_left_icon"
          @tap="onLeftClick"
          v-if="mysNavConfig.btnType !== 'type2' && !isHome"
          :style="{ height: btnHeight, paddingLeft: navBarLeft }"
        >
          <image class="nv_icon" :src="mysNavConfig.leftIconPath || backIconPath" />
          <view
            class="leftText"
            :style="{ height: btnHeight }"
            v-if="!!mysNavConfig.leftText && mysNavConfig.btnType !== 'type2'"
          >
            <text
              :style="{
                color: mysNavConfig.leftText.color,
                fontSize: mysNavConfig.leftText.fontSize,
                fontWeight: mysNavConfig.leftText.fontWeight,
              }"
              >{{ mysNavConfig.leftText.text }}</text
            >
          </view>
        </view>
      </view>
      <!-- 左slot -->
      <view class="my_left_custom" :style="{ height: btnHeight }">
        <slot name="left"></slot>
      </view>

      <view class="btn_type" :style="{ height: btnHeight }">
        <view
          class="btn_box nav_btn_t1"
          :style="{
            width: btnWidth,
            height: btnHeight,
            marginLeft: navBarLeft,
            borderRadius: mysNavConfig.type2Config.radius,
          }"
          v-if="mysNavConfig.btnType == 'type2' && !isHome"
        >
          <view class="btn_back" @tap="onLeftClick">
            <image
              class="nv_icon"
              :src="mysNavConfig.type2Config.leftPath"
              :style="{ height: btnHeight, width: iconW }"
              mode="aspectFit"
            />
          </view>
          <view class="line"></view>
          <view class="btn_home" @tap="onLeftHome">
            <image
              class="nv_icon"
              :src="mysNavConfig.type2Config.rightPath"
              :style="{ height: btnHeight, width: iconW }"
              mode="aspectFit"
            />
          </view>
        </view>
        <!-- 中间slot -->
        <view class="my_custom_box" :style="{ height: btnHeight }">
          <!-- 搜索框 -->
          <view
            class="nv_search_box"
            v-if="!!mysNavConfig.searchConfig"
            :style="{
              height: inputHeight,
              backgroundColor: mysNavConfig.searchConfig.bgColor,
              marginRight: mysNavConfig.searchConfig.marginRight,
              marginLeft: mysNavConfig.searchConfig.marginLeft,
            }"
          >
            <image class="nv_icon" :src="`/static/searchB.png`" mode="aspectFit" />
            <input
              type="text"
              :value="mysNavConfig.searchConfig.value"
              :placeholder="mysNavConfig.searchConfig.placeholder"
              :disabled="mysNavConfig.searchConfig.disabled"
              @tap="clickInput"
              @input="changeInput"
              @confirm="submitInput"
              @confirm-type="mysNavConfig.searchConfig.ctype || 'search'"
              :placeholder-style="mysNavConfig.searchConfig.placeholderStyle || ''"
              class="nv_input"
            />
            <view class="close" @tap="clearInput" :style="{ height: inputHeight }">
              <image
                v-if="mysNavConfig.searchConfig.value !== ''"
                class="nv_icon"
                :src="`/static/colse_fill.png`"
                mode="aspectFit"
              />
            </view>
          </view>
          <slot name="center1"></slot>
        </view>
      </view>
      <!-- 标题 -->
      <view class="title_container" v-if="!mysNavConfig.searchConfig" :style="{ top: navBarTop, height: btnHeight }">
        <text
          class="title_text"
          v-if="!!mysNavConfig.navTitle"
          :style="{
            color: mysNavConfig.navTitle.color,
            fontSize: mysNavConfig.navTitle.fontSize,
            fontWeight: mysNavConfig.navTitle.fontWeight,
          }"
          >{{ mysNavConfig.navTitle.text }}</text
        >
        <slot name="center2"></slot>
      </view>
      <!-- 右边slot -->
      <view class="my_right_icon" :style="{ height: btnHeight }">
        <image v-if="mysNavConfig.rightIconPath" @tap="onRightClick" class="nv_icon" :src="mysNavConfig.rightIconPath" />
        <slot name="right"></slot>
      </view>
    </view>
  </view>
</template>
<script>
/* 默认首页路径 */
const homePath = "/pages/index/index";
/* 默认首页图标路径 */
const homeIconPath = "/static/home_b.png";
/* 默认返回图标路径 */
const backIconPath = "/static/back_b.png";
export default {
  props: {
    mysNavConfig: {
      type: Object,
      default() {
        return {
          /* 固定导航 */
          navFixed: true,
          /* 开启单页显示首页图标 */
          isHome: true,
          /* 占位开启 */
          navPadding: true,
          /* 背景 */
          bgColor: "#f8f8f8",
          /* 渐变色 */
          opacity: 1,
          /* 渐变开启 */
          isOpacity: false,
          /* 渐变延时效果 */
          opacityTime: 100,
          /* 左侧按钮样式 可选 type1 type2 （type2根据小程序胶囊位置调整） */
          btnType: "type1",
          /* type1 左侧文字配置 */
          leftText: {
            text: "",
            color: "",
            fontSize: "16px", // px upx rpx
            fontWeight: "", // blod
          },
          /* 标题 */
          navTitle: {
            text: "",
            color: "",
            fontSize: "", // px upx rpx
            fontWeight: "", // blod
          },
          /* type2 按钮 */
          type2Config: {
            // 左图标
            leftPath: "/static/back_w.png",
            // 右图标
            rightPath: "/static/home.png",
            // 圆角
            radius: "40rpx",
          },
          /* 搜索框配置 */
          // searchConfig: {
          //   value: "",
          //   confirmType: "search",
          //   placeholder: "",
          //   disabled: true,
          //   placeholderStyle: "",
          //   // marginRight: "",
          //   // marginLeft: "",
          // },
          /* 自定义事件开启 */
          // isCustomFn: false,
          /* 定义左侧图标 （大小是固定的16px ,想改变大小通过 slot 或 css  ） */
          // leftIconPath: "/static/back_b.png",
          /* 定义右侧图标 */
          // rightIconPath: "/static/home.png",
          /* home图标 */
          // homeIconPath: "/static/home.png",
        };
      },
    },
    scrollTop: {
      type: Number,
      default: function () {
        return 0;
      },
    },
  },

  data() {
    return {
      iconW: undefined,
      iconH: undefined,
      btnWidth: undefined,
      btnHeight: undefined,
      navBarTop: undefined,
      navBarHeight: undefined,
      navBarLeft: undefined,
      navBarRight: undefined,
      inputHeight: undefined,
      opacity: 0,
      isHome: false,
      homeIconPath: homeIconPath,
      backIconPath: backIconPath,
    };
  },
  computed: {
    isSharePage() {},
  },
  watch: {
    scrollTop(val) {
      if (!this.mysNavConfig.isOpacity) {
        return;
      }
      this.setOpacity(val, this.mysNavConfig.opacityTime);
    },
  },
  methods: {
    init() {
      if (this.mysNavConfig.isHome) {
        let pages = getCurrentPages().length;
        /* 单页显示home图标 */
        pages == 1 ? (this.isHome = true) : (this.isHome = false);
      }
      // 开启渐变 强制fixed
      this.navBarTop = uni.getSystemInfoSync().statusBarHeight + "px";
      if (!this.mysNavConfig.opacity) {
        this.opacity = 1;
        !this.mysNavConfig.isOpacity ? (this.opacity = 1) : ((this.mysNavConfig.navFixed = true), (this.opacity = 0));
      } else {
        this.opacity = this.mysNavConfig.opacity;
        !this.mysNavConfig.isOpacity ? "" : ((this.mysNavConfig.navFixed = true), (this.opacity = 0));
      }

      // #ifdef MP
      this.initMP();
      // #endif
      // #ifdef APP-PLUS-NVUE
      this.navBarHeight = 44 + uni.getSystemInfoSync().statusBarHeight + "px";
      // #endif
    },
    /* 小程序初始化位置 */
    initMP() {
      let gS = uni.getSystemInfoSync();
      let rect = uni.getMenuButtonBoundingClientRect();

      let rectHeight = rect.height;
      this.btnWidth = rect.width + "px";
      this.iconW = Math.floor(rect.width / 4 - 5) + "px";
      this.iconH = rectHeight / 2 + "px";
      this.btnHeight = rectHeight + "px";
      this.inputHeight = rectHeight - 3 + "px";
      this.navBarTop = rect.top + "px";
      this.navBarLeft = gS.screenWidth - rect.right + "px";
      this.navBarRight = gS.screenWidth - rect.right + rect.width + "px";
      this.navBarHeight = gS.statusBarHeight + rectHeight + (rect.top - gS.statusBarHeight) * 2 + "px";
    },
    /* 点击左侧 */
    onLeftClick() {
      if (this.mysNavConfig.isCustomFn) {
        this.$emit("onLeftClick");
      } else {
        console.log("back");
        uni.navigateBack();
      }
    },
    /* type2 返回首页 */
    onLeftHome() {
      uni.switchTab({
        url: homePath,
      });
    },
    /* 点击右侧 */
    onRightClick() {
      console.log("onRightClick");
      uni.showToast({
        title: "onRightClick",
        duration: 1000,
      });
      this.$emit("onRightClick");
    },
    /**
     * @param scrollTop 页面顶部距离
     * @param down 滑动显示效果延时
     */
    setOpacity(scrollTop, down = 60) {
      if (scrollTop > 0) {
        if (scrollTop < down) {
          this.opacity = scrollTop / down;
        }
        if (scrollTop > down) {
          this.opacity = 1;
        }
      } else {
        this.opacity = 0;
      }
    },
    /* 搜索框改变值 */
    changeInput(e) {
      this.$emit("changeInput", e);
    },
    /* 搜索框提交 */
    submitInput(e) {
      this.$emit("submitInput", e);
    },
    /* 清空搜索 */
    clearInput() {
      this.$emit("clearInput");
    },
    /* 禁用状态下点击搜索框 */
    clickInput() {
      this.$emit("clickInput");
    },
  },
  created() {
    this.init();
  },
  onReady() {
    // setTimeout(() => {
    //   // 改变手机状态栏颜色
    //   uni.setNavigationBarColor({
    //     frontColor: "#000000",
    //     backgroundColor: "#FF4258",
    //   });
    // }, 10);
  },
};
</script>

<style lang="scss" scoped>
.nav {
  position: relative;
}
.nv_padding {
  height: 88upx;
  background-color: transparent;
}
/* 图标默认大小 */
.nv_icon {
  width: 16px;
  height: 16px;
}
.bg_box {
  position: absolute;
  width: 750upx;
  height: 88upx;
  z-index: 10;
  top: 0;
  background-color: transparent;
  /* #ifdef MP */
  box-sizing: border-box;
  /* #endif */
  /* #ifndef APP-PLUS-NVUE */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  /* #endif */
}
.mys_navBar {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  height: 88upx;
  /* #endif */
  // #ifdef MP
  box-sizing: border-box;
  // #endif
  width: 750upx;
  flex-direction: row;
  background-color: transparent;
  position: absolute;
  z-index: 10;
  top: 0;
}
.fixed {
  position: fixed;
}
/*
 left 按钮
*/
.btn_type {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  /* #ifdef APP-PLUS-NVUE */
  margin-left: 16upx;
  /* #endif */
  // #ifndef MP
  align-items: center;
  // #endif
  flex: 1;
  flex-direction: row;
}
.btn_box {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  margin-left: 16upx;
  /* #endif */
  flex-direction: row;
  // #ifndef MP
  align-items: center;
  // #endif
}
.btn_back,
.btn_home {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  /* #ifndef APP-PLUS-NVUE */
  height: 100%;
  /* #endif */
  /* #ifdef APP-PLUS-NVUE */
  width: 76upx;
  height: 62upx;
  /* #endif */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
}

/* 按钮类型1 */
.nav_btn_t1 {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  // #ifdef MP
  box-sizing: border-box;
  // #endif
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.3);
  background-color: rgba(0, 0, 0, 0.2);
  width: 150upx;
  height: 62upx;
}

.line {
  width: 1upx;
  height: 60%;
  /* #ifdef APP-PLUS-NVUE */
  height: 30upx;
  /* #endif */
  background-color: rgba(255, 255, 255, 0.3);
}

/*
标题
 */
.title_container {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  position: absolute;
  left: 375upx;
  bottom: 0;
  transform: translateX(-50%);
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.title_text {
  // flex: 1;
  text-overflow: ellipsis;
  /* #ifndef APP-PLUS-NVUE */
  white-space: nowrap;
  overflow: hidden;
  /* #endif */
  /* #ifdef APP-PLUS-NVUE */
  lines: 1;
  /* #endif */
}
/* 
左边自定义
 */
.my_left_box {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
}
.my_left_icon {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* #ifndef MP */
  margin-left: 18upx;
  /* #endif */
}
.my_left_custom {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
  // justify-content: center;
}

/* 文字 */
.leftText {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 4upx;
  font-size: 15px;
}
/* 
中间
 */
.my_custom_box {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
}
/*
搜索框 
 */
.nv_search_box {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
  flex: 1;

  /* #ifndef MP */
  height: 60upx;
  /* #endif */
  background-color: #f8f8f8;
  padding-right: 20upx;
  padding-left: 20upx;
  border-radius: 60upx;
  margin-right: 15upx;
  margin-left: 15upx;
}
.nv_input {
  flex: 1;
  padding-left: 16upx;
  font-size: 13px;
}
.close {
  width: 50upx;
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* #ifndef MP */
  height: 62upx;
  /* #endif */
}

/* 
右边 自定义
 */
.my_right_icon {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* #ifndef MP */
  // min-width: 70upx;
  /* #endif */
  padding-left: 6px;
  padding-right: 10px;
}
</style>
