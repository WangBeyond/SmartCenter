var React = require('react-native');
var {StyleSheet} = React;

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
    paddingTop: 0,
    backgroundColor: '#E5E5E5',
  },

  card: {
    flexDirection:'row',
    backgroundColor: '#FFFFFF',
    height: 80,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 8,
    shadowColor: '#888888',
    shadowOffset: {width:0, height:1},
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 8
  },
  cardDescription: {
    fontSize:12,
    color: '#888888'
  },
  cardButton: {
    width: 50
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
    flex: 1
  },
  navWrap: {
    flex: 1,
    marginTop: 70
  },

  rightContainer: {
    flex: 1
  },
});

module.exports = styles;