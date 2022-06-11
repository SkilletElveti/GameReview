import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20,
    },
    titelText:{
        fontFamily: 'regular',
        fontSize: 18,
        color: '#333'
    },
    paragragh: {
        marginVertical: 8,
        lineHeight: 20,
    },
    touchable: {
        color: 'coral'
    },
    input: {
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
});

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
       
    }
}