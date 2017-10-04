import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('recipes', params.recipe_id);
  },
  actions: {
    edit(recipe, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          recipe.set(key,params[key]);
        }
      });
      recipe.save();
      this.transitionTo('index');
    }
  }
});
