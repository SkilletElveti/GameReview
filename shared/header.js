import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export default function Header({navigation, title}) {
    const openMenu = () => {
        navigation.openDrawer();
    }
    return(
        <View style={styles.headerStyle}>
        <MaterialIcons name = 'menu' size = {28} onPress={openMenu} style = {styles.icons}/>
            <View style={styles.headerTitle}>
                <Image source = {require('../assets/heart_logo.png')} style = {styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        width: Dimensions.get('screen').width,
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
    headerImage: {
        height: 26,
        width: 26,
        marginHorizontal: 10,
    },
    headerTitle: {
        flexDirection:'row',
    },
});