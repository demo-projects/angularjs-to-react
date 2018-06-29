export class Store {

  // @ngInject
  constructor($rootScope) {
    this._$scope = $rootScope;

    this.state = {
      users: ['nir','joe','roman'],
      products: ['nir','joe','roman'],
      loading: true,
    };
  }

  setState(state) {
    this._$scope.$evalAsync( () =>{
      this.state = Object.assign({}, this.state, state);
    })
  }

  getState(key){
    return this.state[key];
  }
}
