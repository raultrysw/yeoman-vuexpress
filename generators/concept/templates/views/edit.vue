<template>
  <section>
    <h2>Editando {{$route.query.id}}</h2>
    <form @submit.prevent="submit<%=  modelName %>">
      <% attrs.forEach(function(attr) {%>
        <div>
          <p><%= attr %></p>
          <input type="text" v-model="<%= concept %>.<%= attr %>" />
        </div>
      <%})%>
      <div>
        <p><nuxt-link to="/<%=  collection %>">Volver atras</nuxt-link> <button type="submit"> Actualizar</button></p>
      </div>
    </form>
  </section>
</template>
<script>
export default {
  data () {
    return {
      <%=  concept %>: {
        <% attrs.forEach(function(attr) {%>
          <%- attr %>: '',
        <% }) %>
      }
    }
  },
  created () {
    this.makeRequest({url: this.<%=  concept %>Uri}, 'get',
      ({<%=  concept %>}) => {
        this.<%=  concept %> = <%=  concept %>
      }, (error) => {
        console.log(error)
      }
    )
  },
  computed: {
    <%=  concept %>Uri () {
      return '/<%=  collection %>/' + this.$route.query.id
    }
  },
  methods: {
    submit<%=  modelName %> () {
      this.makeRequest({url: this.<%=  concept %>Uri, data: this.<%=  concept %>}, 'put',
        ({<%=  concept %>}) => {
          this.$router.push('/<%=  collection %>/' + <%=  concept %>._id)
        }, (error) => {
          console.log(error)
        }
      )
    }
  }
}
</script>
