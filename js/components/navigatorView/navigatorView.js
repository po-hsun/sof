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
import { bindActionCreators } from 'redux'
import { PUSH_ROUTE, POP_ROUTE, BACK_ROUTE, GO_HOME } from '../../constants/constants';
import type { NavigationSceneRendererProps } from '../../../node_modules/react-native/Libraries/NavigationExperimental/NavigationTypeDefinition';
import HomeView from '../homeView/home';
import HomeContainer from '../../containers/homeContainer';
import fetchData from '../../actions/tabActions';

const { CardStack: NavigationCardStack, StateUtils: NavigationStateUtils, PropTypes: NavigationPropTypes } = NavigationExperimental;

const Attendance = ({ _handleNavigate, tabTitle, renderCount }) => (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Text>{tabTitle} renderCount: {renderCount}</Text>
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

const SwitchFeed = ({ _handleNavigate, tabTitle, renderCount }) => (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Text>{tabTitle} renderCount: {renderCount}</Text>
        <Button onPress={( ) => {
            _handleNavigate({ type: POP_ROUTE });
        }} title="Go Back" color="#123456"/>
        <Button onPress={()=>{_handleNavigate({type: GO_HOME})}} title='go Home' color='#234567'/>
    </View>
);

export default class Navigator extends Component {
    _renderScene : (props:NavigationSceneRendererProps)=>?React.Element<any>;
    _handleBackAction : Function;
    renderCount: number

    constructor(props) {
        super(props);
        this._renderScene = this._renderScene.bind( this );
        this._handleBackAction = this._handleBackAction.bind( this );
        this.renderCount = 1;
    }

    componentDidMount( ) {
        BackAndroid.addEventListener( 'hardwareBackPress', this._handleBackAction );
    }
    componentWillUnmount( ) {
        BackAndroid.removeEventListener( 'hardwareBackPress', this._handleBackAction );
    }

    _renderScene( props:NavigationSceneRendererProps ) {
        // console.log( 'renderScene'+' tab: '+this.props.title );
        const { route } = props.scene;
        // console.log(JSON.stringify(props));
        // console.log(JSON.stringify( props.scenes.slice().length ));
        console.log( 'renderScene'+' id: '+this.props.id+' tab: '+this.props.title+' component: '+route.key+' position: '+JSON.stringify(props.position)+ ' renderCount: '+this.renderCount );
        this.renderCount = this.renderCount + 1;
        if ( route.key === 'home' ) {
            return <HomeContainer _handleNavigate={this._handleNavigate.bind( this )} title={this.props.title} index={this.props.index} />;
        } else if ( route.key === 'attendance' ) {
            return <Attendance _handleNavigate={this._handleNavigate.bind( this )} tabTitle={this.props.id} renderCount={this.renderCount}/>
        } else if ( route.key === 'switchFeed' )
            return <SwitchFeed _handleNavigate={this._handleNavigate.bind( this )} tabTitle={this.props.id} renderCount={this.renderCount}/>
    }
    _handleBackAction( ) : boolean {
        if( this.props.navState.index === 0 ) {
            return false;
        }
        this.props.popRoute( this.props.index );
        return true;
    }
    _handleNavigate( action ) : boolean {
        switch ( action && action.type ) {
            case PUSH_ROUTE:
                this.props.pushRoute( action.route, this.props.index );
                return true;
            case BACK_ROUTE:
            case POP_ROUTE:
                return this._handleBackAction( this.props.index );
            case GO_HOME:
                return this.props.goHome(this.props.index);
            default:
                return false;
        }
    }

    render( ) {
        return ( <NavigationCardStack navigationState={this.props.navState} renderScene={this._renderScene}/> );
    }

}
