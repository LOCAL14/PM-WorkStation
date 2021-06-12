<template>
  <div class="iframe-container" v-loading="iframeLoading" :element-loading-text="loadingText">
    <iframe
      :src="src"
      :title="title" id="ifra"
      :allow="allow"
      :sandbox="sandbox"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'WebContent',
  data() {
    return {
      iframeLoading: true
    }
  },
  props: {
    src: {
      type: String,
      default: 'https://www.baidu.com'
    },
    title: {
      type: String
    },
    allow: {
      type: String
    },
    sandbox: {
      type: String
    },
    loadingText: {
      type: String,
      default: '页面加载中'
    },
    autoCloseSideBar:{
      type: Boolean,
      default: false
    }
  },
  mounted() {
    var _this = this
    const iframe = document.querySelector('#ifra')
    // 处理兼容行问题

    setTimeout(function() {
      _this.loadingEnd()
      return null
    }, 50000);

    if (iframe.attachEvent) {
      iframe.attachEvent('onload', function() {
        // iframe加载完毕以后执行操作
        _this.loadingEnd()
      })
    } else {
      iframe.onload = function() {
        // iframe加载完毕以后执行操作
        _this.loadingEnd()
      }
    }
  },
  methods: {
    loadingEnd(){
      console.log('iframe已加载完毕')
      if(this.autoCloseSideBar){
        this.$store.dispatch('app/closeSideBar',{ withoutAnimation: false })
      }
      this.iframeLoading = false
      this.$emit('afterLoading')
    }
  }
}
</script>

<style>
.wrapper {
  height: 300px;
  width: 300px;
}
</style>

<style scoped lang="scss">
.iframe-container {
  height: calc(100vh - 50px);
  width: 100%;

  iframe {
    height: calc(100vh - 50px);
    width: 100%;
    border: none;
  }

}
</style>
