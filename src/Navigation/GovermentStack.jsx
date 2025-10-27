import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/Goverment/HomeScreen";
const stack = createStackNavigator();
const GovermentStack = () => {
    return (
        <stack.Navigator initialRouteName="Home">
            <stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </stack.Navigator>
    )
}

export default GovermentStack;