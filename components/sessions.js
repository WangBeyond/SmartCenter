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
    fetch('http://192.168.0.101:3000/api/tutors/signin.json', {
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
        <Modal
            animated={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {this._setModalVisible(false)}}
            >
          <View style={[styles.modalContainer]}>
            <Image style={styles.bg} source={{uri: 'http://i.imgur.com/xlQ56UK.jpg'}} />
            <View style={styles.header}>
              <Image style={styles.mark} source={{uri: 'http://i.imgur.com/da4G0Io.png'}} />
            </View>
              <View style={styles.inputs}>
                <View style={styles.inputContainer}>
                  <Image style={styles.inputUsername} source={{uri: 'http://i.imgur.com/iVVVMRX.png'}}/>
                  <TextInput
                      style={[styles.input, styles.whiteFont]}
                      placeholder="Username"
                      placeholderTextColor="#FFF"
                      value={this.state.username}
                      />
                </View>
                <View style={styles.inputContainer}>
                  <Image style={styles.inputPassword} source={{uri: 'http://i.imgur.com/ON58SIG.png'}}/>
                  <TextInput
                      password={true}
                      style={[styles.input, styles.whiteFont]}
                      placeholder="Pasword"
                      placeholderTextColor="#FFF"
                      value={this.state.password}
                      />
                </View>
              </View>
            <View style={styles.signin}>
              <Text style={styles.whiteFont} onPress={this._setModalVisible.bind(this, false)}>Sign In</Text>
            </View>
          </View>
        </Modal>

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
