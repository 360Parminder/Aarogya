import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/Hospital/HomeScreen";
import PatientDetails from "../Screens/Hospital/PatientDetails";
import NewPatient from "../Screens/Hospital/NewPatient";
import AddAdmission from "../Screens/Hospital/AddAdmission";
import DischargePatient from "../Screens/Hospital/ DischargePatient";

const Stack = createStackNavigator();
const HospitalStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="PatientDetails" component={PatientDetails} options={{ headerShown: false}} />
            <Stack.Screen name="NewPatient" component={NewPatient} options={{ headerShown: false }} />
            <Stack.Screen name="AddAdmission" component={AddAdmission} options={{ headerShown: false }} />
            <Stack.Screen name="DischargePatient" component={DischargePatient} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default HospitalStack;