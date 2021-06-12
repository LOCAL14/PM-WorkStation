<template>
  <div>
    <WebContent src="https://codesandbox.io/embed/yonghutiyanditubianmaban-wrews?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fmap.yml&theme=light"
                title="用户体验地图（编码版）"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                loading-text="页面加载中，可能需要10-15秒"
                :autoCloseSideBar="true"
    ></WebContent>
  </div>
</template>

<script>
import WebContent from '@/components/WebContent'
export default {
  name: 'arvinxu',
  components: { WebContent },
  mounted() {
    // 弹出工具提示
    this.$notify({
      title: '提示',
      dangerouslyUseHTMLString: true,
      type: 'info',
      position: 'bottom-right',
      offset: 20,
      duration: 3000,
      message: "<a href='https://sspai.com/post/66096' target='_blank'>点击此处查看工具使用帮助</a><p style='font-size: 10px; color:#bbb; margin-top: 5px'>3秒后关闭</p>"
    });

  },
  methods: {
  }
}
</script>

<style scoped lang="scss">

</style>
