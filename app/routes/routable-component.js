import Ember from 'ember';

export default Ember.Route.extend({


  setupController: function(controller) {
   controller.setProperties({
     lat: 45.5231,
     lng: -122.6765,
     zoom: 15,
     overlays: Ember.A([
       {
         id: '1',         // Recommended
         lat: 45.5231,  // Required
         lng: -122.6765,        // Required
         content: '<h3 class="glyphicon glyphicon-home"></h3>',
         layer: 'floatPane',       // Id of any of the layers defined in google.maps.MapPanes
         verticalAlign: 'top',      // middle | bottom
         horizontalAlign: 'center', // left | right
         click: function(event, overlay) {
           alert("hey!");
         },
         dblclick: function(event, overlay) {},
         mouseup: function(event, overlay) {},
         mousedown: function(event, overlay) {},
         mouseover: function(event, overlay) {},
         mousemove: function(event, overlay) {},
         mouseout: function(event, overlay) {}
       },
       {
         id: '2',         // Recommended
         lat: 45.526002,  // Required
         lng: -122.681050,        // Required
         content: '<h3 class="glyphicon glyphicon-home"></h3>',
         layer: 'floatPane',       // Id of any of the layers defined in google.maps.MapPanes
         verticalAlign: 'top',      // middle | bottom
         horizontalAlign: 'center', // left | right
         click: function(event, overlay) {
           alert("yo!");
         },
         dblclick: function(event, overlay) {},
         mouseup: function(event, overlay) {},
         mousedown: function(event, overlay) {},
         mouseover: function(event, overlay) {},
         mousemove: function(event, overlay) {},
         mouseout: function(event, overlay) {}
       }
     ])
   });
 }
});
