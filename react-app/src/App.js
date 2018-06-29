import React, {Fragment} from 'react';

class App extends React.Component {

  state = { name: 'Nir' };

  updateForm = ({ currentTarget }) => {
    this.setState({ name:currentTarget.value })
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render(){
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
        <input type="text" onChange={this.updateForm} value={this.state.name}/>
         <button>send</button>
        </form>

        <pre>{ JSON.stringify(this.state, 2, 2)}</pre>

      </Fragment>


    )
  }


}


export default App;