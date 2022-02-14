<!--
 * @Author: axu
 * @Date: 2020-08-30 07:59:10
 * @LastEditTime: 2021-05-19 18:44:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin-template-master/src/views/dashboard/index.vue
-->
<template>
  <div class="dashboard-container">
    <div class="dashboard-text" @click="go">name: {{ name }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    go() {
      this.$router.push({ path: '/1233' })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
