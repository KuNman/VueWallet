<template lang="pug">
    .container
      .row.d-flex.align-items-center
        .div.col-3.info.d-flex.justify-content-start
          div(v-if="balance == 0")
            span
          div(v-else) Your wallet's balance is&nbsp
           span.balance {{balance.toLocaleString()}}
        .div.col-6.spacer
        .div.col-3.d-flex.justify-content-end.btn-group
          div.btn-group
            button.btn.btn-primary.rounded-left(@click="activeTab('all')" :class="{active: tab === 'all' }") All
            button.btn.btn-primary(@click="activeTab('out')" :class="{active: tab === 'out' }") Withdrawals
            button.btn.btn-primary.rounded-right(@click="activeTab('in')" :class="{active: tab === 'in' }") Additions
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import { mapMutations } from 'vuex'


  export default {
    name: 'NavBar',
    state: {
      balance: 0,
    },
    methods: {
      ...mapGetters({
        balanceGett: 'wallet/balance',
        activeBtnGett: 'wallet/tab',
      }),
      ...mapActions({
        listTransactions: 'wallet/listTransactions',
      }),
      ...mapMutations({
        activeBtnMut: 'wallet/TAB',
      }),
      activeTab(tab) {
        return this.activeBtnMut(tab)
      },
    },
    computed: {
      balance() {
        return this.balanceGett()
      },
      tab() {
        return this.activeBtnGett()
      },
    },
    created() {
      return this.listTransactions()
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