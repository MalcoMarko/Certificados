<template>
<div class="container-fluid consul_head">
<div class="row central">
<div class="col-md-3 cab1">
    <img src="https://sitaav.org/img/drea.jpg" class="img1"/>
    <br>
    <p class="h6">Dirección Regional de Educación Ancash</p>
    <img src="https://sitaav.org/img/dgp.jpg" class="img2"/>

    <img src="https://scontent.flim5-2.fna.fbcdn.net/v/t1.15752-9/51032891_2149331695123263_1054469506878930944_n.png?_nc_cat=101&_nc_pt=1&_nc_ht=scontent.flim5-2.fna&oh=28e172bcc026bea356a12232fbf24360&oe=5CB78296" class="img2"/>

</div>
<div class="col-md-6 cab2">
    <span class="text1"><i class="far fa-file-alt"></i> Sistema De Certificación Digitalizada </span>
    <br>
    <span class="text2">Búsqueda de Certificados</span>
</div>
<div class="col-md-3 cab3">
<img src="https://www.dropbox.com/s/fifvz9bd3i0rcsb/logo-sitaav.png?raw=1" alt="#" class="img-fluid">
</div>
</div>
</div>
</template>
<script>
export default {
  name: 'Header'
}
</script>

<style>
.consul_head {
    background: #4C6A80;
    width: 100%;
    overflow: hidden;
    border-top: 10px solid #69CBD7;
}
.consul_head .central {
    margin: 0 auto;
    width: 100%;
    /* min-width: 980px; */
    overflow: hidden;
    padding-top: 25px;
    padding-bottom: 25px;
}
.consul_head .central .cab1 {
    float: left;
    /* width: 30.7%; */
    text-align: center;
    font-size: 15pt;
    color: #FFFFFF;
    border-right: 2px solid #A6A6A6;
    padding-right: 1%;
}
.cab3 {
border-left: 2px solid #A6A6A6;
}
.consul_head .central .cab1 .img1 {
    width: 230px;
    height: 40px;
}
.consul_head .central .cab1 .img2 {
    width: 50px;
    height: 40px;
    margin-left: 10px;
}
.consul_head .central .cab2 {
    float: left;
    /* width: 67%; */
    padding-left: 1%;
    color: #FFFFFF;
    padding-top: 15px;
}
.consul_head .central .cab2 .text1 {
    font-size: 25pt;
}
.consul_head .central .cab2 .text2 {
    font-size: 15pt;
    color: #ECEACA;
}
</style>
