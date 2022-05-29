import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default function Home() {
    return (<View style={styles.container}>
        <Text style={styles.container}>Home Screen</Text>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        fontFamily: 'bold',
    },
});