'use strict'

import React from 'react-native';
var Material = require('react-native-material-design');
import styles from '../styles';

var {
  Platform,
  StyleSheet,
  View,
  ListView,
  Text,
  Component
} = React;

class Attendance extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }

  componentDidMount() {
		this.setState({
		  dataSource: this.state.dataSource.cloneWithRows(this.props.session_attendances)
		});
	}

  render() {
    return (      
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderAttendence.bind(this)}
        style={styles.listView}
      />
    );
  }

  renderAttendence(attendance) {
    return (
      <View style={styles.card} >
        <View style={styles.init}>
          <Text style={styles.initText}>{ attendance.student_name[0] }</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.cardTitle}>{attendance.student_name}</Text>
          <Text style={styles.cardDescription}>{attendance.student_contact}</Text>
        </View>
      </View>
    );
  }

}

module.exports = Attendance;
