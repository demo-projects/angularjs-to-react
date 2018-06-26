import angular            from 'angular';
import { HomeController } from 'states/home/home';

export default angular.module('AngularApp.controllers', [])
  .controller('HomeController', HomeController);
