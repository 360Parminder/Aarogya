
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../Context/AuthContext';
import { ActivityIndicator, View } from 'react-native';
import AuthStack from './AuthStack';
import PatientStack from './PatientStack';
import GovermentStack from './GovermentStack';
import HospitalStack from './HospitalStack';



const AppNavigation = () => {
    const { isLoading, token, user } = useContext(AuthContext);

    if (isLoading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size={'large'} />
            </View>
        );
    }

    return (
        <NavigationContainer>
            {token !== null ? (
                user.role === 'patient' ? <PatientStack /> 
                : user.role === 'government' ? <GovermentStack /> 
                : user.role === 'hospital' ? <HospitalStack /> 
                : null // fallback for any unexpected role
            ) : (
                <AuthStack />
            )}
        </NavigationContainer>
    );
}

export default AppNavigation;
