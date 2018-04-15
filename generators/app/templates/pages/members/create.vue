<template>
  <section>
    <h2>Creando un miembro</h2>
    <form @submit.prevent="submitMember">
      <div>
        <p>name</p>
        <input type="text" v-model="member.name" />
      </div>
      <div>
        <p>surname</p>
        <input type="text" v-model="member.surname" />
      </div>
      <div>
        <p>email</p>
        <input type="text" v-model="member.email" />
      </div>
      <div>
        <p>password</p>
        <input type="text" v-model="member.password" />
      </div>
      <div>
        <p><nuxt-link to="/members">Volver atras</nuxt-link> <button type="submit"> Crear</button></p>
      </div>
    </form>
  </section>
</template>
<script>
export default {
  data () {
    return {
      member: {
        name: '',
        surname: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submitMember () {
      let url = '/members'
      this.makeRequest({url, data: this.member}, 'post',
        ({memberCreated}) => {
          console.log('Se ha creado', memberCreated)
          this.$router.push('/members/' + memberCreated._id)
        }, (error) => {
          console.log(error)
        }
      )
    }
  }
}
</script>
