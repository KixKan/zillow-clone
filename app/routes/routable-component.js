import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function(controller) {
   controller.setProperties({
     lat: 45.496817,
     lng: -122.611470,
     zoom: 12,
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
       },
       {
         id: '7',         // Recommended
         lat: 45.524476,  // Required
         lng: -122.622631,        // Required
         content: '<a href="http://localhost:4200/detail/7"><h4 class="glyphicon glyphicon-home"></h4></a>',
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
         id: '8',         // Recommended
         lat: 45.493015,  // Required
         lng: -122.728028,        // Required
         content: '<a href="http://localhost:4200/detail/8"><h4 class="glyphicon glyphicon-home"></h4></a>',
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
         id: '9',         // Recommended
         lat: 45.578912,  // Required
         lng: -122.735272,        // Required
         content: '<a href="http://localhost:4200/detail/9"><h4 class="glyphicon glyphicon-home"></h4></a>',
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
         id: '10',         // Recommended
         lat: 45.460622,  // Required
         lng: -122.644770,        // Required
         content: '<a href="http://localhost:4200/detail/10"><h4 class="glyphicon glyphicon-home"></h4></a>',
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
         id: '11',         // Recommended
         lat: 45.458003,  // Required
         lng: -122.682489,        // Required
         content: '<a href="http://localhost:4200/detail/11"><h4 class="glyphicon glyphicon-home"></h4></a>',
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
         id: '12',         // Recommended
         lat: 45.519682,  // Required
         lng: -122.552242,        // Required
         content: '<a href="http://localhost:4200/detail/12"><h4 class="glyphicon glyphicon-home"></h4></a>',
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
         id: '13',         // Recommended
         lat: 45.516527,  // Required
         lng: -122.586926,        // Required
         content: '<a href="http://localhost:4200/detail/13"><h4 class="glyphicon glyphicon-home"></h4></a>',
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
         id: '14',         // Recommended
         lat: 45.516527,  // Required
         lng: -122.586926,        // Required
         content: '<a href="http://localhost:4200/detail/14"><h4 class="glyphicon glyphicon-home"></h4></a>',
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
         id: '15',         // Recommended
         lat: 45.478919,  // Required
         lng: -122.584687,        // Required
         content: '<a href="http://localhost:4200/detail/15"><h4 class="glyphicon glyphicon-home"></h4></a>',
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
         id: '16',         // Recommended
         lat: 45.487914,  // Required
         lng: -122.624457,        // Required
         content: '<a href="http://localhost:4200/detail/16"><h4 class="glyphicon glyphicon-home"></h4></a>',
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
         id: '17',         // Recommended
         lat: 45.534961,  // Required
         lng: -122.704433,        // Required
         content: '<a href="http://localhost:4200/detail/17"><h4 class="glyphicon glyphicon-home"></h4></a>',
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
         id: '18',         // Recommended
         lat: 45.571666,  // Required
         lng: -122.640038,        // Required
         content: '<a href="http://localhost:4200/detail/18"><h4 class="glyphicon glyphicon-home"></h4></a>',
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
         id: '19',         // Recommended
         lat: 45.574068,  // Required
         lng: -122.681590,        // Required
         content: '<a href="http://localhost:4200/detail/19"><h4 class="glyphicon glyphicon-home"></h4></a>',
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
