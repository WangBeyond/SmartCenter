'use strict';
 
var React = require('react-native');
var Sessions = require('./sessions');
var styles = require('../styles');

var {
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
  Component
} = React;
 


 


class Main extends React.Component {

  constructor() {
    super();
    this.state = {navigationBarHidden: false}
  }

  toggleNavBar() {
    this.setState({ navigationBarHidden: !this.state.navigationBarHidden });
  }

  render() {
    return (
      <NavigatorIOS
        ref="nav"
        style={styles.nav}
        itemWrapperStyle={styles.navWrap}
        navigationBarHidden={this.state.navigationBarHidden}
        initialRoute={{
          title: 'Sessions',
         component: Sessions,
          passProps: {
          toggleNavBar: this.toggleNavBar.bind(this)
        }
      }}
      />    
    )
  }
}


module.exports = Main;
