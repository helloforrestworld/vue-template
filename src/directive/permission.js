import store from '@/store'

export default {
  insert (el, binding) {
    const { value: permissionRoles } = binding

    const roles = store.getters.roles

    if (
      permissionRoles &&
      permissionRoles instanceof Array &&
      permissionRoles.length > 0
    ) {
      const hasPermission = roles.some(role => {
        return permissionRoles.includes(role)
      })

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error('需要制定数组类型的权限信息，如v-permission="["admin"]"')
    }
  }
}
