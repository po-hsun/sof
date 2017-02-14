//@flow
'use strict';
import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    Image,
    TabBarIOS,
    Button
} from "react-native";
import { styles } from './navigationViewStyle';
import Tab from '../tabView/tabView.ios.js';
import NavContainer from '../../containers/navContainer';

export default class Navigation extends Component {

    state = {
        number: 0
    };

    renderContent( name : string ) {
        return (
            <View>
                <Text>name</Text>
            </View>
        );
    };

    render( ) {
      const navContainer = <NavContainer title={this.props.title} index={this.props.index}/>;
        return (
            <TabBarIOS unselectedTintColor="rgb(135,135,135)" tintColor="rgb(73,174,255)" unselectedItemTintColor="rgb(135,135,135)" barTintColor="rgba(250,250,250,0.9)">
                <Tab title={'Feed'} icon={require( '../../components/tabView/img/icFeed.png' )} selected={this.props.index === 0} onPress={( ) => {
                    this.props.changeTab( 0 )
                }}>{navContainer}</Tab>
                <Tab title={'Curriculum'} icon={require( '../../components/tabView/img/icFeed.png' )} selected={this.props.index === 1} onPress={( ) => {
                    this.props.changeTab( 1 )
                }}>{navContainer}</Tab>
                <Tab title={'Activity'} icon={require( '../../components/tabView/img/icActivity.png' )} selected={this.props.index === 2} onPress={( ) => {
                    this.props.changeTab( 2 )
                }}>{navContainer}</Tab>
                <Tab title={'Heat Map'} icon={require( '../../components/tabView/img/icHeatmap.png' )} selected={this.props.index === 3} onPress={( ) => {
                    this.props.changeTab( 3 )
                }}>{navContainer}</Tab>
                <Tab title={'Profile'} icon={require( '../../components/tabView/img/rectangle3.png' )} selected={this.props.index === 4} onPress={( ) => {
                    this.props.changeTab( 4 )
                }}>{navContainer}</Tab>
            </TabBarIOS>
        );
    }
}
