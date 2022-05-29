import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
export default function Details() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titelText}>Details Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
});