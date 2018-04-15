<template>
  <section v-if="loaded">
    <h2>Listado de miembros</h2>
    <table>
      <thead>
        <th>name</th>
        <th>surname</th>
        <th>email</th>
        <th>password</th>
        <th>actions</th>
      </thead>
      <tr v-for="(member, index) in members" :key="index">
        <td>{{member.name}}</td>
        <td>{{member.surname}}</td>
        <td>{{member.email}}</td>
        <td>{{member.password}}</td>
        <td>
          <nuxt-link :to="'/members/' + member._id">View</nuxt-link> -
          <nuxt-link :to="'/members/edit?id=' + member._id">Edit</nuxt-link>
          <nuxt-link :to="'/members/destroy?id=' + member._id">Eliminar</nuxt-link>
        </td>
      </tr>
    </table>
    <p><nuxt-link to="/members/create">Crear un member</nuxt-link></p>
  </section>
</template>
<script>
export default {
  data () {
    return {
      members: [],
      loaded: false
    }
  },
  created () {
    const url = '/members'
    this.makeRequest({url}, 'get', ({members}) => {
      this.members = members
      this.loaded = true
    }, () => {

    })
  }
}
</script>
