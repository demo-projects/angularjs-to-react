export class Users {

  constructor($http, Validator, Store) {
    this.$http = $http;
    this.Store = Store;
  }

  getUsers(){
    this.fetch.get('https://randomuser.me/api/')
      .then(results => this.Store.dispatch({users: results.data.results}));
  }

  addUser(){
    return this.$http.post('');
  }
}
