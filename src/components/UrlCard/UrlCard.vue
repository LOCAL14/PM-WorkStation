<template>
  <a :href="url" target="_blank" id="url-card">
    <el-card class="card" shadow="hover">
      <div class="card-content">
        <div class="card-content-image">
          <el-image class="image" :src="imageUrl" fit="contain">
            <div slot="error" class="image-slot">
              <el-avatar>
                <b style="font-size: 1.4em;">{{ title[0].toUpperCase() }}</b>
              </el-avatar>
            </div>
          </el-image>
        </div>
        <div class="card-content-text">
          <div class="title">{{ title }}</div>
          <div class="description">{{ description }}</div>
        </div>
      </div>
    </el-card>
  </a>

</template>

<script>
export default {
  name: 'UrlCard',
  props:{
    url:{
      type: String,
      default: "https://jelly.jd.com/articlelist/exp"
    },
    imageUrl:{
      type: String,
      default: "https://jelly.jd.com/3.0/fonts/6d7427f711853e9fc61f6f02a9e108df.svg"
    },
    title: {
      type: String,
      default: "测试标题"
    },
    description: {
      type: String,
      default: "这是一段测试描述"
    }
  }
}
</script>

<style lang="scss">
#url-card{
  .el-card__body{
    padding: 0px;
    width: 100%;
  }
}
</style>

<style scoped lang="scss">
.card{
  min-width: 150px;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0;

  .card-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    height: 100%;
    width: 100%;

    &-image {
      width: 60px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px;

      .image {
        width: 90%;
        height: 90%;
      }
    }

    &-text {
      width: calc(100% - 80px);
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-items: center;
      user-select: none;
      padding-left: 5px;

      .title{
        font-size: 14px;
        font-weight: bold;
        color: #222;
        overflow:hidden; //超出的文本隐藏
        text-overflow:ellipsis; //溢出用省略号显示
        white-space:nowrap; //溢出不换行
      }

      .description{
        font-size: 10px;
        line-height: 15px;
        color: #bbb;
        margin-top: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        display:-webkit-box; //作为弹性伸缩盒子模型显示。
        -webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
        -webkit-line-clamp:2; //显示的行
      }

    }

  }
}

</style>
