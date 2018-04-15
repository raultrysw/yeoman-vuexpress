<template>
  
</template>

<script>
export default {
  created () {
    this.makeRequest({url: this.<%= concept %>Url}, 'delete',
      () => {
        this.$router.push('/<%=  collection %>')
      }, (data) => {
        console.log(data)
      }
    )
  },
  computed: {
    <%=  concept %>Url () {
      return '/<%=  collection %>/' + this.$route.query.id
    }
  }
}
</script>
