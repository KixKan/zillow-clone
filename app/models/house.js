import DS from 'ember-data';

export default DS.Model.extend({
  street: DS.attr(),
  cityState: DS.attr(),
  type: DS.attr(),
  image1: DS.attr(),
  image2: DS.attr(),
  image3: DS.attr(),
  image4: DS.attr(),
  bedrooms: DS.attr(),
  price: DS.attr(),
  description: DS.attr()
});
