  <template>  
    <div class="recipe">
      <div class="box">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>
                <strong><a :href="/recipes/+recipes.id" id="link-recipe">{{recipes.title}}</a></strong> <small>{{recipes.recipe_type}}</small>
                <br>
                {{recipes.cuisine}}
              </p>
            </div>
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small"><i class="fa fa-heart"></i></span>
                  <span class="likes">{{recipes.difficulty}}</span>
                </a>
              </div>
          </div>
        </article>
      </div>
    </div>

  </template>

<script>
  export default {
   props: {
    recipes: Object
  },
}
</script>

<style>
  a:link {
    color: black;
  }
  
  /* visited link */
  a:visited {
    color: black;
  }
  
</style>