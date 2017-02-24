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
    ScrollView,
    ViewPagerAndroid,
    Platform,
    Dimensions
} from "react-native";
import { PUSH_ROUTE, POP_ROUTE, BACK_ROUTE, GO_HOME } from '../../constants/constants';
import moment from "moment";
import { GiftedChat } from 'react-native-gifted-chat';
import dismissKeyboard from 'dismissKeyboard';

const LeftChatView = ({ messagePacket }) => {
    return (
        <View style={{
            backgroundColor: 'gray'
        }}>
            <Text>{messagePacket.sender}: {messagePacket.message}</Text>
        </View>
    );
}

const RightChatView = ({ messagePacket }) => {
    return (
        <View style={{
            backgroundColor: 'pink'
        }}>
            <Text style={{
                alignSelf: 'flex-end'
            }}>{messagePacket.sender}: {messagePacket.message}</Text>
        </View>
    );
}

class ChatGiftView extends Component {
    constructor( props ) {
        super( props );
        this.onSend = this.onSend.bind( this );
        this.state = {
            messagePackets: [
                {
                    _id: 0,
                    text: 'Hello developer',
                    createdAt: new Date(Date.UTC( 2016, 7, 30, 17, 25, 0 )),
                    user: {
                        _id: 1,
                        name: 'React Native',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png'
                    }
                }, {
                    _id: 1,
                    text: 'Hello developer!',
                    createdAt: new Date(Date.UTC( 2016, 7, 30, 17, 20, 0 )),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png'
                    }
                }
            ],
            selectedIndex: 0,
            initialSelectedIndex: 0
        };
        this._renderGiftView = this._renderGiftView.bind( this );
        this._handleHorizontalScroll = this._handleHorizontalScroll.bind( this );
        this._adjustCardSize = this._adjustCardSize.bind( this );
        this.upDateMessagePackets = this.upDateMessagePackets.bind( this );
        this._messageId = 2;
    }

    onSend(messages = [ ]) {
        this.setState(( previousState ) => {
            return {
                messages: GiftedChat.append( previousState.messages, messages )
            };
        });
    }

    upDateMessagePackets( ) {
        const sender = Math.round(Math.random( )) % 2;
        if ( sender === 0 ) {
            this.setState(( preState ) => {
              return {
                  messagePackets: GiftedChat.append(preState.messagePackets, {
                      _id: this._messageId++,
                      text: 'Hello developer',
                      createdAt: new Date(),
                      user: {
                          _id: 1,
                          name: 'React Native',
                          avatar: 'https://facebook.github.io/react/img/logo_og.png'
                      }
                  })
              }
            });
        } else {
            this.setState(( preState ) => {
                return {
                    messagePackets: GiftedChat.append(preState.messagePackets, {
                        _id: this._messageId++,
                        text: 'Hello developer',
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: 'React Native',
                            avatar: 'https://facebook.github.io/react/img/logo_og.png'
                        }
                    })
                }
            });
        };
    }

    startChating( ) {
        this.timeID = setInterval( ( ) => {
            this.upDateMessagePackets( );
            //this.setState({ messagePackets: this.messagePackets });
        }, 1000 );
    }

    _renderGiftView( ) {
        if ( Platform.OS === 'ios' ) {
            return this._renderGiftViewIOS( );
        } else {
            return this._renderGiftViewAndroid( );
        }
    }

    _handleHorizontalScroll( e ) {
        // console.log( 'horizontal:positon ' + JSON.stringify( e.nativeEvent.contentOffset.x ) + ' and width: ' + e.nativeEvent.layoutMeasurement.width );
        var selectedIndex = e.nativeEvent.position;
        if ( selectedIndex === undefined ) {
            // selectedIndex = Math.round( e.nativeEvent.contentOffset.x / this.state.width, );
            selectedIndex = e.nativeEvent.contentOffset.x >= 80
                ? 1
                : 0;
        }
        if ( selectedIndex < 0 || selectedIndex >= this.props.count ) {
            return;
        }
        if ( this.state.scrollingTo !== null && this.state.scrollingTo !== selectedIndex ) {
            return;
        }
        if ( this.props.selectedIndex !== selectedIndex || this.state.scrollingTo !== null ) {
            this.setState({ selectedIndex, scrollingTo: null });
            const { onSelectedIndexChange } = this.props;
            onSelectedIndexChange && onSelectedIndexChange( selectedIndex );
        }
    }

    componentWillReceiveProps( nextProps ) {
        console.log( 'componentWillReceiveProps' );
        if ( nextProps.selectedIndex !== this.state.selectedIndex ) {
            this.refs.scrollview.scrollTo({
                x: nextProps.selectedIndex * 375,
                animated: true
            });
            this.setState({ scrollingTo: nextProps.selectedIndex });
        }
    }

    _adjustCardSize( e ) {
        console.log( 'adjust Card Size: width ' + e.nativeEvent.layout.width + ' height: ' + e.nativeEvent.layout.height );
    }

    _renderGiftViewIOS( ) {
        console.log( 'render: Gift' );
        const contents = ([< Text style = {{width:Dimensions.get('window').width,backgroundColor:'gray'}} > {
                'FFFF'
            } < /Text>,<Text style={{width:Dimensions.get('window').width,backgroundColor:'blue'}}>{'UUUU'}</Text >]);
        return (
            <ScrollView ref='scrollview' horizontal={true} bounces={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} onScroll={this._handleHorizontalScroll} scrollEventThrottle={100} onLayout={this._adjustCardSize} contentOffset={{
                x: 0,
                y: 0
            }} directionalLockEnabled={true} scrollsToTop={false}>{React.Children.map(contents, ( children, index ) => ( children ))}</ScrollView>
        );
    }

    renderFooter( props ) {
        return (
            <View style={{
                marginTop: 5,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 10
            }}>
                <Text style={{
                    fontSize: 14,
                    color: '#aaa'
                }}>
                    'React Native is typing'
                </Text>
            </View>
        );
    }

    renderInputToolbar( props ) {
        return (
            <View style={{
                width: 200,
                height: 40,
                backgroundColor: 'green'
            }}><TextInput value='type here' style={{
                width: 200,
                height: 40,
                borderColor: 'gray',
                borderWidth: 1
            }}/>
            </View>
        );
    }

    render( ) {
        console.log( 'render:' );
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'transparent'
            }}>
                <View style={{
                    height: 150,
                    backgroundColor: 'pink'
                }}>{this._renderGiftView( )}</View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Button onPress={( ) => {
                        this.startChating( );
                    }} title="start" color="#841584"/>
                    <Button onPress={( ) => {
                        clearInterval( this.timeID );
                    }} title="stop" color="#841584"/>
                </View>
                <GiftedChat messages={this.state.messagePackets} onSend={this.onSend} user={{
                    _id: 1
                }}/>
            </View>
        );
    }
}

export default ChatGiftView;
