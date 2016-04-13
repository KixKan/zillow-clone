import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('house');
  },
  actions: {
    go(id){
      this.transitionTo('detail',id);
    }
  }
});
