import DS from 'ember-data';

export default DS.Model.extend({
  foodName: DS.attr(),
  ingredients: DS.attr(),
  instructions: DS.attr(),
  image: DS.attr()
});
