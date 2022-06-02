import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import Card from '../shared/Card';
import { globalStyles,images } from '../styles/global';
export default function Details(props) {
    const rating = props.navigation.getParam('rating');
    console.log(rating);
    const popScreen = () => {
        props.navigation.goBack(null);
    }
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titelText}>{props.navigation.getParam('title')}</Text>
                <Text style={globalStyles.titelText}>{props.navigation.getParam('body')}</Text>
                <View style={styles.ratings}>
                    <Text> GameZone rating: </Text>
                    <Image source = {images.ratings[rating]}/>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    ratings:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:16,
        marginBottom: 16,
    },
})