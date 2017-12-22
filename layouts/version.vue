<template>
  <div>
    <nuxt/>
    <div class="version-box ft_14">
      v: {{ version }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      version: '0.0.1'
    }
  }
}
</script>


<style>
.version-box{
    position: fixed;
    bottom: 10px;
    right: 10px;
    color: rgb(56, 57, 61);
}
</style>
