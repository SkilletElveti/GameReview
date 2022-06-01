import { createStackNavigator } from "react-navigation-stack";
import About from "../Screens/about";
import Header from "../shared/header";
const screens = {
    About: {
        screen: About,
        navigationOptions: {
            headerTitle: () => <Header/>
        },
    },
}
const AboutStack = createStackNavigator(screens, {
     defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: '#eee',
            height: 90
        }}});
export default AboutStack;