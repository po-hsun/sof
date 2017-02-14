//@flow
'use strict';
import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    Image,
    NavigationExperimental,
    BackAndroid,
    Button
} from "react-native";
import { PUSH_ROUTE, POP_ROUTE, BACK_ROUTE } from '../../constants/constants';

const { CardStack: NavigationCardStack, StateUtils: NavigationStateUtils, PropTypes: NavigationPropTypes } = NavigationExperimental;

const Attendance = ({ _handleNavigate }) => (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Text>Attendance</Text>
        <Button onPress={( ) => {
            const route = {
                key: 'switchFeed',
                title: 'SwitchFeed'
            };
            const action = {
                type: PUSH_ROUTE,
                route
            };
            _handleNavigate( action );
        }} title="Next Page" color="#841584"/>
        <Button onPress={( ) => {
            _handleNavigate({ type: POP_ROUTE });
        }} title="Go Back" color="#123456"/>
    </View>
);

const SwitchFeed = ({ _handleNavigate }) => (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Text>SwitchFeed</Text>
        <Button onPress={( ) => {
            _handleNavigate({ type: POP_ROUTE });
        }} title="Go Back" color="#123456"/>
    </View>
);

export default class Navigator extends Component {

    constructor( ) {
        super( );
        this._renderScene = this._renderScene.bind( this );
        this._handleBackAction = this._handleBackAction.bind( this );
    }

    componentDidMount( ) {
        BackAndroid.addEventListener( 'hardwareBackPress', this._handleBackAction );
    }
    componentWillUnmount( ) {
        BackAndroid.removeEventListener( 'hardwareBackPress', this._handleBackAction );
    }

    _renderScene( ) {
        var content : React.Element < any > = (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>{this.props.title} {this.props.index}</Text>
                <Button onPress={( ) => {
                    const route = {
                        key: 'attendance',
                        title: 'Attendance'
                    };
                    const action = {
                        type: PUSH_ROUTE,
                        route
                    };
                    this._handleNavigate( action );
                }} title="Next Page" color="#841584"/>
            </View>
        );
        const { key } = this.props.navState;
        if ( key === 'home' ) {
            // return <Attendance _handleNavigate={this._handleNavigate.bind( this )}/>
            return content;
        } else if ( key === 'attendance' ) {
            // return <SwitchFeed _goBack={this._handleBackAction.bind( this )}/>
            return <Attendance _handleNavigate={this._handleNavigate.bind( this )}/>
        } else if ( key === 'switchFeed' )
            return <SwitchFeed _handleNavigate={this._handleNavigate.bind( this )}/>
    }
    _handleBackAction( ) {
        if ( this.props.navState.index === 0 ) {
            return false;
        }
        this.props.popRoute( );
        return true;
    }
    _handleNavigate( action ) {
        switch ( action && action.type ) {
            case PUSH_ROUTE:
                this.props.pushRoute( action.route );
                return true;
            case BACK_ROUTE:
            case POP_ROUTE:
                return this._handleBackAction( );
            default:
                return false;
        }
    }
    render( ) {
        return ( <NavigationCardStack navigationState={this.props.navState} onNavigate={this._handleNavigate.bind( this )} renderScene={this._renderScene}/> );
    }

}
