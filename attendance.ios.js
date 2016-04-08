'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  ListView,
  Text,
  Component
} = React;

class attendance extends React.Component {

	render() {
		return (
		  <Navigator
		    initialRoute={{name: 'My First Scene', index: 0}}
		    renderScene={(route, navigator) =>
		      <MySceneComponent
		        name={route.name}
		        onForward={() => {
		          var nextIndex = route.index + 1;
		          navigator.push({
		            name: 'Scene ' + nextIndex,
		            index: nextIndex,
		          });
		        }}
		        onBack={() => {
		          if (route.index > 0) {
		            navigator.pop();
		          }
		        }}
		      />
		    }
		  />		
		)
	}
}