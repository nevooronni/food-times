import Ember from 'ember';

export default Ember.Component.extend({
  editRecipeForm: false,
  actions: {
    editRecipeForm() {
      this.set('editRecipeForm', true);
    },
    edit(recipe) {
      var params = {
        foodName: this.get('foodName'),
        ingredients: this.get('ingredients'),
        instructions: this.get('instructions'),
        image: this.get('image'),
      };
      this.set('editRecipeForm', false);
      this.sendAction('edit', recipe, params);
    }
  }
});
