import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font'
const getFonts = () => {
    return Font.loadAsync({
        'nunito-regular': require('./assets/Fonts/Nunito-Regular.ttf'),
        'nunito-bold': require('./assets/Fonts/Nunito-Bold.ttf'),
    })
}
export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
});