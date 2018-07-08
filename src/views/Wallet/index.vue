<template lang="pug">
    div
      app-header
      app-navbar
      app-table
</template>

<script>
import Header from './Header'
import Navbar from './NavBar'
import Table from './Table'

export default {
  name: 'Wallet',
  components: {
    'app-header': Header,
    'app-navbar': Navbar,
    'app-table': Table,
  },

}
</script>

<style lang="sass" scoped>
</style>
