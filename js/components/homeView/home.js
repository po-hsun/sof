//@flow
'use strict';
import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    Image,
    Button,
    ListView,
    TextInput
} from "react-native";
import { PUSH_ROUTE, POP_ROUTE, BACK_ROUTE, GO_HOME } from '../../constants/constants';

export default class HomeView extends Component {

    constructor( props ) {
        super( props );
    }

    _handleNavigate( action ) {
        this.context._handleRootNavigate( action );
    }

    render( ) {
        return (
            <View style={{
                marginTop: 20
            }}>
                <Text style={{
                    alignSelf: 'center'
                }}>{this.props.title} {this.props.index}</Text>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Button onPress={( ) => {
                        const route = {
                            key: 'attendance',
                            title: 'Attendance'
                        };
                        const action = {
                            type: PUSH_ROUTE,
                            route
                        };
                        this.props._handleNavigate( action );
                    }} title="Next Page" color="#841584"/>
                    <Button onPress={this._handleNavigate.bind(this, {
                        type: PUSH_ROUTE,
                        route: {
                            key: 'chating',
                            title: 'Chating'
                        }
                    })} title="Start Chating" color="#841584"/>
                    <Button onPress={this._handleNavigate.bind(this, {
                        type: PUSH_ROUTE,
                        route: {
                            key: 'testing',
                            title: 'Testing'
                        }
                    })} title="Test" color="#841584"/>
                </View>
            </View>
        );
    }
}

HomeView.contextTypes = {
    _handleRootNavigate: React.PropTypes.func
};
