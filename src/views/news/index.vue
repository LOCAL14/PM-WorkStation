<template>
  <div>
    <UrlGrid :data="navigatorData"></UrlGrid>
  </div>

</template>

<script>
import UrlCard from '@/components/UrlCard/UrlCard'
import UrlGrid from '@/components/UrlCard/UrlGrid'

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
          title: 'JELLY',
          description: '京东交互设计团队',
          url: 'https://jelly.jd.com/articlelist/exp',
          imageUrl: 'https://jelly.jd.com/3.0/fonts/6d7427f711853e9fc61f6f02a9e108df.svg'
        },
        {
          title: 'JELLY',
          description: '京东交互设计团队',
          url: 'https://jelly.jd.com/articlelist/exp',
          imageUrl: 'https://jelly.jd.com/3.0/fonts/6d7427f711853e9fc61f6f02a9e108df.svg'
        },
        {
          title: 'JELLY',
          description: '京东交互设计团队',
          url: 'https://jelly.jd.com/articlelist/exp',
          imageUrl: 'https://jelly.jd.com/3.0/fonts/6d7427f711853e9fc61f6f02a9e108df.svg'
        },
        {
          title: 'JELLY',
          description: '京东交互设计团队',
          url: 'https://jelly.jd.com/articlelist/exp',
          imageUrl: 'https://jelly.jd.com/3.0/fonts/6d7427f711853e9fc61f6f02a9e108df.svg'
        }]
    }
  }
}
</script>

<style scoped>

</style>
