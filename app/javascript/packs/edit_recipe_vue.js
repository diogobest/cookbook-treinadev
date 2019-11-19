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
      editForm() {
        this.$http.patch('/recipes/'+recipe.id, { recipe: this.recipe })
      
      }
    }
  });
}
});