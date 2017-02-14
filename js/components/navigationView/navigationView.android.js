//@flow
'use strict';
import React, { Component } from 'react';
import {
    DrawerLayoutAndroid,
    Text,
    View,
    TouchableHighlight,
    Image,
    ToastAndroid
} from "react-native";
import Tab from '../tabView/tabView';
import { styles } from './navigationViewStyle';
import { connect } from 'react-redux';
import NavContainer from '../../containers/navContainer';

export default class Navigation extends Component {

    constructor( ) {
        super( );
        this.openDrawer = this.openDrawer.bind( this );
        this.state = {
            navigationViewWidth: 200
        };
    }

    render( ) {
        var navigationView = (
            <View style={styles.container}>
                <Image width={24} height={24} source={{
                    uri: 'ic_edit_blue'
                }} style={styles.editProfile}/>
                <Image width={68} height={68} source={{
                    uri: 'ic_parent'
                }} style={styles.avatar}/>
                <Text style={styles.userName}>Test</Text>
                <Text style={styles.userEmail}>Test@gmail.com</Text>
                <View style={[
                    styles.divider, {
                        width: this.state.navigationViewWidth
                    }
                ]}/>
                <Tab name='Feed' icon={require( '../../components/tabView/img/icFeed.png' )} onPress={( ) => {
                    this.props.changeTab( 0 )
                }}/>
                <Tab name='Curriculum' icon={require( '../../components/tabView/img/icFeed.png' )} onPress={( ) => {
                    this.props.changeTab( 1 )
                }}/>
                <Tab name='Activity' icon={require( '../../components/tabView/img/icActivity.png' )} onPress={( ) => {
                    this.props.changeTab( 2 )
                }}/>
                <Tab name='Heat Map' icon={require( '../../components/tabView/img/icHeatmap.png' )} onPress={( ) => {
                    this.props.changeTab( 3 )
                }}/>
                <Tab name='Profile' icon={require( '../../components/tabView/img/rectangle3.png' )} onPress={( ) => {
                    this.props.changeTab( 4 )
                }}/>
                <View style={[
                    styles.divider, {
                        width: this.state.navigationViewWidth
                    }
                ]}/>
                <Tab name='Setting' icon={{
                    uri: 'ic_setting'
                }} onPress={( ) => {}}/>
                <Tab name='Contact Support' icon={{
                    uri: 'ic_contact'
                }} onPress={( ) => {}}/>
                <Tab name='Log Out' icon={{
                    uri: 'ic_logout'
                }} onPress={( ) => {}}/>
            </View>
        );
        return (
            <DrawerLayoutAndroid drawerPosition={DrawerLayoutAndroid.positions.Left} drawerWidth={this.state.navigationViewWidth} renderNavigationView={( ) => navigationView} ref={( _drawer ) => this.drawer = _drawer}>
                <NavContainer title={this.props.title} index={this.props.index}/>
            </DrawerLayoutAndroid>
        );
    }

    openDrawer( ) {
        this.drawer.openDrawer( );
    }
}
