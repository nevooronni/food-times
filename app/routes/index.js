import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return this.store.findAll('recipes');
},
showMedia: false,

  actions: {
      saveRecipe3(params) {
        var newRecipe = this.store.createRecord('recipes', params);
        newRecipe.save();
        this.transitionTo('index');
      },
      mediaFormShow() {
        this.set('showMedia', true);
      }
    }
});
