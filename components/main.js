'use strict';
 
var React = require('react-native');
var Sessions = require('./sessions');
var styles = require('../styles');

var {
  StyleSheet,
  View,
  Text,
  Navigator,
  Component,
    TouchableHighlight
} = React;
 
var NavigatioBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <TouchableHighlight
            style={styles.leftNavButton}
          underlayColor="transparent"
          onPress={() => {if (index > 0) navigator.pop(); }}>
          <Text style={styles.leftNavButtonText}>Back</Text>
        </TouchableHighlight>
      )
    }
  },
  Title: function(route, navigator, index, navState) {
    return <Text style={styles.title}>{route.title? route.title : 'Sessions' }</Text>
  },
  RightButton: function(route, navigator, index, navState) {
    if (route.onPress) {
      return <Text style={styles.leftNavButtonText}>Back</Text>;
    } else {
      return null;
    }
  }
}

 

class Main extends React.Component {

  renderScene(route, navigator) {
    return <route.component {...route.passProps} navigator={navigator} />
  }

  render() {
    return (
      <Navigator
        style={{flex: 1}}
        renderScene={this.renderScene}
        initialRoute={{
          name: 'Sessions',
          component: Sessions
      }}
        navigationBar={
          <Navigator.NavigationBar
            style={ styles.nav }
            routeMapper={ NavigatioBarRouteMapper } />
        }
      />    
    )
  }
}


module.exports = Main;
