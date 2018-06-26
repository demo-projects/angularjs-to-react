import { app } from './app';
import angular from 'angular';

export default angular.module('AngularApp.directives', [])
  .directive('app', app);
