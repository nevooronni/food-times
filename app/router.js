import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact');
  this.route('about');
  this.route('recipes');
  this.route('recipes', {path: '/recipe/:recipe_id'});
  this.route('results');
  this.route('results', {path: '/results/:recipe'});
});

export default Router;
