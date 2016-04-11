import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
   controller.setProperties({
     lat: 45.5231,
     lng: -122.6765,
     zoom: 12
   });
 }
});
