// root element
export function app() {
  return {
    scope: {},
    compile: function () {
      console.log('compile phase');
      return {
        pre: function () {
          console.log('pre link');
        },
        post: function () {
          console.log('post link');
        },
      }
    },
    controller: class AppController  {

      constructor($scope) {
        console.log('controller init');
        $scope.list = ['Nir', 'Jow', 'Boris', 'Jeff'];
        $scope.$on('$destroy', () => console.log('scope destroyed'));
        $scope.$watch( () => console.log('DIGEST') )
      }
    },
    template: `
      <h1 ng-repeat="name in list">{{name}}</h1>  
    `
  };
}
