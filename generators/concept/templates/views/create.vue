<template>
  <section>
    <h2>Creando un miembro</h2>
    <form @submit.prevent="submit<%=  modelName %>">
      <% attrs.forEach(function(attr) {%>
        <div>
          <p><%= attr %></p>
          <input type="text" v-model="<%= concept %>.<%= attr %>" />
        </div>
        <div>
          <p><nuxt-link to="/articles">Volver atras</nuxt-link> <button type="submit"> Actualizar</button></p>
        </div>
      <%})%>
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
  methods: {
    submit<%=  modelName %> () {
      let url = '/<%=  concept %>s'
      this.makeRequest({url, data: this.<%=  concept %>}, 'post',
        ({<%=  concept %>Created}) => {
          console.log('Se ha creado', <%=  concept %>Created)
          this.$router.push('/<%=  concept %>s/' + <%=  concept %>Created._id)
        }, (error) => {
          console.log(error)
        }
      )
    }
  }
}
</script>
