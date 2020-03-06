import Vue from 'vue'
import MessageVue from './Message.vue'

class Message {
  constructor () {
    const vm = new Vue({
      render (h) {
        return h(MessageVue)
      }
    }).$mount()

    this.app = vm.$children[0]

    document.body.appendChild(vm.$el)
  }

  success (options) {
    this.app.add(options)
  }
}

const message = new Message()

Message.install = function (_Vue) {
  _Vue.prototype.$message2 = message
}

export { message }

export default Message
