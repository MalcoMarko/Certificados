<template>
  <div class="Certificados">
    <h1>Certificados Otorgados</h1>
    <div class="container">
      <div v-if="buscando" class="alert alert-warning" role="alert">Buscando Sus Certificados...</div>
      <div class="row">
        <div class="col-md-12">
          <table class="table">
            <tr v-for="(certificado,index) in resultados.data" :key="index">
              <td><img :src="certificado.matricula.curso.certificados.imagen" alt="img certificado" style="height:80px;"></td>
              <td>{{certificado.matricula.curso.nombre}} </td>
              <td><a :href="certificado.pdf" target="_blank"> <i class="fas fa-file-download"></i> Descargar</a></td>
            </tr>
          </table>
        </div>
        <div v-if="vacio==1" class="alert alert-warning" role="alert">No se encontro ningun resultado</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Certificados',
  props: ['persona'],
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
    get_certificados: function () {
      var url = process.env.VUE_APP_API + 'certificados/vercertificados'
      this.buscando = 1
      this.axios.post(url, { persona_id: this.persona.id }).then(response => {
        this.resultados = response.data.hechos
        if (this.resultados.data.lenght === 0) {
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
