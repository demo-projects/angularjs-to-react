import angular from 'angular';


const signInForm = {
  controller: function () {
    this.user = {};
    this.send = () => {
      console.log(this.user);
    }
  },
  template: `
  <form ng-submit="$ctrl.send()">
    <label>Username</label>        
    <input type="text" ng-model="$ctrl.user.name">
    <button>submit</button>
  </form>
  <pre>{{ $ctrl.user }}</pre>
  `
};


export default angular.module('AngularApp.components', [])
  .component('signIn', signInForm)
