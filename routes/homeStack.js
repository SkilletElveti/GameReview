import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../Screens/home";
import Details from "../Screens/details";
import About from "../Screens/about";
const screens = {
    Home: {
        screen: Home
    },
    Details: {
        screen: Details
    },
    About: {
        screen: About
    },
}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);