/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */


var React = require('react-native');

var {
  AppRegistry,
  Navigator,
  Component,
    View,
    Text
} = React;

import { Login } from './components/login';
import { TabBar } from './components/tabBar';


var BasicConfig = Navigator.SceneConfigs.FloatFromRight;
var CustomSceneConfig = Object.assign({}, BasicConfig, {
  springTransition: 100,
  springFriction: 1
})

class SmartCenter extends Component {

  _renderScene(route, navigator) {
    console.log(route.id);
    if (route.id == 1) {
      return <Login navigator={navigator}/>;
    } else if (route.id == 2) {
      return <TabBar navigator={navigator}/>;
    }
  }

  _configureScene(route) {
    return CustomSceneConfig;
  }

  render() {
      return (
          <Navigator
            initialRoute={{ id: 1 }}
            renderScene={this._renderScene}
            configureScene={this._configureScene} />
      )
  }


}

AppRegistry.registerComponent('SmartCenter', () => SmartCenter);
