'use strict';
 
var React = require('react-native');
import styles from '../styles/style';

var {
  StyleSheet,
  View,
  Text,
  Component,
  ActivityIndicatorIOS
} = React;

 
export class Profile extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <ActivityIndicatorIOS
          style={[styles.centering, {height: 40}]}
          />
      <ActivityIndicatorIOS
          style={[styles.centering, {backgroundColor: '#eeeeee', height: 40}]}
          />
    </View>
      //<View style={styles.container}>
      //  <Text style={styles.description}>
      //    This could be your second tab
      //  </Text>
      //</View>
    );
  }
}

