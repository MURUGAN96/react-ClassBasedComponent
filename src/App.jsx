import React from 'react';
import ButtonElement from './utils/button.component';
import InputElement from './utils/inputForm.component';

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
    return (
      <div>
        <ButtonElement type="contained" text="Simple"></ButtonElement>
        <InputElement></InputElement>
      </div>
    );
  }
}

export default App;
