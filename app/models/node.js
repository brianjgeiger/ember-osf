import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('string'),
  dateCreated: DS.attr('date'),
  dateModified: DS.attr('date'),
  fork: DS.attr('boolean'),
  public: DS.attr('boolean')
});
