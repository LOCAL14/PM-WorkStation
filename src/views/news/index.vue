<template>
  <div class="index-container">
    <div class="header">
      <div class="title">{{title}}</div>
      <div class="copy-writing">{{copyWriting}}</div>
    </div>
    <UrlGrid :data="navigatorData"></UrlGrid>
    <el-image class="right-bottom-background" :src="require('@/assets/work.svg')"></el-image>
  </div>
</template>

<script>
import UrlCard from '@/components/UrlCard/UrlCard'
import UrlGrid from '@/components/UrlCard/UrlGrid'
import {getTimeString, getEncourageCopywriting} from '@/utils'

export default {
  name: 'index',
  components: { UrlGrid, UrlCard },
  data() {
    return {
      navigatorData: [
        {
        title: 'JELLY',
        description: '京东交互设计团队',
        url: 'https://jelly.jd.com/articlelist/exp',
        imageUrl: 'https://jelly.jd.com/3.0/fonts/6d7427f711853e9fc61f6f02a9e108df.svg'
      },
        {
          title: 'ISUX',
          description: '腾讯社交用户体验设计团队',
          url: 'https://isux.tencent.com/',
          imageUrl: 'https://isux.tencent.com/static/images/logo.svg'
        },
        {
          title: '人人都是产品经理',
          description: '产品经理学习交流平台',
          url: 'http://www.woshipm.com',
          imageUrl: 'http://image.woshipm.com/wp-files/2017/10/APP-168.png!/both/256x256'
        },
        {
          title: 'PMCAFF',
          description: '产品经理学习交流平台',
          url: 'https://coffee.pmcaff.com/',
          imageUrl: 'https://img.pmcaff.com/FqEYF-f1C23K_do0AZD69X5rtVBH'
        },
        {
          title: '少数派',
          description: '数字消费指南平台',
          url: 'https://sspai.com/',
          imageUrl: 'https://sspai.com/public/images/logo_black.png'
        },
        {
          title: 'ReadHub',
          description: '科技新闻资讯',
          url: 'https://readhub.cn/topics',
          imageUrl: 'https://cdn.readhub.cn/static/assets/png/readhub_logo@2x.e5b95388.png'
        },
        {
          title: 'PKU产品开讲了',
          description: '北京大学产品求职社团课',
          url: 'https://www.nowcoder.com/study/vod/1064',
          imageUrl: ''
        },
        {
          title: '腾讯产品18讲',
          description: '千款产品背后的关键思考',
          url: 'https://daxuepc.com/detail/p_5fae5be5e4b0231ba8864e24/6',
          imageUrl: 'http://wechatapppro-1252524126.file.myqcloud.com/appjkyl58fL2930/image/b_u_5b745d5f1519f_ksqRlyUO/kotveewe0pq8.jpg'
        }],
    }
  },
  computed:{
    title(){
      return getTimeString()
    },
    copyWriting(){
      return getEncourageCopywriting()
    }
  },
  created() {
    this.$store.dispatch("app/openSideBar",{ withoutAnimation: false })
  }
}
</script>

<style scoped lang="scss">
.index-container{
  padding: 10px 20px;
  z-index: 10;
  .header{
    margin: 0 0 15px 0;
    .title{
      font-size: 1.6em;
      font-weight: bold;
      line-height: 2.2em;
      color: #222;
      font-family: AaHeiTi-Li,sans-serif;
    }
    .copy-writing{
      font-size: 1.0em;
      color: #818181;
    }
  }

  .right-bottom-background{
    position: absolute;
    bottom: 2%;
    right: 0;
    opacity: 0.3;
    width: 25%;
  }
}
</style>
