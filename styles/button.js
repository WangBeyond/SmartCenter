/**
 * Created by wangyichao on 15/4/16.
 */
var React = require('react-native');
var {StyleSheet} = React;

var styles = StyleSheet.create({
    button: {
        backgroundColor: '#05A5D1',
        padding: 10,
        borderColor: 'transparent',
        borderWidth:2,
        alignSelf: 'center',
        borderRadius: 10,
        width: 150,
        height: 45,
        marginTop: 18
    },

    buttonText: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 18
    }
});

module.exports = styles;