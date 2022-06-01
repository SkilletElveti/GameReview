import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export default function Header({navigation}) {
    const openMenu = () => {
        navigation.openDrawer();
    }
    return(
        <View style={styles.headerStyle}>
        <MaterialIcons name = 'menu' size = {28} onPress={openMenu} style = {styles.icons}/>
            <View>
                <Text style={styles.headerText}>GameZone</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        width: Dimensions.get('screen').width,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icons: {
        position: 'absolute',
        left: 16,
    },
});