//@flow
'use strict';
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    HeighLightContainer: {
        height: 50
    },
    ItemContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ItemIcon: {
        width: 24,
        height: 24,
        marginLeft: 24,
        tintColor: 'rgb(73,174,255)'
    },
    ItemName: {
        flex: 1,
        marginLeft: 15,
        fontSize: 16,
        fontFamily: 'sans-serif-light',
        color: '#424242'
    }
});

export const stylesIOS = StyleSheet.create({
    Container: {
        width: 65,
        height: 49
    }
})
