import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('house', {
      orderBy: 'number',
      startAt: 500000
    });
  },
  actions: {
    go(id){
      this.transitionTo('detail',id);
    }
  }
});
