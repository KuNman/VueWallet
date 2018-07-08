<template lang="pug">
    .container
      .row.d-flex.align-items-center
        .div.col-3.info.d-flex.justify-content-start
          div Your wallet's balance is&nbsp
           span.balance {{balance.toLocaleString()}}
        .div.col-6.spacer
        .div.col-3.d-flex.justify-content-end.btn-group
          div.btn-group
            button.btn.btn-primary.rounded-left(@click="activeBtn = 'btn1'" :class="{active: activeBtn === 'btn1' }") All
            button.btn.btn-primary(@click="activeBtn = 'btn2'" :class="{active: activeBtn === 'btn2' }") Withdrawals
            button.btn.btn-primary.rounded-right(@click="activeBtn = 'btn3'" :class="{active: activeBtn === 'btn3' }") Additions
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
      name: 'NavBar',
      state: {
        balance: '',
      },
      data: () => ({
        activeBtn: 'btn1',
      }),
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

  .rounded-right
    border-bottom-right-radius: 10px

  .rounded-left
    border-bottom-left-radius: 10px

  .btn
    color: #4B4B4B
    background-color: #f9f9f9
    padding: 10px


  .active
    background-color: #57b6ff
    color: #f9f9f9

</style>