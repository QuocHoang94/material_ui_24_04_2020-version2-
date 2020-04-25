import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import styles from './styles'
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Taskboard from '../Taskboard';
import theme from '../../commons/Theme';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';

const store = configureStore();
class App extends Component {
  render() {
    // console.log("props", this.props);
    const { classes } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Taskboard></Taskboard>
        </ThemeProvider>
      </Provider>
    );
  }
}


export default withStyles(styles)(App);
