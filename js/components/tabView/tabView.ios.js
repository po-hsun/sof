//@flow
'use strict';
import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, TabBarIOS } from "react-native";
import { stylesIOS } from './tabViewStyle';

type Props = {
    title: string,
    icon: number,
    selected: boolean,
    children: React$Element < any >,
    onPress: Function
};

class Tab extends Component {
    render( ) {
        return (
            <TabBarIOS.Item title={this.props.title} icon={this.props.icon} onPress={this.props.onPress} selected={this.props.selected}>
                {this.props.children}
            </TabBarIOS.Item>
        );
    }
}

Tab.propTypes = {
    icon: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    selected: React.PropTypes.bool.isRequired,
    onPress: React.PropTypes.func.isRequired,
    children: React.PropTypes.node.isRequired
}

module.exports = Tab;
