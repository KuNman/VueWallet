<template lang="pug">
    .container
      div.table-responsive
        table.table.text-left.table-rounded
          thead
            tr
              th Added at
              th Title
              th Amount
              th
          tbody(v-if="transactions[tab].length > 1")
            tr(v-for="transaction in transactions[tab]")
              th {{transaction.createdAt | moment("YYYY-MM-DD") }}
              th {{transaction.name}}
              th(:class="transaction.amount > 0 ? 'pos' : 'neg'") {{transaction.amount}}
              th
                img(src="~assets/more.svg" style={'cursor':'pointer'})
          tbody(v-else)
            tr
              th
                #{'content-loader'}(
                  :height="50"
                  :width="400"
                  :speed="8"
                  primaryColor="#57b6FF"
                  secondaryColor="#ecebeb"
                  )
                  #{'rect'}(x="0" y="15" rx="0" ry="0" width="100" height="27" )
              th
                #{'content-loader'}(
                  :height="50"
                  :width="400"
                  :speed="8"
                  primaryColor="#57b6FF"
                  secondaryColor="#ecebeb"
                  )
                  #{'rect'}(x="0" y="15" rx="0" ry="0" width="225" height="27" )
              th
                #{'content-loader'}(
                  :height="50"
                  :width="400"
                  :speed="8"
                  primaryColor="#57b6FF"
                  secondaryColor="#ecebeb"
                  )
                  #{'rect'}(x="0" y="15" rx="0" ry="0" width="125" height="27" )
              th
                #{'content-loader'}(
                  :height="50"
                  :width="100"
                  :speed="8"
                  primaryColor="#57b6FF"
                  secondaryColor="#ecebeb"
                  )
                  #{'rect'}(x="0" y="15" rx="0" ry="0" width="25" height="25" )

</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import { ContentLoader } from 'vue-content-loader'

  export default {
    name: 'Table',
    methods: {
      ...mapGetters({
        transactionsGett: 'wallet/transactions',
        activeTabGett: 'wallet/tab',
      }),
      ...mapActions({
        listTransactions: 'wallet/listTransactions',
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
    created() {
      return this.listTransactions()
    },
    components: {
      ContentLoader,
    },
  }
</script>

<style lang="sass" scoped>
  .container
    padding-top: 25px
</style>
