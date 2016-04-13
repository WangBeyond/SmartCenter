var React = require('react-native');
var {StyleSheet} = React;
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');


var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5'
  },
  listView: {
    paddingTop: 90,
    backgroundColor: '#E5E5E5'
  },

  card: {
    flexDirection:'row',
    backgroundColor: '#FFFFFF',
    height: 90,
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 8,
    shadowColor: '#888888',
    shadowOffset: {width:0, height:1},
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  cardTitle: {
    fontSize: 12,
    marginBottom: 8,
    fontWeight: '500'
  },
  cardDescription: {
    fontSize:10,
    color: '#888888'
  },
  cardButton: {
    width: 60,
    height: 20
  },
  cardButtonText: {
    fontSize: 10,
    color: '#4FBDF4'
  },

  attendCard: {
    backgroundColor: '#FFFFFF',
    height: 120,
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 8,
    shadowColor: '#888888',
    shadowOffset: {width:0, height:1},
    shadowOpacity: 0.8,
    shadowRadius: 2
  },

  attendCardRow: {
    flexDirection: 'row'
  },
  attendCardBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10
  },
  rowButton: {
    width: 65,
    height: 22,
    padding: 2,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#AAAAAA'
  },
  rowButtonText: {
    textAlign: 'center',
    fontSize: 10,
  },
  absentButton: {
  },
  attendButton: {
    marginLeft: 10,
  },
  activeButton: {
    backgroundColor: '#00BFB6',
    borderWidth: 0,
    paddingTop: 3
  },
  activeButtonText: {
    color: 'white',
    fontWeight: '500'
  },

  init: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4FBDF4',
    padding: 10,
    marginRight: 20
  },
  initText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)'
  },

  nav: {
    height: 60,
    backgroundColor: 'white'
  },
  navWrap: {
    flex: 1,
    marginTop: 70
  },
  leftNavButton: {
    paddingLeft: 20
  },
  leftNavButtonText: {
    fontSize: 16,
    marginVertical: 10
  },
  title: {
    fontWeight: '500',
    marginVertical: 9
  },

  rightContainer: {
    flex: 1
  },

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
    flex: .5,
    backgroundColor: 'transparent'
  },
  mark: {
    width: 150,
    height: 150
  },
  modalButton: {
    marginTop: 10,
  },
  button: {
    borderRadius: 5,
    flex: 1,
    height: 44,
    alignSelf: 'stretch',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
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
    backgroundColor: '#FF3366',
    padding: 20,
    alignItems: 'center'
  },
  input: {
    position: 'absolute',
    left: 61,
    top: 12,
    right: 0,
    height: 20,
    fontSize: 14
  },
  whiteFont: {
    color: '#FFF'
  }
});

module.exports = styles;