import Vue from 'vue/dist/vue.esm'
import showRecipe from '../showRecipe.vue'

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: '#recipe',
    functional: true,
    components:{
        showRecipe
    },
    data: { recipe: recipe }
    });
});