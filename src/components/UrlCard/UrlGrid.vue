<template>
  <div class="grid-container">
    <template v-if="title">
      <el-collapse v-model="activeNames">
        <el-collapse-item :title="title" :name="title">
          <div class="grid">
            <template v-for="item in data">
              <UrlCard
                :title="item.title"
                :description="item.description"
                :url="item.url"
                :image-url="item.imageUrl"
              ></UrlCard>
            </template>
          </div>
        </el-collapse-item>
      </el-collapse>
    </template>
    <template v-else>
      <div class="grid">
        <template v-for="item in data">
          <UrlCard
            :title="item.title"
            :description="item.description"
            :url="item.url"
            :image-url="item.imageUrl"
          ></UrlCard>
        </template>
      </div>
    </template>


  </div>
</template>

<script>
import UrlCard from '@/components/UrlCard/UrlCard'

export default {
  name: 'UrlGrid',
  components: { UrlCard },
  data() {
    return {
      activeNames: this.title
    }
  },
  props: {
    title: {
      type: String
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
.grid-container {
  .el-collapse-item__content {
    padding-bottom: 0;
  }
}
</style>

<style scoped lang="scss">
.grid-container {
  width: 100%;

  .grid {
    width: 100%;
    display: grid;
    padding: 10px 0;
    grid-template-columns: repeat(4, 24.5%);
    grid-row-gap: 5px;
    grid-column-gap: 5px;
  }
}
</style>
