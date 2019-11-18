class RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  def edit
    @recipe = Recipe.find(params[:id])
  end

  def new
    @recipe = Recipe.new
  end

  def create
    @recipe = Recipe.new(params.require(:recipe).permit(:title, :recipe_type, :cuisine, :difficulty))

    if @recipe.save
      redirect_to @recipe
    else
      render new
    end
  end

  def update
    @recipe = Recipe.find(params[:id])

    if @recipe.update(params.require(:recipe).permit(:title, :recipe_type, :cuisine, :difficulty))
      redirect_to @recipe
    else
      render new
    end
  end
end
