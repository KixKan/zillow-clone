import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  phone: DS.attr(),
  email: DS.attr(),
  image: DS.attr(),
  houses: DS.hasMany('house', { async: true })
});
