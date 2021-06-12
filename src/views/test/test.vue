<template>
  <div>
    <el-input v-model="url"></el-input>
    <WebContent :src="url"></WebContent>
  </div>
</template>

<script>
import WebContent from '@/components/WebContent'
export default {
  name: 'test',
  components: { WebContent },
  data(){
    return {
      url:""
    }
  }
}
</script>

<style scoped>

</style>
