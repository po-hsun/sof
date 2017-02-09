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

class Navigation extends Component {

    constructor( props ) {
        super( props );
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
                <Tab name='Home' uri='ic_home'/>
                <Tab name='Manage Class' uri='ic_manageclass'/>
                <Tab name='Students' uri='ic_classname'/>
                <Tab name='Add New Student' uri='ic_add'/>
                <View style={[
                    styles.divider, {
                        width: this.state.navigationViewWidth
                    }
                ]}/>
                <Tab name='Setting' uri='ic_setting'/>
                <Tab name='Contact Support' uri='ic_contact'/>
                <Tab name='Log Out' uri='ic_logout'/>
            </View>
        );
        return (
            <DrawerLayoutAndroid drawerPosition={DrawerLayoutAndroid.positions.Left} drawerWidth={this.state.navigationViewWidth} renderNavigationView={( ) => navigationView} ref={( _drawer ) => this.drawer = _drawer}>
                <View style={{
                    flex: 1,
                    alignItems: 'center'
                }}>
                    <TouchableHighlight onPress={this.openDrawer}>
                        <View>
                            <Text>{'Open Drawer'}</Text>
                            <Text>Home Page!!</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </DrawerLayoutAndroid>
        );
    }

    openDrawer( ) {
        this.drawer.openDrawer( );
    }
}

module.exports = connect( )( Navigation );
