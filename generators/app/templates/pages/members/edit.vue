<template>
  <section>
    <h2>Editando {{$route.query.id}}</h2>
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
        <p><nuxt-link to="/members">Volver atras</nuxt-link> <button type="submit"> Actualizar</button></p>
      </div>
    </form>
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
    this.makeRequest({url: this.memberUri}, 'get',
      ({member}) => {
        this.member = member
      }, (error) => {
        console.log(error)
      }
    )
  },
  computed: {
    memberUri () {
      return '/members/' + this.$route.query.id
    }
  },
  methods: {
    submitMember () {
      this.makeRequest({url: this.memberUri, data: this.member}, 'put',
        ({member}) => {
          this.$router.push('/members/' + member._id)
        }, (error) => {
          console.log(error)
        }
      )
    }
  }
}
</script>
