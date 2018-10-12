<template>
  <div class="Certificados">
    <h2>Certificados Otorgados a:</h2>
    <p> <u>{{persona.apepaterno}} {{persona.apematerno}} {{persona.nombres}}</u> </p>
    <div class="container">
      <div v-if="buscando">
        <p><i class="fas fa-spinner fa-pulse fa-5x"></i></p>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table class="table">
            <tr>
              <th>Certificado</th>
              <th>Curso</th>
              <th>Descarga</th>
            </tr>
            <tr v-for="(certificado,index) in resultados.data" :key="index">
              <td><img :src="certificado.matricula.curso.certificados.imagen" alt="img certificado" style="height:80px;"></td>
              <td>{{certificado.matricula.curso.nombre}} </td>
              <td><a :href="certificado.pdf" target="_blank"> <i class="fas fa-file-download"></i> Descargar</a></td>
            </tr>
          </table>

        </div>
        <div class="col-lg-12" v-if="resultados.last_page>0">
          <hr>
          <mypagination itemsName="Certificados" :pagination="resultados" :offset="parseInt(2)"
          v-on:changePage="changePage"></mypagination>
        </div>
        <div class="col-md-12">
          <div v-if="vacio" class="alert alert-info" role="alert">Aun No Tiene Certificados</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Pagination from '@/components/pagination.vue'

export default {
  name: 'Certificados',
  props: ['persona'],
  components: {
    mypagination: Pagination
  },
  data () {
    return {
      resultados: '',
      buscando: 0,
      vacio: 0
    }
  },
  created: function () {
    this.get_certificados()
  },
  methods: {
    changePage (page) {
      this.resultados.current_page = page
      this.get_certificados(page)
    },
    get_certificados: function (page) {
      var url = process.env.VUE_APP_API + 'certificados/vercertificados?page=' + page
      this.buscando = 1
      this.axios.post(url, { persona_id: this.persona.id }).then(response => {
        this.resultados = response.data.hechos
        if (response.data.hechos.total === 0) {
          this.vacio = 1
        }
        this.buscando = 0
      }).catch(error => {
        console.log(error)
        this.buscando = 0
      })
    }
  }
}
</script>
