<template lang="pug">
    .container
      .row
        .div.col-4.info
          div Your wallet's balance is&nbsp
           span.balance {{balance.toLocaleString()}}
        .div.col-4.spacer
        .div.col-4.actions

</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
      name: 'NavBar',
      state: {
        balance: '',
      },
      methods: {
        ...mapGetters({
          balanceGett: 'wallet/balance',
        }),
      },
      computed: {
        balance() {
          return this.balanceGett()
        },
      },
    }
</script>

<style lang="sass" scoped>
  .container
    padding-top: 50px
</style>