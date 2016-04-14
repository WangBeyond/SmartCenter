/**
 * Created by wangyichao on 14/4/16.
 */
import React from 'react-native';
import styles from '../styles/login';
import { TabBar } from './TabBar'
import { BASE_ADDR } from '../settings';

var {
    StyleSheet,
    View,
    Text,
    Component,
    TouchableHighlight,
    TextInput,
    Image,
    AsyncStorage,
    ActivityIndicatorIOS,
    } = React;

export class Login extends React.Component {

    constructor(){
        super();
        this.state = {
            email: "t1@fooyo.sg",
            password: "SkyWalker",
            loading: false,
            error_msg: ''
        }
    }

    _handleLogin() {
        var that = this;
        this.setState({loading: true});
        fetch( BASE_ADDR + 'api/tutors/signin.json', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "tutor": {
                    "email": that.state.email,
                    "password": that.state.password
                }
            })
        })
            .then((response) => response.json())
            .then( (result) => {
                console.log(result);
                this.setState({loading: false});
                if ('errors' in result) {
                    //TODO: handle error
                    this.setState({error_msg: result.errors[0]});
                    return;
                }
                console.log("continue")
                var user_info = {
                    auth_token: result.auth_token
                }
                AsyncStorage.setItem('user_info', JSON.stringify(user_info));
                this.props.navigator.push({id: 2});
            }).catch ( (error) => {
            console.log('Request failed', error);
        });
    }

    render() {
        return (
            <View style={styles.modalContainer}>
                <Image style={styles.bg} source={{uri: 'http://i.imgur.com/xlQ56UK.jpg'}} />
                <View style={styles.header}>
                    <Image style={styles.mark} source={{uri: 'http://i.imgur.com/da4G0Io.png'}} />
                </View>
                <ActivityIndicatorIOS
                    size="large"
                    style={[styles.centering, {height: 40}]}
                    animating={this.state.loading}
                    />
                <View style={styles.inputs}>
                    <View style={styles.inputContainer}>
                        <Image style={styles.inputUsername} source={{uri: 'http://i.imgur.com/iVVVMRX.png'}}/>
                        <TextInput
                            style={[styles.input, styles.whiteFont]}
                            placeholder="email"
                            placeholderTextColor="#FFF"
                            value={this.state.email}
                            onChangeText={(text) => this.setState({email: text})}
                            />
                    </View>
                    <View style={styles.inputContainer}>
                        <Image style={styles.inputPassword} source={{uri: 'http://i.imgur.com/ON58SIG.png'}}/>
                        <TextInput
                            password={true}
                            style={[styles.input, styles.whiteFont]}
                            placeholder="Pasword"
                            placeholderTextColor="#FFF"
                            value={this.state.password}
                            onChangeText={(text) => this.setState({password: text})}
                            />
                    </View>
                    <View style={styles.forgotContainer}>
                        <Text style={styles.redFont}>{this.state.error_msg}</Text>
                    </View>
                </View>
                <View style={styles.signin}>
                    <Text style={styles.whiteFont} onPress={this._handleLogin.bind(this)}>Sign In</Text>
                </View>
                <View style={styles.signup}>
                    <Text style={styles.greyFont}>Don't have an account?<Text style={styles.whiteFont}>  Sign Up</Text></Text>
                </View>
            </View>
        )
    }
}