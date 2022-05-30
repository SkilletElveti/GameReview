import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../Screens/home";
import Details from "../Screens/details";
import About from "../Screens/about";
const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'GameZone',
            headerStyle: {
                //backgroundColor: '#eee',
            }
        },
    },
    Details: {
        screen: Details,
        navigationOptions: {
            title: 'Review Details',
            headerStyle: {
                //backgroundColor: '#eee',
            }
        },
    },
    About: {
        screen: About
    },
}
const HomeStack = createStackNavigator(screens, {
     defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: '#eee',
            height: 60
        }}});
export default createAppContainer(HomeStack);