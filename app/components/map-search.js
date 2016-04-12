import Ember from 'ember';

export default Ember.Component.extend({
  gMap: Ember.inject.service(),

  actions: {

    standardGeocode(address) {
      this.get('gMap')
        .geocode({address})
        .then((geocodes) => {
          // Get first geocode latitude
          console.log(geocodes[0].geometry.location.lat());
        })
        .catch((err) => console.error(err));
    }
  },
});
