<template>
  <section>
    <p>name {{member.name}}</p>
    <p>surname {{member.surname}}</p>
    <p>email {{member.email}}</p>
    <p>password {{member.password}}</p>
    <p><nuxt-link to="/members">Volver atras</nuxt-link></p>
  </section>
</template>
<script>
export default {
  data () {
    return {
      member: {}
    }
  },
  created () {
    this.makeRequest({url: this.memberUrl}, 'get',
      ({member}) => {
        this.member = member
      }, (data) => {
        console.log(data)
      }
    )
  },
  computed: {
    memberUrl () {
      return '/members/' + this.$route.params.id
    }
  }
}
</script>
