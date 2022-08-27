import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

class InputElement extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <TextField id="outlined-required" label={this.props.text} />
      </>
    );
  }
}

export default InputElement;
