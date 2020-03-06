<template>
  <div class="about">
    <h1>
      <SvgIcon name="qq" />This is an about page
      <SvgIcon class="wx-icon" name="wx" />
    </h1>
     <ElButton @click="show">弹窗</ElButton>
  </div>
</template>

<script>
import { message } from '@/components/Message/message.js'
export default {
  methods: {
    show () {
      message.success({
        title: 'about的消息',
        duration: 3000
      })
    }
  }
}
</script>

<style lang="less" scoped>
.wx-icon {
  fill: rgb(42, 230, 120);
}
</style>
