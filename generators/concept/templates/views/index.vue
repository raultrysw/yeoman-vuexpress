<template>
  <section v-if="loaded">
    <h2>Listado de miembros</h2>
    <table>
      <thead>
        <% attrs.forEach(function(attr) {%><th><%= attr %></th><%}) %>
      </thead>
      <tr v-for="(<%= concept %>, index) in <%=  collection %>" :key="index">
        <% attrs.forEach(function(attr) {%><td>{{<%= concept %>.<%= attr %>}}</td><%}) %>
        <td>
          <nuxt-link :to="'/<%=  collection %>/' + <%=  concept %>._id">View</nuxt-link> -
          <nuxt-link :to="'/<%=  collection %>/edit?id=' + <%=  concept %>._id">Edit</nuxt-link>
          <nuxt-link :to="'/<%=  collection %>/destroy?id=' + <%=  concept %>._id">Eliminar</nuxt-link>
        </td>
      </tr>
    </table>
    <p><nuxt-link to="/<%=  collection %>/create">Crear un <%= concept %></nuxt-link></p>
  </section>
</template>
<script>
export default {
  data () {
    return {
      <%=  collection %>: [],
      loaded: false
    }
  },
  created () {
    const url = '/<%=  collection %>'
    this.makeRequest({url}, 'get', ({<%=  collection %>}) => {
      this.<%=  collection %> = <%=  collection %>
      this.loaded = true
    }, () => {

    })
  }
}
</script>
