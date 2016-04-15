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
    //height: 90,
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
    marginTop: 10
  },
  rowGap: {
    flex: 1
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
  centering: {
    position: 'absolute',
    left: windowSize.width/2 - 20,
    top: windowSize.height/2 - 20,
    alignItems: 'center',
    justifyContent: 'center',
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
  navButtonText: {
    fontSize: 16,
    marginVertical: 10,
    color: '#4FBDF4'
  },
  rightNavButton: {
    paddingRight: 20
  },
  title: {
    fontWeight: '500',
    marginVertical: 9
  },

  rightContainer: {
    flex: 1
  },

});

module.exports = styles;