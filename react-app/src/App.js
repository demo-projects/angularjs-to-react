import React from 'react';

export class App extends React.Component {
  render(){
    return (
      <div>
        <h1>App Component</h1>
        <h2>Just for test</h2>
      </div>
    )
  }
}

export class Link extends React.Component {
  render() {
    return <a href={this.props.url}>click</a>
  }
}
