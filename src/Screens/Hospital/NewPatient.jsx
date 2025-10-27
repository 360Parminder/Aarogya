import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, Text, TextInput, View, Alert, ActivityIndicator, ScrollView } from "react-native";
import axios from 'axios';
import { GlobalStyles } from "../../Styles/Global";
import { FormsStyles } from "../../Styles/Forms";

const NewPatient = () => {
    const navigation = useNavigation();
    const [patientUID, setPatientUID] = useState(null);
    const [PatientDetails, setPatientDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [patientVerified, setPatientVerified] = useState(true);

    const fetchPatientDetails = async () => {
        setIsLoading(true);
        if (!patientUID) {
            setIsLoading(false);
            Alert.alert('Please enter patient UID');
            return;
        }
        try {
            // Replace with your actual backend URL
            const response = await axios.get(`YOUR_BACKEND_URL/${patientUID}`);
            setPatientDetails(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
            Alert.alert('Failed to fetch patient details');
            navigation.navigate('Home');
        } finally {
            setIsLoading(false);
        }
    };
    const verifyAadharCard = async () => {
        setIsLoading(true);
        try {
            // Replace with your actual backend URL
            const response = await axios.get(`YOUR_BACKEND_URL/verifyAadharCard/${patientUID}`);
            setPatientVerified(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
            Alert.alert('Failed to verify Aadhar card');
            navigation.navigate('Home');
        } finally {
            setIsLoading(false);
        }
    };
    const registerPatient = async () => {
       console.log('registerPatient');
       setIsLoading(true);
       try {
           // Replace with your actual backend URL
           const response = await axios.post(`YOUR_BACKEND_URL/registerPatient/${patientUID}`);
           console.log(response.data);
       } catch (error) {
           console.log(error);
           Alert.alert('Failed to register patient');
           navigation.navigate('Home');
       } finally {
           setIsLoading(false);
       }
       
    };

    return (
        <ScrollView style={GlobalStyles.container}>

          <View style={GlobalStyles.header}>
            <Text style={GlobalStyles.title}>New Patient</Text>
          </View>
            <View style={FormsStyles.formContainer}>

            <View style={FormsStyles.inputGroup}>
                <Text style={FormsStyles.label}>Patient First Name</Text>
                <TextInput
                    style={FormsStyles.input}
                    keyboardType="default"
                    placeholder="Patient First Name"
                    placeholderTextColor="white"
                    />
            </View>

            <View style={FormsStyles.inputGroup}>
                <Text style={FormsStyles.label}>Patient Last Name</Text>
                <TextInput
                    style={FormsStyles.input}
                    keyboardType="default"
                    placeholder="Patient Last Name"
                    placeholderTextColor="white"
                    />
            </View>

            <View style={FormsStyles.inputGroup}>
                <Text style={FormsStyles.label}>Patient Contact Number</Text>
                <TextInput
                    style={FormsStyles.input}
                    keyboardType="number-pad"
                    placeholder="Contact Number"
                    placeholderTextColor="white"
                    />
            </View>

            <View style={FormsStyles.inputGroup}>
                <Text style={FormsStyles.label}>Date of Birth</Text>
                <TextInput
                    style={FormsStyles.input}
                    keyboardType="default"
                    placeholder="Date of Birth"
                    placeholderTextColor="white"
                    />
            </View>

            <View style={FormsStyles.inputGroup}>
                <Text style={FormsStyles.label}>Patient Gender</Text>
                <TextInput
                    style={FormsStyles.input}
                    keyboardType="default"
                    placeholder="Gender"
                    placeholderTextColor="white"
                    />
            </View>

            <View style={FormsStyles.inputGroup}>
                <Text style={FormsStyles.label}>Patient Address</Text>
                <TextInput
                    style={FormsStyles.input}
                    keyboardType="default"
                    placeholder="Address"
                    placeholderTextColor="white"
                    />
            </View>

            <View style={FormsStyles.inputGroup}>
                <Text style={FormsStyles.label}>Patient Password</Text>
                <TextInput
                    style={FormsStyles.input}
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="white"
                    />
            </View>

            <View style={FormsStyles.inputGroup}>
                <Text style={FormsStyles.label}>Patient Aadhar Card</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <TextInput
                        style={{ height: 40, width: '75%', borderColor: 'white', borderWidth: 1, borderRadius: 5, paddingLeft: 10, color: 'white' }}
                        keyboardType="number-pad"
                        placeholder="Aadhar Card"
                        placeholderTextColor="white"
                        />
                    <Pressable style={{ backgroundColor: 'white', paddingVertical: 10, paddingHorizontal: 5, borderRadius: 5,width:'25%' }}>
                        <Text style={{ fontSize: 16, color: '#5D4FB3', textAlign: 'center' }}>Verify</Text>
                    </Pressable>
                </View>
            </View>
            <View style={FormsStyles.inputGroup}>
            <Pressable disabled={patientVerified} style={{ backgroundColor: '#f5f0ff', padding: 10, borderRadius: 5, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#5D4FB3', fontSize: 16, textAlign: 'center' }}>Register Patient</Text>
                </Pressable>
            </View>
                        </View>
        </ScrollView>
    );
};

export default NewPatient;
