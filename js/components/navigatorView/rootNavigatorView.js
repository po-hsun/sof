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
    Button,
    Platform,
    Animated,
    Dimensions,
    Easing,
    LayoutAnimation,
    UIManager,
    PickerIOS,
    Picker
} from "react-native";
import { PUSH_ROUTE, POP_ROUTE, BACK_ROUTE, GO_HOME } from '../../constants/constants';
import type { NavigationSceneRendererProps }
from '../../../node_modules/react-native/Libraries/NavigationExperimental/NavigationTypeDefinition';
import ChatView from '../chatView/chatView';
import HomeView from '../homeView/home';
import TabContainer from '../../containers/tabContainer';

const { windowWidth, windowHeight } = Dimensions.get( 'window' );

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
        this._handleRootNavigate = this._handleNavigate.bind( this );
        this.state = {
            bottom: -200,
            visible: false,
            firstIndex: 0,
            secondIndex: 0
        };
        this._showPicker = this._showPicker.bind( this );

        Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental( true );
    }

    componentDidMount( ) {
        BackAndroid.addEventListener( 'hardwareBackPress', this._handleBackAction );
    }
    componentWillUnmount( ) {
        BackAndroid.removeEventListener( 'hardwareBackPress', this._handleBackAction );
    }

    _showPicker( ) {
        const customAnimation = LayoutAnimation.create( 700, LayoutAnimation.Types.spring, LayoutAnimation.Properties.opacity );
        LayoutAnimation.configureNext(customAnimation, ( ) => {
            console.log( 'finish' )
        });
        // LayoutAnimation.linear();
        if ( this.state.visible ) {
            this.setState({
                bottom: -200,
                visible: !this.state.visible
            });
        } else {
            this.setState({
                bottom: 0,
                visible: !this.state.visible
            });

        }
    }

    _renderScene( props : NavigationSceneRendererProps ) {
        const { route } = props.scene;
        if ( route.key === 'home' ) {
            const areas = [ '台北', '桃園', '台中', '台南', '高雄' ];
            return (
                <View style={{
                    flex: 1,
                    backgroundColor: 'pink'
                }}><TabContainer/>
                    <View style={{
                        position: 'absolute',
                        bottom: this.state.bottom,
                        left: 0,
                        right: 0,
                        height: 200,
                        backgroundColor: 'gray'
                    }}>
                        <View style={{
                            height: 25,
                            backgroundColor: '#c3c3c3',
                            flexDirection: 'row',
                            paddingTop: 5,
                            paddingHorizontal: 5,
                            justifyContent: 'space-between'
                        }}>
                            <TouchableHighlight style={{
                                borderRadius: 5,
                                width: 100,
                                height: 20,
                                backgroundColor: 'white',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} underlayColor={'transparent'}>
                                <Text>取消</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={{
                                borderRadius: 5,
                                width: 100,
                                height: 20,
                                backgroundColor: 'white',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} underlayColor={'transparent'}>
                                <Text>確認</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{
                            height: 25,
                            backgroundColor: '#c3c3c3',
                            flexDirection: 'row',
                            paddingTop: 5,
                            justifyContent: 'space-around'
                        }}>
                            <Text>地區</Text>
                            <Text>名稱</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around'
                        }}>
                            <PickerIOS style={{
                                backgroundColor: 'pink',
                                width: 100,
                                justifyContent: 'center'
                            }} selectedValue={this.state.firstIndex} onValueChange={( index ) => this.setState({ firstIndex: index })} itemStyle={{
                                fontSize: 20,
                                height:150,
                                backgroundColor: 'blue'
                            }}>
                                {areas.map(( value, index ) => ( <PickerIOS.Item key={index} value={index} label={value} color={'black'}/> ))}
                            </PickerIOS>
                            <PickerIOS style={{
                                backgroundColor: 'green',
                                width: 100,
                                justifyContent: 'center'
                            }} selectedValue={this.state.firstIndex} onValueChange={( index ) => this.setState({ firstIndex: index })} itemStyle={{
                                fontSize: 20,
                                height: 150,
                                backgroundColor: 'blue'
                            }}>
                                {areas.map(( value, index ) => ( <PickerIOS.Item key={index} value={index} label={value} color={'white'}/> ))}
                            </PickerIOS>
                        </View>
                    </View>
                </View>
            );
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

    _renderTitleComponent( props ) {
        const title = String( props.scene.route.title || '' );
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 16,
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '500',
                    color: 'rgba(0, 0, 0, .9)',
                    textAlign: Platform.OS === 'ios'
                        ? 'center'
                        : 'left'
                }}>{title}</Text>
                <TouchableHighlight onPress={this._showPicker} underlayColor={'transparent'}>
                    <Image style={{
                        width: 20,
                        height: 20
                    }} source={require( '../chatView/img/sh.png' )}/>
                </TouchableHighlight>
            </View>
        )
    }

    _renderHeader( props : NavigationSceneRendererProps ) {
        return <NavigationHeader {...props} renderTitleComponent={this._renderTitleComponent.bind( this )} onNavigateBack={this._onNavigationBack.bind( this )}/>
    }

    _onNavigationBack( ) {
        this._handleBackAction( );
    }

    render( ) {
        return ( <NavigationCardStack navigationState={this.props.navState} renderScene={this._renderScene} renderHeader={this._renderHeader.bind( this )} onNavigateBack={this._onNavigationBack.bind( this )} gestureResponseDistance={30} enableGestures={true}/> );
    }

}

RootNavigator.childContextTypes = {
    _handleRootNavigate: React.PropTypes.func
};
