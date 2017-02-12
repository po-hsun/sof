//@flow
'use strict';
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    editProfile: {
        width: 24,
        height: 24,
        marginTop: 10,
        marginRight: 10,
        alignSelf: 'flex-end'
    },
    avatar: {
        width: 68,
        height: 68,
        marginTop: 4,
        borderRadius: 34
    },
    userName: {
        width: 85,
        height: 23,
        marginTop: 4,
        textAlign: 'center',
        fontSize: 16,
        color: '#49aeff',
        fontFamily: 'sans-serif-light'
    },
    userEmail: {
        width: 139,
        height: 23,
        fontSize: 14,
        color: '#878787',
        textAlign: 'center'
    },
    divider: {
        height: 1,
        backgroundColor: '#e7e7e7'
    }
});
