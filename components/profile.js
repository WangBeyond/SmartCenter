'use strict';
 
var React = require('react-native');
import { Button } from '../components/button';
import styles from '../styles/style';

var {
  StyleSheet,
  View,
  Text,
  Component,
    TouchableHighlight,
    AsyncStorage,
    } = React;

 
export class Profile extends React.Component {

  _logout() {
    AsyncStorage.removeItem('user_info', (err)=>{
      console.log(err);
      this.props.popBack();
    })
  }

  render() {
    return (
      //<View style={styles.container}>
      //  <TouchableHighlight onPress={this._logout.bind(this)}>
      //    <Text style={styles.description}>
      //      Logout
      //    </Text>
      //  </TouchableHighlight>
      //</View>
        <View style={styles.container}>
          <Button onPress={this._logout.bind(this)}>Log out</Button>
        </View>
    );
  }
}

