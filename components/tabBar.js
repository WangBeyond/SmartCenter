/**
 * Created by wangyichao on 14/4/16.
 */
import React from 'react-native';
import styles from '../styles/style';
import { Main } from './main';
import { Profile } from './profile';

var {
    Component,
    TabBarIOS
    } = React;

export class TabBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'sessions'
        };
    }


    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    title="Main"
                    selected={this.state.selectedTab === 'sessions'}
                    systemIcon="featured"
                    onPress={() => {
              this.setState({
                  selectedTab: 'sessions',
              });
          }}>
                    <Main/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Profile"
                    selected={this.state.selectedTab === 'profile'}
                    systemIcon="more"
                    onPress={() => {
                this.setState({
                    selectedTab: 'profile',
                });
          }}>
                    <Profile/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}