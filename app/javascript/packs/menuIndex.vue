<template> 
  <ul>
    <li><a :href="/recipes/+recipes.id">{{ recipes.title }}</a></li> 
  </ul>
</template>


<script>
  export default {
    props: ['recipes']
  }
</script>

<style>
p {
  font-size: 100%; }
</style>
