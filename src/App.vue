<template>
  <div id="app">
    <Sidebar/>
    <Sidebar2/>
    <router-view/>

    <ElButton @click="show">弹窗</ElButton>
  </div>
</template>

<style lang="less">
</style>

<script>
import Sidebar from '@/components/Sidebar'
import Sidebar2 from '@/components/Sidebar2'
import { message } from '@/components/Message/message.js'
export default {
  components: {
    Sidebar,
    Sidebar2
  },
  methods: {
    show () {
      message.success({
        title: 'App的消息',
        duration: 3000
      })
    }
  }
}
</script>
