/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Provider } from 'react-redux';
import store from './js/store/configureStore';
import I18n from './js/i18n/string';
import Navigation from './js/containers/tabContainer';

export default class SoFRN extends Component {
    constructor( props ) {
        super( props );
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
