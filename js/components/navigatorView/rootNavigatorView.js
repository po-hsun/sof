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
import { PUSH_ROUTE, POP_ROUTE, BACK_ROUTE, GO_HOME } from '../../constants/constants';
import type { NavigationSceneRendererProps }
from '../../../node_modules/react-native/Libraries/NavigationExperimental/NavigationTypeDefinition';
import ChatView from '../chatView/chatView';
import HomeView from '../homeView/home';
import TabContainer from '../../containers/tabContainer';

const { CardStack: NavigationCardStack, StateUtils: NavigationStateUtils, PropTypes: NavigationPropTypes, Header: NavigationHeader } = NavigationExperimental;

export default class RootNavigator extends Component {
    _renderScene : ( props : NavigationSceneRendererProps ) =>? React.Element < any >;
    _handleBackAction : Function;
    _renderOverlay : Function;
    _handleRootNavigate : Function;

    getChildContext( ) {
        return { _handleRootNavigate: this._handleRootNavigate };
    }

    constructor( props ) {
        super( props );
        this._renderScene = this._renderScene.bind( this );
        this._handleBackAction = this._handleBackAction.bind( this );
        this._renderOverlay = this._renderOverlay.bind( this );
        this._handleRootNavigate = this._handleNavigate.bind( this );
    }

    componentDidMount( ) {
        BackAndroid.addEventListener( 'hardwareBackPress', this._handleBackAction );
    }
    componentWillUnmount( ) {
        BackAndroid.removeEventListener( 'hardwareBackPress', this._handleBackAction );
    }

    _renderScene( props : NavigationSceneRendererProps ) {
        const { route } = props.scene;
        if ( route.key === 'home' ) {
            return <TabContainer/>
        } else if ( route.key === 'chating' ) {
            return <ChatView _handleNavigate={this._handleNavigate.bind( this )} title={this.props.title} index={this.props.index}/>;
        } else if ( route.key === 'test' ) {
            return <HomeView _handleNavigate={this._handleNavigate.bind( this )} title={this.props.title} index={this.props.index}/>;
        }
    }
    _handleBackAction( ) : boolean {
        if( this.props.navState.index === 0 ) {
            return false;
        }
        this.props.popRoute( );
        return true;
    }
    _handleNavigate( action ) : boolean {
        switch( action && action.type ) {
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

    _renderHeader( props : NavigationSceneRendererProps ) {
        return <NavigationHeader {...props} onNavigateBack={this._onNavigationBack.bind( this )}/>
    }

    _onNavigationBack( ) {
        this._handleBackAction( );
    }

    _renderOverlay( ) {
        return <View style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: 'blue'
        }}/>
    }

    render( ) {
        return ( <NavigationCardStack navigationState={this.props.navState} renderScene={this._renderScene} renderOverlay={this._renderOverlay} renderHeader={this._renderHeader.bind( this )} onNavigateBack={this._onNavigationBack.bind( this )} gestureResponseDistance={30} enableGestures={true}/> );
    }

}

RootNavigator.childContextTypes = {
    _handleRootNavigate: React.PropTypes.func
};
