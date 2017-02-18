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

class ChatView extends Component {

    _listView : React.Component < any >;

    constructor( props ) {
        super( props );
        this.messagePackets = [
            {
                sender: 'Mary',
                message: 'hello'
            }, {
                sender: 'PoHsun',
                message: 'world!'
            }
        ];
        this.state = {
            messagePackets: this.messagePackets
        };
    }

    upDateMessagePackets( ) {
        const sender = Math.round(Math.random( )) % 2;
        if ( sender === 0 ) {
            this.messagePackets.push({sender: 'Mary', message: moment( ).format( "LTS" )});
        } else {
            this.messagePackets.push({sender: 'PoHsun', message: moment( ).format( "LTS" )});
        };
    }

    startChating( ) {
        this.timeID = setInterval( ( ) => {
            this.upDateMessagePackets( );
            this.setState({ messagePackets: this.messagePackets });
        }, 1000 );
    }

    componentDidMount(){
      this.startChating();
    }

    componentDidUpdate( prevProps, prevState ) {

    }

    render( ) {
        const ds = new ListView.DataSource({
            rowHasChanged: ( r1, r2 ) => {
                return r1 !== r2;
            }
        });
        var dataSource = ds.cloneWithRows(this.state.messagePackets.slice( ));
        return (
            <View style={{
                flex: 1,
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
                    <Button onPress={( ) => {
                        this.startChating( );
                    }} title="start" color="#841584"/>
                    <Button onPress={( ) => {
                        clearInterval( this.timeID );
                    }} title="stop" color="#841584"/>
                </View>
                <ListView ref={( component ) => this._listView = component} style={{
                    flex: 1,
                    backgroundColor: 'blue'
                }} dataSource={dataSource} renderRow={( rowData ) => {
                    if ( rowData.sender !== 'PoHsun' ) {
                        return <LeftChatView messagePacket={rowData}/>
                    } else {
                        return <RightChatView messagePacket={rowData}/>
                    }
                }}/>
            </View>
        );
    }
}

class ChatGiftView extends Component {
    constructor( props ) {
        super( props );
        this.messagePackets = [
            {
                sender: 'Mary',
                message: 'hello'
            }, {
                sender: 'PoHsun',
                message: 'world!'
            }
        ];
        this.onSend = this.onSend.bind( this );
        this.state = {
            messagePackets: this.messagePackets,
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(Date.UTC( 2016, 7, 30, 17, 25, 0 )),
                    user: {
                        _id: 1,
                        name: 'React Native',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png'
                    }
                }, {
                    _id: 2,
                    text: 'Hello developer!',
                    createdAt: new Date(Date.UTC( 2016, 7, 30, 17, 20, 0 )),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png'
                    }
                }
            ]
        };
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
            this.messagePackets.push({sender: 'Mary', message: moment( ).format( "LTS" )});
        } else {
            this.messagePackets.push({sender: 'PoHsun', message: moment( ).format( "LTS" )});
        };
    }

    startChating( ) {
        this.timeID = setInterval( ( ) => {
            this.upDateMessagePackets( );
            this.setState({ messagePackets: this.messagePackets });
        }, 1000 );
    }

    renderFooter( props ) {
      console.log('renderFooter');
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
      console.log('renderInputToolbar');
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
        return (
            <View style={{
                flex: 1,
                marginTop: 20,
                backgroundColor: 'pink',
            }} >
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
                    <Button onPress={( ) => {
                        this.startChating( );
                    }} title="start" color="#841584"/>
                    <Button onPress={( ) => {
                        clearInterval( this.timeID );
                    }} title="stop" color="#841584"/>
                </View>
                <GiftedChat messages={this.state.messages} onSend={this.onSend} user={{
                    _id: 1
                }} />
            </View>
        );
    }
}

export default ChatGiftView;
