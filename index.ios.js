//@flow
'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Provider } from 'react-redux';
import store from './js/store/configureStore';
import I18n from './js/i18n/string';
import Navigation from './js/containers/root/rootContainer';

export default class SoFRN extends Component {

    constructor( ) {
        super( );
    }

    render( ) {
        return (
            <Provider store={store}>
                <Navigation/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent( 'SoFRN', ( ) => SoFRN );
