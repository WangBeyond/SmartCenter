'use strict';
 
var React = require('react-native');
var styles = require('../styles/style');
var Sessions = require('./sessionList');

var {
  StyleSheet,
  View,
  Text,
  Navigator,
  Component,
    TouchableHighlight,
    ActivityIndicatorIOS,
    AsyncStorage,
    } = React;

var NavigatioBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <TouchableHighlight
            style={styles.leftNavButton}
          underlayColor="transparent"
          onPress={() => {if (index > 0) navigator.pop(); }}>
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableHighlight>
      )
    }
  },
  Title: function(route, navigator, index, navState) {
    return <Text style={styles.title}>{route.title? route.title : 'Sessions' }</Text>
  },
  RightButton: function(route, navigator, index, navState) {
    return (
        <TouchableHighlight
            style={styles.rightNavButton}
            underlayColor="transparent"
            onPress={route.logout}>
          <Text style={styles.navButtonText} >Logout</Text>
        </TouchableHighlight>
    )
  }
}

 

export class Main extends React.Component {

  _logout() {
    AsyncStorage.removeItem('user_info', (err)=>{
      this.props.navigator.push({id: 1});
      console.log(err);
    })
  }

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
            component: Sessions,
            logout: this._logout.bind(this),
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


