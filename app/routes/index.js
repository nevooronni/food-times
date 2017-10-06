import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('recipes');
  },

  actions: {
    saveRental3(params) {
      var newRecipe = this.store.createRecord('recipe', params);
      newRecipe.save();
      this.transitionTo('index');
    },


    recipeLookup(params) {
      console.log(params);
      this.transitionTo('results',params);
    }
  }
});
