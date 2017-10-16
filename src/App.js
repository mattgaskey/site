import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
	lightBlue100, lightBlue500, 
	blueGrey100, blueGrey300, blueGrey400, blueGrey500,
	amberA200,
	darkBlack, fullBlack,
	white		
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import Main from './Main';
import logo from './logo.svg';
import './App.css';

const customTheme = {
	palette: {
		primary1Color: lightBlue500,
		primary2Color: lightBlue100,
    primary3Color: blueGrey400,
    accent1Color: amberA200,
    accent2Color: blueGrey100,
    accent3Color: blueGrey500,
    textColor: darkBlack,
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: blueGrey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: lightBlue500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
	}
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
        <Main />
      </MuiThemeProvider>
    );
  }
}

export default App;
