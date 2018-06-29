

// root element
export function app() {
  return {
    controller: function (Users) {
      Users.getUsers();
    },
    controllerAs: 'App',
    template: `
      <h1>Container </h1>
      <pre>{{ App.users }}</pre>      
      <child />  
    `
  };
}

export function child() {
  return {
    controller: function(Store) {
      this.users = Store.getState('users');
    },
    template: `<h2>Child component</h2>`
  }
}


// export const child = ({title, action}) => (
//   <div>
//     <h2>{title}</h2>
//     <button onClick={action}>click</button>
//   </div>
// )
//
//
