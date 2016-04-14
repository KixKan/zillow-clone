import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      agents: this.store.findAll('agent'),
      houses: this.store.findAll('house')
    });
  },
});
