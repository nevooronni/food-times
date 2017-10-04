import Ember from 'ember';

export default Ember.Component.extend({
  addNewRecipe: false,
  actions: {
    recipeFormShow() {
      this.set('addNewRecipe', true);
    },

    saveRecipe1() {
      var params = {
        foodName: this.get('foodName'),
        ingredients: this.get('ingredients'),
        instructions: this.get('instructions'),
        image: this.get('image'),
      };
      this.set('addNewRecipe', false);
      this.sendAction('saveRecipe2', params);
    }
  }
});
