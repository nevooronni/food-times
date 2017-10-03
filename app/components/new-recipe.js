import Ember from 'ember';

export default Ember.Component.extend({
  addNewRecipe: false,
  actions: {
    recipeFormShow() {
      this.set('addNewRecipe', true);
    }
  }
});
