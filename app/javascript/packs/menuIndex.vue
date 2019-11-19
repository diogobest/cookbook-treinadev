<template> 
  <p><a href="/recipes/recipes.id">{{ recipes.title }}</a> {{ recipes.recipe_type }} {{ recipes.cuisine}} {{ recipes.difficulty}} </p> 
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
