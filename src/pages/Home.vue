<template>
  <div>
    Hello {{user.name}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['user'])
  }
}
</script>
<style scoped>
div {
  color: red;
}
</style>
