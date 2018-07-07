<template lang="pug">
    .container
      .row
        .div.col-3.info
          span.info Your wallet's balance is&nbsp;
          span.balance
        .div.col-6.spacer
        .div.col-3.actions

</template>

<script>

    export default {
      name: 'NavBar',
    }
</script>

<style scoped>
  .container {
    padding-top: 50px;
  }
</style>