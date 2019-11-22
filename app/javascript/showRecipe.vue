<template>
    <div class='column is-two-thirds preview card'>
      <div id="cv-preview" class="card-content">
        <div class="recipe_title">
            <p class="subtitle" v-if="recipe.title != null">Título de Receita</p>
            <p class="text">
            {{ recipe.title }}
            </p>
        </div>
    
        <div class="recipe_type">
            <p class="subtitle" v-if="recipe.recipe_type != null">Tipo de Receita</p>
            <p class="text">
            {{ recipe.recipe_type }}
            </p>
        </div>
        
        <div class="cuisine">
            <p class="subtitle" v-if="recipe.cuisine != null">Cozinha</p>
            <p class="text">
            {{ recipe.cuisine }}
            </p>
        </div>
        
        <div class="difficulty">
            <p class="subtitle" v-if="recipe.difficulty != null">Dificuldade</p>
            <p class="text">
            {{ recipe.difficulty }}
            </p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        props: ['recipe']
  }
</script>

<style>
.subtitle {
   font-size: 1em
  }

.text {
   font-size: 1em
}

.btn-editar {
    font-size: 2em
}

</style>