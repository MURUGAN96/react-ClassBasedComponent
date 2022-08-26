import React from 'react';

//Use state
//this.state{},this.setState{}
//Mounting
//Constructor
//static getDerivedStateFromProps
//render
//componentDidMount
//Updating
//static getDerivedStateFromProps
//shouldComponentUpdate
//getSnapshotBeforeUpdate
//componentDidUpdate
//Unmounting
//coponentWillUnmount

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    return <h1>Hii</h1>;
  }
}

export default App;
