import config from '../config/environment';

import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
  //  var key = config.myApiKey;
  var query = params.recipe;
  var proxy = 'https://cors-anywhere.herokuapp.com/';
   var url = proxy + 'http://food2fork.com/api/search?key=07d55539af2f1a1d2526777d2be24b74&q='+query;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.recipes;
   });
  // return Ember.$.ajax({
  //   method: 'GET',
  //   url: proxy + url,
  //   dataType: "json"
  //
  // }).done(function (data) {
  //   return data.results;
  // })
  }
});
