var React = require('react-native');
var {StyleSheet} = React;
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');


var styles = StyleSheet.create({

  modalContainer: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'transparent'
  },
  bg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: windowSize.width,
    height: windowSize.height
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
    backgroundColor: 'transparent'
  },
  mark: {
    width: 150,
    height: 150
  },
  inputPassword: {
    marginLeft: 15,
    width: 20,
    height: 21
  },
  inputUsername: {
    marginLeft: 15,
    width: 20,
    height: 20
  },
  inputContainer: {
    padding: 10,
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent'
  },
  inputs: {
    flex: 0.25,
    marginTop: 10,
    marginBottom: 10,
  },
  signin: {
    backgroundColor: '#00BFB6',
    padding: 20,
    alignItems: 'center'
  },
  signup: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: .15
  },
  input: {
    position: 'absolute',
    left: 61,
    top: 12,
    right: 0,
    height: 20,
    fontSize: 14
  },
  forgotContainer: {
    alignItems: 'center',
    padding: 30,
  },
  redFont: {
    color: '#F55'
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF',
    fontSize: 18
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = styles;