import React from 'react';

export class Child extends React.Component {

  constructor() {
    super();
    this.state = {name: 'nir'};
    console.log('Child component constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Child getDerivedStateFromProps');
    return null;
  }

  shouldComponentUpdate(){
    console.log('Child shouldComponentUpdate');
    return true;
  }

  componentDidMount() {
    console.log('Child componentDidMount');
  }

  componentDidUpdate(){
    console.log('Child componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('Child componentWillUnmount');
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('Child getSnapshotBeforeUpdate');
    return null;
  }

  render() {
    console.log('Child component render');
    return (
      <div>
        {this.props.counter}
        <h2>Child Component</h2>
      </div>
    )
  }

}