import SignIn from "../Screens/Signin"
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
        </Stack.Navigator>
    )
}

export default AuthStack