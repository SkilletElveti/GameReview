import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback ,Keyboard} from 'react-native';
import Card from '../shared/Card';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
    const [modelOpen, setModelOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    const addReview = (Review) => {
        Review.key = reviews.size + 1;
        setReviews((currentReviews) => {
            return [Review, ...currentReviews];
        })
        setModelOpen(false);
    }

    const onPressHandler = () => {
        navigation.navigate('Details');
    }
    return (<View style={globalStyles.container}>
        <Modal visible={modelOpen} animationType='slide'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name='close'
                        size={24}
                        onPress={() => {
                            setModelOpen(false)
                        }}
                        style={styles.modalInner}/>
                    <ReviewForm addReview={addReview} />
                </View>
            </TouchableWithoutFeedback>

        </Modal>
        <MaterialIcons
            name='add'
            size={24}
            onPress={() => {
                setModelOpen(true)
            }}
            style={styles.modalToggle}
        />
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

const styles = StyleSheet.create({
    modalToggle: {
        marginTop: 0,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#2222',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalInner: {
        marginTop: 40,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#2222',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalContent: {
        flex: 1,
    }
})