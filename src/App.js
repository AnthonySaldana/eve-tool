import React, { Component } from 'react';
import logo from './logo.svg';
import graphics from './EVESDE/fsd/json/graphicIDs'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      ship: null
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  renderShips = () => {
    let html = []
    for (var key in graphics) {
        if (graphics.hasOwnProperty(key)) {
            html.push( <MenuItem value={key}>{graphics[key].description}</MenuItem> )
        }
    }
    console.log(html)
    return html;
  }

  render() {
    return (
      <React.Fragment>
        <FormControl>
          <InputLabel htmlFor="ship">Ship</InputLabel>
          <Select
            value={this.state.ship}
            onChange={this.handleChange}
            inputProps={{
              name: 'ships',
              id: 'ship',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            { this.renderShips() }
          </Select>
        </FormControl>
      </React.Fragment>
    );
  }
}

export default App;
