import React, { useState } from 'react';
import { StyleSheet, View, Text,Button } from 'react-native';

import { globalStyles } from '../styles/global';
export default function Home({navigation}) {
    const onPressHandler = () => {
        navigation.navigate('Details');
    }
    return (<View style={globalStyles.container}>
        <Text style={globalStyles.titelText}>Home Screen</Text>
        <Button title = "Navigate" onPress={() => {onPressHandler()}}/>
    </View>);
}

