<template>
  
</template>

<script>
export default {
  created () {
    this.makeRequest({url: this.memberUrl}, 'delete',
      () => {
        this.$router.push('/members')
      }, (data) => {
        console.log(data)
      }
    )
  },
  computed: {
    memberUrl () {
      return '/members/' + this.$route.query.id
    }
  }
}
</script>
