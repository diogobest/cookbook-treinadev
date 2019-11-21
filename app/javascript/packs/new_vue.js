
import Vue from 'vue/dist/vue.esm'
import VueResource from 'vue-resource'

Vue.use(VueResource)

document.addEventListener('DOMContentLoaded', () => {

  var element = document.getElementById("recipe-form")

  if (element != null) {
    var recipe = JSON.parse(element.dataset.recipe)

  var app = new Vue({
    el: element,
    data: function() {
      return { recipe: recipe }
    },
    methods: {
      saveRecipe() {
        this.$http.post('/recipes', { recipe: this.recipe }).then(response => {
          console.log(response)
        });
       // window.location.replace('/recipes/'+this.recipe_id);
        // this.$http.get('/recipes/'+recipe.id).then()
      },
      created: function() {
        this.recipe_id = recipe_id;
        }
    }
  });
}
});
