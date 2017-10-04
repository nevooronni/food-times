import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return this.store.findAll('recipes');
  },

  actions: {
      saveRecipe3(params) {
        var newRecipe = this.store.createRecord('recipes', params);
        newRecipe.save();
        this.transitionTo('index');
      },
     edit(recipe, params) {
       Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
         recipe.set(key,params[key]);
    }
  });
  recipe.save();
  this.transitionTo('index');
},
    }
});
