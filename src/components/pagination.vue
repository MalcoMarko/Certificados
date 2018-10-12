<template>
<div class="">
<nav class="float-right py-2">
<ul class="pagination pagination-sm" style="margin-bottom: 0px;">
  <li class="page-item" v-if="pagination.current_page > 1">
    <a class="page-link" href="#" aria-label="Previous" v-on:click.prevent="changePage(1)">
    <span aria-hidden="true">&laquo;</span>
    <span class="sr-only">Previous</span>
    </a>
  </li>
  <li class="page-item" v-for="(page,index) in pagesNumber" :key="index" :class=" [page==isActived ? 'active' : ''] ">
    <a class="page-link"  v-on:click.prevent="changePage(page)">{{page}} </a>
  </li>
    <li class="page-item" v-if="pagination.current_page < pagination.last_page">
    <a class="page-link" href="#" aria-label="Next" v-on:click.prevent="changePage(pagination.last_page)">
    <span aria-hidden="true">&raquo;</span>
    <span class="sr-only">Next</span>
    </a>
  </li>
  </ul>
  <p class="text-muted float-right m-0" style="font-size: 13px;">
    {{pagination.from}} - {{pagination.to}} de {{pagination.total}} {{itemsName}}
  </p>
</nav>
</div>
</template>
<script>
/* eslint-disable */
export default {
  props: {
    pagination: {
      type: Object
    },
    offset: {
      type: Number
    },
    itemsName: {
      type: String,
      default: "Items"
    }
  },
  computed: {
    isActived: function() {
      return this.pagination.current_page
    },
    pagesNumber: function () {
      if (!this.pagination.to) {
        return []
      }

      var from = this.pagination.current_page - this.offset // TODO OFFSET
      if (from < 1) {
        from = 1
      }

      var to = from + this.offset * 2 // TODO
      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page
      }

      var pagesArray = []
      while (from <= to) {
        pagesArray.push(from)
        from++
      }
      return pagesArray
    }
  },
  data: function () {
    return {}
  },
  methods: {
    changePage: function (page) {
      this.$emit('changePage', page)
    }
  }
}
</script>
