'use strict';
 
var React = require('react-native');
import styles from '../styles/style';

var {
  StyleSheet,
  View,
  Text,
  Component,
} = React;

 
export class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Profile
        </Text>
      </View>
    );
  }
}

