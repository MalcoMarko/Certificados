<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-md-6">
          <div class="card">
          <div class="card-body">
            <h5 class="card-title">Sistema De Certificacion Digitalizada</h5>
            <h6><b>BUSQUEDA DE CERTIFICADOS</b></h6>
            <hr>
            <form @submit.prevent="buscarCertificadoPorDni">
              <div class="form-group">
                <label for="dni">Ingrese Su DNI</label>
                <input v-model="dni" type="text" class="form-control" id="dni" aria-describedby="dniHelp" placeholder="Dni">
                <small id="emailHelp" class="form-text text-muted">su dni debe ser el mismo con el que esta registrado en nuestra plataforma sitaav.org.</small>
              </div>
            </form>
            <div v-if="buscando" class="alert alert-warning" role="alert">Buscando...</div>
          </div>
        </div>
        </div>
      </div>
      <div class="row d-flex justify-content-center mt-3">
        <div class="col-md-6 table-responsive">
          <table class="table table-striped table-hover">
            <tr v-for="(user,index) in resultados" :key="index">
              <td>{{user.apepaterno}} {{user.apematerno}} </td>
              <td>{{user.nombres}}</td>
              <td><button class="btn btn-info btn-sm" @click="vermiscertificados(user)"><i class="fas fa-award"></i> Mis Certificados</button> </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  created: function () {
    console.log(process.env)
  },
  data () {
    return {
      buscando: 0,
      dni: '',
      resultados: ''
    }
  },
  methods: {
    buscarCertificadoPorDni: function () {
      var url = process.env.VUE_APP_API + 'certificados/dni'
      this.buscando = 1
      this.axios.post(url, { dni: this.dni }).then(response => {
        this.resultados = response.data.user.data
        this.buscando = 0
      }).catch(error => {
        this.buscando = 0
        console.log(error)
      })
    },
    vermiscertificados: function (user) {
      this.$router.push({ name: 'Certificados', params: { 'persona': user } })
    }
  }
}
</script>
