/**
 * Created by wangyichao on 13/4/16.
 */

var React = require('react-native');
var styles = require('../styles');

var {
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    } = React;

class Button extends React.Component {

    constructor() {
        super();
        this.state = {
            active: false,
        };
    }

    _onHighlight() {
        this.setState({active: true});
    }

    _onUnhighlight() {
        this.setState({active: false});
    }

    render() {
        var colorStyle = {
            color: this.state.active ? '#fff' : '#000',
        };
        return (
            <TouchableHighlight
                onHideUnderlay={this._onUnhighlight}
                onPress={this.props.onPress}
                onShowUnderlay={this._onHighlight}
                style={[styles.button, this.props.style]}
                underlayColor="#a9d9d4">
                <Text style={[styles.buttonText, colorStyle]}>{this.props.children}</Text>
            </TouchableHighlight>
        );
    }
}

module.exports = Button;