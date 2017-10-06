import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    recipeLookup() {
      var params = {
        recipe: this.get('recipe')
      };
      this.sendAction('recipeLookup', params);
    }
  }
});
