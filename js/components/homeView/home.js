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
    TextInput,
    Animated,
    Easing
} from "react-native";
import { PUSH_ROUTE, POP_ROUTE, BACK_ROUTE, GO_HOME } from '../../constants/constants';

export default class HomeView extends Component {

    constructor( props ) {
        super( props );
        this.spinValue = new Animated.Value( 0 );
        this.springValue = new Animated.Value( 1 );
        this.animatedValues = [ ];
        this.animatedValues1 = [ ];
        this.animatedHandler;
    }

    _handleNavigate( action ) {
        this.context._handleRootNavigate( action );
    }

    _startAnimation( ) {
        this.spinValue.setValue( 0 );
        this.springValue.setValue( 1 );
        this.animatedValues.forEach(( value ) => value.setValue( 0 ));
        this.animatedHandler.start(( ) => {
            this._initAnimatedHandlers( );
            console.log( 'finish' );
        });
    }

    _stopAnimation( ) {
        this.animatedHandler.stop( );
    }

    _renderAnimatedView( ) {
        const animatedViews = [ ];
        for ( let i = 0; i < 500; i++ ) {
            this.animatedValues[i] = new Animated.Value( 0 );
        }
        this.animatedValues.forEach(( value, index ) => {
            animatedViews[index] = ( <Animated.View key={index} style={{
                width: 25,
                height: 25,
                opacity: value,
                backgroundColor: 'red',
                marginLeft: 3,
                marginTop: 3
            }}/> )
        });
        this.animatedValues1 = this.animatedValues.map(( value, index ) => {
            return Animated.timing(value, {
                toValue: 1,
                duration: 4000
            });
        })

        return animatedViews;
    }

    _initAnimatedHandlers( ) {
        this.animatedHandler = Animated.parallel([
            Animated.stagger(3000, [
                Animated.timing(this.spinValue, {
                    toValue: 1,
                    duration: 3000,
                    easing: Easing.linear
                }),
                Animated.spring(this.springValue, {
                    toValue: 1,
                    frction: 1
                })
            ]),
            Animated.stagger( 10, this.animatedValues1 )
        ]);
    }

    componentDidMount( ) {
        // console.log( 'componentDidMount' );
        this._initAnimatedHandlers( );
    }

    // componentWillReceiveProps( ) {
    //     console.log( 'componentWillReceiveProps' );
    // }
    //
    // shouldComponentUpdate( ) {
    //     console.log( 'shouldComponentUpdate' );
    //     return true;
    // }
    //
    // componentWillUpdate( ) {
    //     console.log( 'componentWillUpdate' );
    // }
    //
    // componentDidUpdate( ) {
    //     console.log( 'componentDidUpdate' );
    // }

    _callAPI(){
      const fetchData = this.props.fetchData;
      fetchData();
    }

    render( ) {
        const spin = this.spinValue.interpolate({
            inputRange: [
                0, 0.5, 1
            ],
            outputRange: [ '0deg', '180deg', '0deg' ]
        });
        const opacity = this.spinValue.interpolate({
            inputRange: [
                0, 0.5, 1
            ],
            outputRange: [ 1, 0, 1 ]
        });
        const marginTop = this.spinValue.interpolate({
            inputRange: [
                0, 0.5, 1
            ],
            outputRange: [ 0, 100, 0 ]
        });
        const rotateX = this.spinValue.interpolate({
            inputRange: [
                0, 0.5, 1
            ],
            outputRange: [ '0deg', '360deg', '0deg' ]
        });
        const scale = this.springValue.interpolate({
            inputRange: [
                0, 0.5, 1
            ],
            outputRange: [ 1, 1.5, 1 ]
        });
        return (
            <View style={{
                flex: 1
            }}>
                <Text style={{
                    alignSelf: 'center'
                }}>{this.props.title} {this.props.index}</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
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
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <Button onPress={( ) => this._startAnimation( )} title="Start Animation" color="#841584"/>
                    <Button onPress={( ) => this._stopAnimation( )} title="Stop Animation" color="#841584"/>
                    <Button onPress={( ) => this._callAPI( )} title="Call API" color="#841584"/>
                </View>
                <Animated.Image style={{
                    width: 50,
                    height: 50,
                    alignSelf: 'center',
                    transform: [
                        {
                            rotate: spin
                        }, {
                            rotateX
                        }, {
                            rotateY: rotateX
                        }, {
                            scale: scale
                        }
                    ],
                    opacity,
                    marginTop
                }} source={require( './img/money.png' )}/>
                {!this.props.apiData.isFetching && this.props.apiData.data.length === 0 && (
                <View style={{
                    flex: 1,
                    flexWrap: 'wrap',
                    flexDirection: 'row'
                }}>{this._renderAnimatedView( )}</View>)}
                {this.props.apiData.isFetching ? <Text>Fetching</Text> : null}
                {this.props.apiData.data.length ? this.props.apiData.data.map((data,index)=>{return (<Text key={index}>name: {data.name} age: {data.age}</Text>)}) : null}
                {this.props.apiData.error ? <Text>Error</Text> : null}
            </View>
        );
    }
}

HomeView.contextTypes = {
    _handleRootNavigate: React.PropTypes.func
};
