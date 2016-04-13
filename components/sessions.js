'use strict'

var React = require('react-native');
var moment = require('moment');
var styles = require('../styles');
var Attendance = require('./attendance');
var Button = require('./Button');

var {
  Platform,
  StyleSheet,
  View,
  ListView,
  Text,
  TouchableHighlight,
  Component,
    Modal,
    TextInput,
    Image
} = React;

class Sessions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
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
        'Authorization': 'N25zFivRbQFax45LfGss'
      }
    };

    fetch('http://111.221.109.187/api/tutors/2/sessions.json', obj)
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
      title: "Attendance",
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

  _setModalVisible(visible) {
    console.log("set visible "+visible)
    this.setState({modalVisible: visible});
    this.forceUpdate();
  }

  _login() {
    var that = this;
    fetch('http://111.221.109.187/api/tutors/signin.json', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "tutor": {
          "email": "t1@fooyo.sg",
          "password": "SkyWalker"
        }
      })
    })
      .then((response) => response.json())
      .then( (result) => {
        console.log(result.auth_token);
          that._setModalVisible(false);

      }).catch ( (error) => {
      console.log('Request failed', error);
    });
  }

  renderSession(session) {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
     TouchableElement = TouchableNativeFeedback;
    }
    var starttime = moment(session.date);
    var endtime = moment(starttime);
    endtime.add( session.duration, 'minute');


    var modalBackgroundStyle = {
      backgroundColor: '#f5fcff',
    };
    console.log("render");
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
          <Text style={styles.cardButtonText}>Attendance</Text>
        </TouchableElement>
      </View>
    );
  }
}

module.exports = Sessions;
