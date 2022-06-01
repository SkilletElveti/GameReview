import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import Card from '../shared/Card';


import { globalStyles } from '../styles/global';
export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);
    const onPressHandler = () => {
        navigation.navigate('Details');
    }
    return (<View style={globalStyles.container}>
        <FlatList
            data={reviews}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Details', item);
                        }}>
                        <Card>
                            <Text style={globalStyles.titelText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                );
            }} />
    </View>);
}

