<template lang="pug">
    .container
</template>

<script>
  import store from '../../store/index'

  export default {
    name: 'Table',
    state: {
      count: 0,
    },
    computed: {
      count() {
        return this.$store.state.wallet.count
      },
    },
  }
</script>

<style scoped>

</style>