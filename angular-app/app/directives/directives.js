import angular from 'angular';
import { ifEnv } from 'directives/if-env';

export default angular.module('AngularApp.directives', [])
  .directive('ifEnv', ifEnv);
