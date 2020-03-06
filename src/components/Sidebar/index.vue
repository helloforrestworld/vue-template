<template>
  <div>
    <ul>
      <item
      :model="route"
      v-for="route in permission_routes"
      :key="route.path"
      :base-path="route.path"
      ></item>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Item from './Item'
export default {
  components: { Item },
  computed: {
    ...mapGetters(['permission_routes'])
  }
}
</script>
