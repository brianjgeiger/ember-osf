import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:8000',
  namespace: 'v2',
  corsWithCredentials: true,
  findAll: function(store, type, sinceToken) {
    var query;

    if (sinceToken) {
      query = { since: sinceToken };
    }

    return this.ajax(this.buildURL(type.typeKey)+'/nodes/', 'GET', { data: query });
  }
});
