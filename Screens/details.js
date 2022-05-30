import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { globalStyles } from '../styles/global';
export default function Details(props) {
    const popScreen = () => {
        props.navigation.goBack(null);
    }
    return (
        <View style={globalStyles.container}>
           <Text style={globalStyles.titelText}>{props.navigation.getParam('title')}</Text>
           <Text style={globalStyles.titelText}>{props.navigation.getParam('body')}</Text>
           <Text style={globalStyles.titelText}>{props.navigation.getParam('rating')}</Text>
        </View>
       
    );
}