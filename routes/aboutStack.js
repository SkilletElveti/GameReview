import { createStackNavigator } from "react-navigation-stack";
import About from "../Screens/about";

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About',
            headerStyle: {
                backgroundColor: '#eee',
            }
        },
    },
}
const AboutStack = createStackNavigator(screens, {
     defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: '#eee',
            height: 60
        }}});
export default AboutStack;