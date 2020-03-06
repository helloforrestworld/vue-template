import store from '@/store'

export default function checkPermission (permissionRoles) {
  if (permissionRoles && permissionRoles instanceof Array && permissionRoles.length > 0) {
    const roles = store.getters.roles
    const hasPermission = roles.some(role => {
      return permissionRoles.includes(role)
    })
    return hasPermission
  } else {
    throw Error('权限信息必须为数组')
  }
}
