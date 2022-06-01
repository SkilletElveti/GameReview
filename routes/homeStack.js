import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../Screens/home";
import Details from "../Screens/details";
import About from "../Screens/about";
import Header from "../shared/header";
const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return{
                headerTitle: () => <Header navigation={navigation}  title = "Home"/>
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
}
const HomeStack = createStackNavigator(screens, {
     defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: '#eee',
            height: 80
        }}});
export default HomeStack;