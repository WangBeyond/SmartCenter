/**
 * Created by wangyichao on 13/4/16.
 */

var React = require('react-native');
var styles = require('../styles/button');

var {
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    } = React;

export class Button extends React.Component {

    constructor() {
        super();
    }


    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#B5B5B5"
                onPress={this.props.onPress} >
                <Text style={styles.buttonText}>{this.props.children}</Text>
            </TouchableHighlight>
        );
    }
}

