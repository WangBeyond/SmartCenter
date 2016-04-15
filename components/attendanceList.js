'use strict'

import React from 'react-native';
import styles from '../styles/style';
import { Button } from 'react-native-material-design';
import { BASE_ADDR, STATUS } from '../settings';

var {
    StyleSheet,
    View,
    ListView,
    Text,
    Component,
    TouchableHighlight,
    AsyncStorage,
    ActivityIndicatorIOS,
    ScrollView,
    AlertIOS
    } = React;


class Attendance extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => true
      }),
      auth_token: '',
      animating: false
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('user_info', (err, result) => {
      this.setState({auth_token: result.auth_token});
    })
    this.data = this.props.session_attendances.slice();
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.data)
    });
  }

  render() {
    return (
        <View style={{flex: 1}}>
          <ScrollView>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderAttendence.bind(this)}
                style={styles.listView}
                />

          </ScrollView>
          <ActivityIndicatorIOS
              size="large"
              style={[styles.centering, {height: 40}]}
              animating={this.state.animating}
              />
        </View>
    );
  }

  _handlePress(id, status) {
    if (status == 2) {
      AlertIOS.prompt(
          'Absent Remark',
          null,
          [
            {text: 'OK', onPress: remark => this.updateAttendance(id, status, remark) },
          ]
      )
    } else {
      this.updateAttendance(id, status);
    }
  }

  updateAttendance(id, status, remark) {
    var that = this;

    var data = {
        "status": status
    }
    if (status == 2 && remark.trim()) {
      data.remark = remark
    }
    var obj = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.state.auth_token
      },
      body: JSON.stringify({
        "session_attendance": data
      })
    }
    this.setState({animating: true});
    fetch( BASE_ADDR + 'api/session_attendances/' + id, obj)
        //.then((response) => response.json())
        .then( (result) => {
          that.setState({animating: false});
          that.updateUI(id, status);
          console.log(result);
        }).catch ( (error) => {
          console.log('Request failed', error);
        });
  }



  updateUI(id, status) {
    var datacopy = this.data;
    for (var i in datacopy) {
      if (datacopy[i].id == id) {
        datacopy[i].status =  STATUS[status];
        break;
      }
    }
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.data)
    });
  }

  renderAttendence(attendance) {
    return (
      <View style={styles.attendCard} >

        <View style={styles.attendCardRow}>
          <View style={styles.init}>
            <Text style={styles.initText}>{ attendance.student_name[0] }</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.cardTitle}>{attendance.student_name}</Text>
            <Text style={styles.cardDescription}>{attendance.student_contact}</Text>
              <Text style={styles.cardDescription}>{attendance.remark}</Text>
          </View>
        </View>
        <View style={styles.attendCardBottom}>
          <TouchableHighlight style={ [styles.rowButton, styles.pendingButton, attendance.status=="pending" && styles.activeButton] }
                              underlayColor="#B5B5B5" onPress={this._handlePress.bind(this, attendance.id, 0)} >
            <Text style={[styles.rowButtonText, attendance.status=="pending" && styles.activeButtonText]} >Pending</Text>
          </TouchableHighlight>
          <View style={styles.rowGap}/>
          <TouchableHighlight style={ [styles.rowButton, styles.absentButton, attendance.status=="absent" && styles.activeButton] }
                              underlayColor="#B5B5B5" onPress={this._handlePress.bind(this, attendance.id, 2)} >
            <Text style={[styles.rowButtonText, attendance.status=="absent" && styles.activeButtonText]} >Absent</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ [styles.rowButton, styles.attendButton, attendance.status=="attended" && styles.activeButton] }
                              underlayColor="#B5B5B5" onPress={this._handlePress.bind(this, attendance.id, 1)} >
            <Text style={[styles.rowButtonText, attendance.status=="attended" && styles.activeButtonText]} >Attended</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

}

module.exports = Attendance;
