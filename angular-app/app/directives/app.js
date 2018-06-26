// root element
export function app() {
  return {
    controller: function ($scope) {
      $scope.list = ['Nir', 'Jow', 'Boris', 'Jeff'];
    },
    template: `
      <h1 ng-repeat="name in list">{{name}}</h1>  
    `
  };
}
