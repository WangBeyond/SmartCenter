/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */


var React = require('react-native');
var Main = require('./components/main');
var Profile = require('./profile.ios');

var {
  AppRegistry,
  TabBarIOS,
  Component
} = React;

class SmartCenter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'sessions'
    };
  }


  login() {
    fetch('http://192.168.0.101:3000/api/tutors/signin.json')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          auth_token: this.state.dataSource.cloneWithRows(responseData.auth_token)
        });
      })
      .done();
  }

render() {
    return (

      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          title="Main"
          selected={this.state.selectedTab === 'sessions'}
          systemIcon="featured"
          onPress={() => {
              this.setState({
                  selectedTab: 'sessions',
              });
          }}>
          <Main/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Profile"
          selected={this.state.selectedTab === 'profile'}
          systemIcon="contacts"
          onPress={() => {
                this.setState({
                    selectedTab: 'profile',
                });
          }}>
          <Profile/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('SmartCenter', () => SmartCenter);
