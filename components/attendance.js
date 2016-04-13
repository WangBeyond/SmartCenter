'use strict'

import React from 'react-native';
import styles from '../styles';
import { Button } from 'react-native-material-design';

var {
  Platform,
  StyleSheet,
  View,
  ListView,
  Text,
  Component,
    Switch,
    TouchableHighlight
} = React;


class Attendance extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => true
      })
    };
  }

  componentDidMount() {
        this.data = this.props.session_attendances.slice();
		this.setState({
		  dataSource: this.state.dataSource.cloneWithRows(this.data)
		});
  }

  render() {
    console.log("render");
    console.log(this.state.data);
    return (      
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderAttendence.bind(this)}
        style={styles.listView}
      />
    );
  }

  updateAttendance(id, status) {
    var that = this;
    var datacopy = this.data;
    for (var i in datacopy) {
      if (datacopy[i].id == id) {
        console.log(datacopy[i].id, datacopy[i].status, status);
        datacopy[i].status =  status == 1 ? "attended" : "absent";
        break;
      }
    }
    that.setState({
      dataSource: that.state.dataSource.cloneWithRows(that.data)
    });

    var obj = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'N25zFivRbQFax45LfGss'
      },
      body: JSON.stringify({
        "session_attendance": {
          "status": status
        }
      })
    }
    console.log('http://111.221.109.187/api/session_attendances/' + id);
    fetch('http://111.221.109.187/api/session_attendances/' + id, obj)
        //.then((response) => response.json())
        .then( (result) => {

          console.log(result);
        }).catch ( (error) => {
          console.log('Request failed', error);
        });
  }

  renderAttendence(attendance) {
    console.log(attendance.id, attendance.status);
    return (
      <View style={styles.attendCard} >
        <View style={styles.attendCardRow}>
          <View style={styles.init}>
            <Text style={styles.initText}>{ attendance.student_name[0] }</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.cardTitle}>{attendance.student_name}</Text>
            <Text style={styles.cardDescription}>{attendance.student_contact}</Text>
          </View>
        </View>
        <View style={styles.attendCardBottom}>
          <TouchableHighlight style={ [styles.rowButton, styles.absentButton, attendance.status=="absent" && styles.activeButton] }
                              onPress={this.updateAttendance.bind(this, attendance.id, 2)} >
            <Text style={[styles.rowButtonText, attendance.status=="absent" && styles.activeButtonText]} >Absent</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ [styles.rowButton, styles.attendButton, attendance.status=="attended" && styles.activeButton] }
                              onPress={this.updateAttendance.bind(this, attendance.id, 1)} >
            <Text style={[styles.rowButtonText, attendance.status=="attended" && styles.activeButtonText]} >Attended</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

}

module.exports = Attendance;
