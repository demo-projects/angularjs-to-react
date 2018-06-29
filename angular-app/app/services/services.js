import { Store } from './store';
import { Validator } from './validator';
import { Users } from './users';
import angular from 'angular';

export default angular.module('AngularApp.services', [])
  .service('Users', Users)
  .service('Validator', Validator)
  .service('Store', Store);
