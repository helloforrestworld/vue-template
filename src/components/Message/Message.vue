<template>
  <div class="message-box">
    <transition-group name="fade">
      <div
        class="message-box-item"
        v-for="layer in layers"
        :key="layer.id"
      >
        {{layer.title}}
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    this.id = 0
    return {
      layers: []
    }
  },
  created () {},
  methods: {
    add (options) {
      const id = ++this.id
      this.layers.push({
        ...options,
        id
      })

      this.timer = setTimeout(() => {
        this.remove(id)
      }, options.duration || 1500)
    },
    remove (id) {
      this.layers = this.layers.filter(layer => layer.id !== id)
    }
  }
}
</script>

<style lang="less" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.message-box {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  min-width: 380px;
}
.message-box-item {
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 4px;
  background: #eeeeee;
  color: chocolate;
}
</style>
