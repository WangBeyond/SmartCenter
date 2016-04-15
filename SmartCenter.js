/**
 * Created by wangyichao on 15/4/16.
 */

var React = require('react-native');
import styles from './styles/style';
import { Login } from './components/login';
import { Main } from './components/main';

var {
    Navigator,
    Component,
    View,
    Text,
    AsyncStorage,
    } = React;



var BasicConfig = Navigator.SceneConfigs.FloatFromRight;
BasicConfig.gestures.pop.disabled = true;

var CustomSceneConfig = Object.assign({}, BasicConfig, {
    gestures: false
})


class SmartCenter extends Component {

    constructor() {
        super();
        this.state = {
            loaded: false,
            route_id: 1
        }
        this.firstLaunch = true;
    }

    _renderScene(route, navigator) {
        console.log(this.state.route_id);
        if (this.firstLaunch && this.state.route_id == 1 || route.id == 1 ) {
            this.firstLaunch = false;
            return <Login navigator={navigator}/>;
        }
        return <Main navigator={navigator} />;
    }

    _configureScene(route) {
        return CustomSceneConfig;
    }

    componentWillMount() {
        AsyncStorage.getAllKeys( (err, result) => {
            this.setState({loaded: true})
            if (result.indexOf('user_info') > -1) {
                this.setState({route_id: 2});
            }
        });
    }


    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading...
                </Text>
            </View>
        );
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <Navigator
                initialRoute={{ id: 2 }}
                renderScene={this._renderScene.bind(this)}
                configureScene={this._configureScene}/>
        )
    }


}

module.exports = SmartCenter;