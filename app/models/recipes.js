import Model from 'ember-data/model';

export default Model.extend({
  foodName: DS.attr(),
  ingredients: DS.attr(),
  instructions: DS.attr(),
  image: DS.attr()
});
