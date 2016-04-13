import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('routable-component');
  this.route('detail', {path: '/detail/:house_id'});
  this.route('agent');
  this.route('agent-detail', {path: '/agent-detail/:agent_id'});
});

export default Router;
