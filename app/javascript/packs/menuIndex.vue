<template>
  <ul class="list-group">
    <li class="list-group-item"><a :href="/recipes/+recipes.id">{{ recipes.title }}</a></li> 
  </ul>
</template>


<script>
  export default {
    props: ['recipes']
  }
</script>

<style>
ul{
  width: 30%
}
p {
  font-size: 100%; }
</style>
