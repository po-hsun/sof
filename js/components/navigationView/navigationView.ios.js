//@flow
'use strict';
import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, TabBarIOS } from "react-native";
import { styles } from './navigationViewStyle';
import Tab from '../tabView/tabView.ios.js'

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
        var content = (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'blue'
                }}>{this.state.number}</Text>
                <Text>{this.props.title} {this.props.index}</Text>
            </View>
        );
        return (
            <TabBarIOS unselectedTintColor="rgb(135,135,135)" tintColor="rgb(73,174,255)" unselectedItemTintColor="rgb(135,135,135)" barTintColor="rgba(250,250,250,0.9)">
                <Tab title={'Feed'} icon={require('../../components/tabView/img/icFeed.png')} selected={this.props.index === 0} onPress={( ) => {
                    this.props.changeTab( 0 )
                }}>{content}</Tab>
                <Tab title={'Curriculum'} icon={require('../../components/tabView/img/icFeed.png')} selected={this.props.index === 1} onPress={( ) => {
                    this.props.changeTab( 1 )
                }}>{content}</Tab>
                <Tab title={'Activity'} icon={require( '../../components/tabView/img/icActivity.png' )} selected={this.props.index === 2} onPress={( ) => {
                    this.props.changeTab( 2 )
                }}>{content}</Tab>
                <Tab title={'Heat Map'} icon={require( '../../components/tabView/img/icHeatmap.png' )} selected={this.props.index === 3} onPress={( ) => {
                    this.props.changeTab( 3 )
                }}>{content}</Tab>
                <Tab title={'Profile'} icon={require( '../../components/tabView/img/rectangle3.png' )} selected={this.props.index === 4} onPress={( ) => {
                    this.props.changeTab( 4 )
                }}>{content}</Tab>
            </TabBarIOS>
        );
    }
}
