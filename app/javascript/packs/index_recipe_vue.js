import Vue from 'vue/dist/vue.esm'
import menuIndex from '/cookbook/app/javascript/packs/menuIndex.vue'

document.addEventListener('DOMContentLoaded', () => {
  console.log(recipes)

  const menu = new Vue({
      el: '#menu',
      functional: true,
      components: { menuIndex },
      data: { recipes: recipes }
    });
    console.log(menu)
  });


