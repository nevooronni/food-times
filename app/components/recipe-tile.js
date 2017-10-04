import Ember from 'ember';

export default Ember.Component.extend({
  editRecipeForm: false,
  actions: {
    edit(recipe, params) {
      this.sendAction('edit', recipe, params);
    }
  }
});
