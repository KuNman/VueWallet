<template lang="pug">
    .container
      .row
        img.col-3.logo(src="~assets/logo_wallet.svg", alt="Wallet: InventiStudio recruitment task")
        div.col-3.spacer
        div.col-6.d-flex.align-items-center.justify-content-end
          button.signout-btn(type="button", @click="signOut")
                span.signout-span Sign out
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
      name: 'Header',
      methods: {
        ...mapActions({
          logout: 'auth/logout',
        }),
        signOut() {
          return this.logout()
        },
      },
    }
</script>

<style lang="sass" scoped>
</style>