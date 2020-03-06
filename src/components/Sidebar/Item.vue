<template>
  <li v-if="!model.hidden">
    <div @click="toggle">
      <SvgIcon v-if="model.data && model.meta.icon" :name="model.mate.icon"></SvgIcon>
      <span v-if="isFolder">
        <span v-if="model.meta && model.meta.title">{{model.meta.title}}</span>
        {{open ? '-' : '+'}}
      </span>
      <template v-else>
        <router-link
          v-if="model.meta && model.meta.title"
          :to="resolvePath(model.path)"
          >{{model.meta.title}}</router-link>
      </template>
    </div>
    <ul v-show="open" v-if="isFolder">
      <item class="item"
      v-for="route in model.children"
      :model="route" :key="route.path"
      :base-path="resolvePath(model.path)">
      </item>
    </ul>
  </li>
</template>

<script>
import path from 'path'
export default {
  name: 'Item',
  props: {
    // 新增basePath保存⽗路由path
    basePath: {
      type: String,
      default: ''
    },
    model: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      open: false // 打开状态
    }
  },
  methods: {
    // 拼接⼦路由完整path
    resolvePath (routePath) {
      return path.resolve(this.basePath, routePath)
    },
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    }
  },
  computed: {
    isFolder: function () { // 是否有子树
      return this.model.children && this.model.children.length
    }
  }
}
</script>
