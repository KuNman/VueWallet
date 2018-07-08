<template lang="pug">
    .container
      div.table-responsive
        table.table
          thead
            tr
              th Added at
              th Title
              th Amount
          tbody(v-for="transaction in transactions[tab]")
            tr
              th {{transaction.createdAt}}
              th {{transaction.name}}
              th {{transaction.amount}}
</template>

<script>
  import { mapGetters } from 'vuex'
  import VueContentLoading from 'vue-content-loading'

  export default {
    name: 'Table',
    methods: {
      ...mapGetters({
        transactionsGett: 'wallet/transactions',
        activeTabGett: 'wallet/tab',
      }),
    },
    computed: {
      transactions() {
        return this.transactionsGett()
      },
      tab() {
        return this.activeTabGett()
      },
    },
    components: {
      VueContentLoading,
    },
  }
</script>

<style lang="sass" scoped>
  .container
    padding-top: 25px

  .table
    width: 100%
</style>