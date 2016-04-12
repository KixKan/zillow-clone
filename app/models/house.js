import DS from 'ember-data';

export default DS.Model.extend({
  street: DS.attr(),
  cityState: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  price: DS.attr()
});
