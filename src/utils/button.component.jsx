import React from 'react';
import Button from '@mui/material/Button';

class ButtonElement extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.disabled ? (
          <Button variant={this.props.type} disabled>
            {this.props.text}
          </Button>
        ) : (
          <Button variant={this.props.type}>{this.props.text}</Button>
        )}
      </>
    );
  }
}

export default ButtonElement;
