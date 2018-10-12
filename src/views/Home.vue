<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row d-flex">
        <div class="col-md-12 px-0">
          <Dreheader/>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-md-4 mb-2">
          <div class="card border-0 text-left">
            <div class="card-body bg-dre">
              <h6><b><i class="fas fa-search"></i> BUSQUEDA</b></h6>
                <hr>
                <form @submit.prevent="buscarCertificadoPorDni">
                  <div class="form-group">
                    <label for="t_docu">Tipo de Documento</label>
                    <select name="t_docu" id="t_docu" class="form-control">
                      <option value="DNI" selected>DNI</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="dni">N° de Documento</label>
                    <input v-model="dni" type="text" required class="form-control" id="dni" aria-describedby="dniHelp">
                  </div>
                  <hr>
                  <p>
                    <button class="btn btn-ligth m-2" type="submit">Buscar</button>
                    <button class="btn btn-ligth m-2" type="button" @click.prevent="limpiar">Limpiar</button>
                  </p>
                  </form>
            </div>
          </div>
        </div>
        <div  class="col-md-8 mb-2">
          <router-view></router-view>
        </div>
      </div>
      <div class="row">
        <div class="col-12"></div>
        <div class="w-100"></div>
      </div>
    </div>
    <footer class="footer mt-4 mb-0">
      <pie></pie>
    </footer>
  </div>
</template>
<script>
/* eslint-disable */
// @ is an alias to /src
import Header from '@/components/header.vue'
import Pie from '@/components/footer.vue'

export default {
  name: 'home',
  components: {
    Dreheader: Header,
    Pie: Pie
  },
  created: function () {
    console.log(process.env)
  },
  data () {
    return {
      buscando: false,
      dni: '',
      resultados: []
    }
  },
  methods: {
    buscarCertificadoPorDni: function () {
      this.$router.push({ name: 'home' })
      var url = process.env.VUE_APP_API + 'certificados/dni'
      this.buscando = true
      this.axios.post(url, { dni: this.dni }).then(response => {
        this.resultados = response.data.user.data
        if (response.data.user.total === 0) {
          console.log('no hay')
          this.toastr.info('No se encontraron resultados')
        }
        this.buscando = false
      }).catch(error => {
        this.buscando = false
        // console.log(error)
        this.toastr.info('error')
      })
    },
    limpiar: function () {
      this.resultados = []
      this.dni = ''
      this.$router.push({ name: 'home' })
    },
    vermiscertificados: function (user) {
      this.$router.push({ name: 'Certificados', params: { 'persona': user } })
    }
  }
}
</script>
<style>
.bg-dre{
  background: #4C6A80 !important;
  color:white;
  border-radius: 10px;

border-bottom: 4px solid #69CBD7;

border-top: 4px solid #69CBD7;
}

.footer {
   position:inherit;
   left:0px;
   bottom:0px;
   width:100%;
}
</style>
