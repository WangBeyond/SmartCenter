'use strict'

var React = require('react-native');
var moment = require('moment');
var styles = require('../styles');
var Attendance = require('./attendance');

var {
  Platform,
  StyleSheet,
  View,
  ListView,
  Text,
  TouchableHighlight,
  Component
} = React;

class Sessions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    var obj = {  
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': '',
        'Host': 'api.producthunt.com',
        'Authorization': 'ycp8PHeKG3pzv83AxX2S'
      }
    };

    fetch('http://192.168.0.101:3000/api/tutors/2/sessions.json', obj)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.sessions),
          loaded: true
        });
      })
      .done();
  }

  _handleSessionClick(data) {
    this.props.navigator.push({
      title: "Session",
      component: Attendance,
      passProps: {
        session_attendances: data
      }
    })
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (      
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderSession.bind(this)}
        style={styles.listView}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading sessions...
        </Text>
      </View>
    );
  }

  renderSession(session) {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
     TouchableElement = TouchableNativeFeedback;
    }
    var starttime = moment(session.date);
    var endtime = moment(starttime);
    endtime.add( session.duration, 'minute');

    return (
      <View style={styles.card} >
        <View style={styles.init}>
          <Text style={styles.initText}>{ session.course_name[0] }</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.cardTitle}>{session.course_name}</Text>
          <Text style={styles.cardDescription}>{ starttime.format('MMM Do hh:mma') } - {endtime.format('hh:mma')}</Text>
          <Text style={styles.cardDescription}>{session.classroom}</Text>
        </View>
        <TouchableElement style={styles.cardButton} onPress={ this._handleSessionClick.bind(this, session.session_attendances) } >
          <Text>Edit</Text>
        </TouchableElement>
      </View>
    );
  }
}

module.exports = Sessions;
