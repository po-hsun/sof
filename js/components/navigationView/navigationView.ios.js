//@flow
'use strict';
import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, TabBarIOS } from "react-native";
import { styles } from './navigationViewStyle';
import Tab from '../tabView/tabView.ios.js'

export default class Navigation extends Component {

    state = {
        number: 0,
        selectedTabIndex: 0
    };

    renderContent( name : string ) {
        return (
            <View>
                <Text>name</Text>
            </View>
        );
    };

    render( ) {
        var content = (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'blue',
                }}>{this.state.number}</Text>
            </View>
        );
        return (
            <TabBarIOS unselectedTintColor="rgb(135,135,135)" tintColor="rgb(73,174,255)" unselectedItemTintColor="rgb(135,135,135)" barTintColor="rgba(250,250,250,0.9)">
                <Tab title={'Feed'} icon={require( '../../components/tabView/img/icFeed.png' )} selected={this.state.selectedTabIndex === 0} onPress={( ) => {
                    this.setState({
                        number: this.state.number + 1,
                        selectedTabIndex: 0
                    })
                }}>{content}</Tab>
                <Tab title={'Curriculum'} icon={require( '../../components/tabView/img/icFeed.png' )} selected={this.state.selectedTabIndex === 1} onPress={( ) => {
                    this.setState({
                        number: this.state.number + 1,
                        selectedTabIndex: 1
                    })
                }}>{content}</Tab>
                <Tab title={'Activity'} icon={require( '../../components/tabView/img/icActivity.png' )} selected={this.state.selectedTabIndex === 2} onPress={( ) => {
                    this.setState({
                        number: this.state.number + 1,
                        selectedTabIndex: 2
                    })
                }}>{content}</Tab>
                <Tab title={'Heat Map'} icon={require( '../../components/tabView/img/icHeatmap.png' )} selected={this.state.selectedTabIndex === 3} onPress={( ) => {
                    this.setState({
                        number: this.state.number + 1,
                        selectedTabIndex: 3
                    })
                }}>{content}</Tab>
                <Tab title={'Heat Map'} icon={require( '../../components/tabView/img/rectangle3.png' )} selected={this.state.selectedTabIndex === 4} onPress={( ) => {
                    this.setState({
                        number: this.state.number + 1,
                        selectedTabIndex: 4
                    })
                }}>{content}</Tab>
            </TabBarIOS>
        );
    }
}
