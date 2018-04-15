<template>
  <section>
    <% attrs.forEach(function(attr) {%><p><%= attr %> {{<%= concept %>.<%= attr %>}}</p><%}) %><%= "\n" %>
    <p><nuxt-link to="/<%=  collection %>">Volver atras</nuxt-link></p>
  </section>
</template>
<script>
export default {
  data () {
    return {
      <%=  concept %>: {}
    }
  },
  created () {
    this.makeRequest({url: this.<%=  concept %>Url}, 'get',
      ({<%=  concept %>}) => {
        this.<%=  concept %> = <%=  concept %>
      }, (data) => {
        console.log(data)
      }
    )
  },
  computed: {
    <%=  concept %>Url () {
      return '/<%=  collection %>/' + this.$route.params.id
    }
  }
}
</script>
