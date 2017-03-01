//@flow
'use strict';
import React, { Component } from 'react';
import {
    Animated,
    Dimensions,
    ScrollView,
    StyleSheet,
    Image,
    View,
    Text
} from 'react-native';

const { width, height } = Dimensions.get( 'window' );
const useNativeDriver = true;

class CubeTransition extends React.Component {
    state = {
        scrollX: new Animated.Value( 0 )
    }

    render( ) {
        return (
            <Animated.ScrollView ref={view => {
                this._scrollView = view;
            }} horizontal alwaysBounceHorizontal={false} showsHorizontalScrollIndicator={false} bounces={false} pagingEnabled scrollEventThrottle={1} onScroll={Animated.event([
                {
                    nativeEvent: {
                        contentOffset: {
                            x: this.state.scrollX
                        }
                    }
                }
            ], { useNativeDriver })}>
                <Animated.View style={[
                    {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width,
                        height,
                        backgroundColor: 'pink'
                    }, {
                        transform: [
                            {
                                translateX: this.state.scrollX
                            }
                        ]
                    }
                ]}>
                    {this.props.children.map( this._renderChild )}
                </Animated.View>
                {this.props.children.map( this._renderPlaceholders )}
            </Animated.ScrollView>
        );
    }

    // _getTransformsFor = ( i ) => {
    //     let { scrollX } = this.state;
    //     let pageX = width * i;
    //
    //     let translateX = scrollX.interpolate({
    //         inputRange: [
    //             pageX - width,
    //             pageX - width / 2,
    //             pageX,
    //             pageX + width
    //         ],
    //         outputRange: [
    //             width, width / 2,
    //             0, -width
    //         ],
    //         extrapolate: 'clamp'
    //     });
    //
    //     let rotateY = scrollX.interpolate({
    //         inputRange: [
    //             pageX - width,
    //             pageX,
    //             pageX + width
    //         ],
    //         outputRange: [
    //             '45deg', '0deg', '-45deg'
    //         ],
    //         extrapolate: 'clamp'
    //     });
    //
    //     return {
    //         transform: [
    //             {
    //                 perspective: width
    //             }, {
    //                 rotateY
    //             }, {
    //                 translateX
    //             }
    //         ]
    //     }
    // }

    _getTransformsFor = ( i ) => {
        let { scrollX } = this.state;
        let pageX = width * i;

        let translateX = scrollX.interpolate({
            inputRange: [
                pageX - width,
                pageX,
                pageX + width
            ],
            outputRange: [
                width / 2,
                0, -width / 2
            ],
            extrapolate: 'clamp'
        });

        let rotateY = scrollX.interpolate({
            inputRange: [
                pageX - width,
                pageX,
                pageX + width
            ],
            outputRange: [
                '60deg', '0deg', '-60deg'
            ],
            extrapolate: 'clamp'
        });

        let translateXAfterRotate = scrollX.interpolate({
            inputRange: [
                pageX - width,
                pageX,
                pageX + width
            ],
            inputRange: [
                pageX - width,
                pageX - width + 0.1,
                pageX,
                pageX + width - 0.1,
                pageX + width
            ],
            outputRange: [
                width, width / 2.38,
                0, -width / 2.38, -width
            ],
            extrapolate: 'clamp'
        });

        return {
            transform: [
                {
                    perspective: width
                }, {
                    translateX
                }, {
                    rotateY
                }, {
                    translateX: translateXAfterRotate
                }
            ]
        }
    }

    _getOpacityFor = ( i ) => {
        let { scrollX } = this.state;
        let pageX = width * i;
        let opacity = scrollX.interpolate({
            inputRange: [
                pageX - width,
                pageX,
                pageX + width
            ],
            outputRange: [
                0.9, 0, 0.9
            ],
            extrapolate: 'clamp'
        });

        return { opacity };
    }

    _renderChild = ( child, i ) => {
        return (
            <Animated.View style={[StyleSheet.absoluteFill, this._getTransformsFor( i )]} key={`child-${ i }`}>
                {child}
                <Animated.View style={[
                    StyleSheet.absoluteFill, {
                        backgroundColor: 'green'
                    },
                    this._getOpacityFor( i )
                ]}/>
            </Animated.View>
        );
    }

    _renderPlaceholders = ( child, i ) => {
        return (
            <View key={`placeholder-${ i }`} style={{
                width,
                height
            }}>
                <Text>Test</Text>
            </View>
        );
    }
}

export default class CubeTransitionExample extends React.Component {
    render( ) {
        return (
            <CubeTransition style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Image source={require( '../chatView/img/money.png' )} style={styles.image}/>
                <Image source={require( '../chatView/img/fc2.png' )} style={styles.image} key="2"/>
                <Image source={require( '../chatView/img/monkey_01.png' )} style={styles.image} key="3"/>
                <Image source={require( '../chatView/img/plant_11.png' )} style={styles.image} key="4"/>
                <Image source={require( '../chatView/img/sh.png' )} style={styles.image} key="5"/>
                <Image source={require( '../chatView/img/gb.png' )} style={styles.image} key="6"/>
            </CubeTransition>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'stretch',
        width,
        height
    },
    container: {
        flex: 1
    },
    contentContainer: {}
});
