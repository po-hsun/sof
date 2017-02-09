//@flow
'use strict';
import React, { Component } from 'react';
import {
    DrawerLayoutAndroid,
    Text,
    View,
    TouchableHighlight,
    Image,
    ToastAndroid
} from "react-native";
import { styles } from './tabViewStyle';

class Tab extends Component {
    render( ) {
        return (
            <TouchableHighlight style={[
                styles.HeighLightContainer, {
                    width: 200
                }
            ]} underlayColor='#f5f5f5' onPress={( ) => ToastAndroid.show( 'This is a toast with short duration', ToastAndroid.SHORT )}>
                <View style={[
                    styles.ItemContainer, {
                        width: 200
                    }
                ]}>
                    <Image width={24} height={24} source={{
                        uri: this.props.uri
                    }} style={styles.ItemIcon}/>
                    <Text style={styles.ItemName}>{this.props.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

module.exports = Tab;
