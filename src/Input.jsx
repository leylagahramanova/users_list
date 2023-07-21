import {Component} from "react";
import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
class Input extends Component {

  state = {
    text: ""
   
  }
  onChange(e) {
    this.setState({text: e.target.value});
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({text: ""});
    this.props.onSendMessage(this.state.text);
  }
  render() {
    return (
      <div className="Input">
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
        <form onSubmit={e => this.onSubmit(e)}>
           <TextField id="filled-basic"   onChange={e => this.onChange(e)}  style={{ width: "470px" }}     value={this.state.text} label="Enter message" variant="filled" />
        </form>
        </Box>
      </div>
    );
  }
}

export default Input;

