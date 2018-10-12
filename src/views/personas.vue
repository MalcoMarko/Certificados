<template>
    <div class="personas">
        <div v-if="$parent.resultados.length==0" class="inicio">
            <h2>Bienvenido al Buscador de <br> Certificados</h2>
          <p>Ingrese los criterios de búsqueda y<br>
          luego dé clic en el botón <u>Buscar</u>.</p>
          <br>
          <p v-if="$parent.buscando"><i class="fas fa-spinner fa-pulse fa-5x"></i></p>
          <p v-else><i class="fas fa-search fa-5x"></i> </p>
        </div>
        <div v-else class="resultados">
            <h2>Resultados encontrados</h2>
          <table class="table table-striped table-hover">
            <tr v-for="(user,index) in $parent.resultados" :key="index">
              <td>{{user.apepaterno}} {{user.apematerno}} {{user.nombres}}</td>
              <td><button class="btn btn-info btn-sm" @click="vermiscertificados(user)">
                  <i class="fas fa-award"></i> Ver Certificados</button> </td>
            </tr>
          </table>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Personas',
  methods: {
    vermiscertificados: function (user) {
      this.$router.push({ name: 'Certificados', params: { 'persona': user } })
    }
  }
}
</script>
