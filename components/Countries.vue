<template>
  <div class="countries">
    <ul class="countries-u">
        <li v-for="countrie in countries" :key="countrie.Name">
          <span>{{ countrie.Name }}</span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'countries',
  props: {
    countries: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
.countries{
  position: relative;
  ul{
    overflow: hidden;
  }
}
</style>

