import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function(controller) {
   controller.setProperties({
     lat: 45.5231,
     lng: -122.6765,
     zoom: 13,
     overlays: Ember.A([
       {
         id: '0',         // Recommended
         lat: 45.5231,  // Required
         lng: -122.6765,        // Required
         content: '<a href="http://localhost:4200/detail/0"><h4 class="glyphicon glyphicon-home"></h4></a>',
         layer: 'floatPane',       // Id of any of the layers defined in google.maps.MapPanes
         verticalAlign: 'top',      // middle | bottom
         horizontalAlign: 'center', // left | right
         click: function(event, overlay) {
         },
         dblclick: function(event, overlay) {},
         mouseup: function(event, overlay) {},
         mousedown: function(event, overlay) {},
         mouseover: function(event, overlay) {},
         mousemove: function(event, overlay) {},
         mouseout: function(event, overlay) {}
       },
       {
         id: '1',         // Recommended
         lat: 45.526002,  // Required
         lng: -122.681050,        // Required
         content: '<a href="http://localhost:4200/detail/1"><h4 class="glyphicon glyphicon-home"></h4></a>',
         layer: 'floatPane',       // Id of any of the layers defined in google.maps.MapPanes
         verticalAlign: 'top',      // middle | bottom
         horizontalAlign: 'center', // left | right
         click: function(event, overlay) {
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
         lat: 45.526020,  // Required
         lng: -122.690931,        // Required
         content: '<a href="http://localhost:4200/detail/2"><h4 class="glyphicon glyphicon-home"></h4></a>',
         layer: 'floatPane',       // Id of any of the layers defined in google.maps.MapPanes
         verticalAlign: 'top',      // middle | bottom
         horizontalAlign: 'center', // left | right
         click: function(event, overlay) {
         },
         dblclick: function(event, overlay) {},
         mouseup: function(event, overlay) {},
         mousedown: function(event, overlay) {},
         mouseover: function(event, overlay) {},
         mousemove: function(event, overlay) {},
         mouseout: function(event, overlay) {}
       },
       {
         id: '3',         // Recommended
         lat: 45.514703,  // Required
         lng: -122.685771,        // Required
         content: '<a href="http://localhost:4200/detail/3"><h4 class="glyphicon glyphicon-home"></h4></a>',
         layer: 'floatPane',       // Id of any of the layers defined in google.maps.MapPanes
         verticalAlign: 'top',      // middle | bottom
         horizontalAlign: 'center', // left | right
         click: function(event, overlay) {
         },
         dblclick: function(event, overlay) {},
         mouseup: function(event, overlay) {},
         mousedown: function(event, overlay) {},
         mouseover: function(event, overlay) {},
         mousemove: function(event, overlay) {},
         mouseout: function(event, overlay) {}
       },
       {
         id: '4',         // Recommended
         lat: 45.516446,  // Required
         lng: -122.643863,        // Required
         content: '<a href="http://localhost:4200/detail/4"><h4 class="glyphicon glyphicon-home"></h4></a>',
         layer: 'floatPane',       // Id of any of the layers defined in google.maps.MapPanes
         verticalAlign: 'top',      // middle | bottom
         horizontalAlign: 'center', // left | right
         click: function(event, overlay) {
         },
         dblclick: function(event, overlay) {},
         mouseup: function(event, overlay) {},
         mousedown: function(event, overlay) {},
         mouseover: function(event, overlay) {},
         mousemove: function(event, overlay) {},
         mouseout: function(event, overlay) {}
       },
       {
         id: '5',         // Recommended
         lat: 45.554692,  // Required
         lng: -122.654403,        // Required
         content: '<a href="http://localhost:4200/detail/5"><h4 class="glyphicon glyphicon-home"></h4></a>',
         layer: 'floatPane',       // Id of any of the layers defined in google.maps.MapPanes
         verticalAlign: 'top',      // middle | bottom
         horizontalAlign: 'center', // left | right
         click: function(event, overlay) {
         },
         dblclick: function(event, overlay) {},
         mouseup: function(event, overlay) {},
         mousedown: function(event, overlay) {},
         mouseover: function(event, overlay) {},
         mousemove: function(event, overlay) {},
         mouseout: function(event, overlay) {}
       },
       {
         id: '6',         // Recommended
         lat: 45.528392,  // Required
         lng: -122.638391,        // Required
         content: '<a href="http://localhost:4200/detail/6"><h4 class="glyphicon glyphicon-home"></h4></a>',
         layer: 'floatPane',       // Id of any of the layers defined in google.maps.MapPanes
         verticalAlign: 'top',      // middle | bottom
         horizontalAlign: 'center', // left | right
         click: function(event, overlay) {
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
