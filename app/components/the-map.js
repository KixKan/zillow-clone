import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  go(id){
    this.sendAction('go', id);
  },
}
});
