import Vue from 'vue/dist/vue.esm'
import showRecipe from '../showRecipe.vue'

document.addEventListener('DOMContentLoaded', () => {

    console.log(recipe)

  new Vue({
    el: '#recipe',
    functional: true,
    components:{
        showRecipe
    },
    data: { recipe: recipe }
    });
});