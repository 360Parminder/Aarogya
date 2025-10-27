import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../Styles/Global";
import { FormsStyles } from "../../Styles/Forms";

const PatientDetails = () => {
    const navigation = useNavigation();
    const [patientUID, setPatientUID] = useState(null);
    const [PatientDetails, setPatientDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
   const fetchPatientDetails = async() => {
    setIsLoading(true);
    if(!patientUID){
        setIsLoading(false);
       Alert.alert( 'Please enter patient UID');
       return;
    }
    else{
        try {
            //have to work on backend
            const response = await axios.get(``);
            setPatientDetails(response.data);
            console.log(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            navigation.navigate('Home');
        }
    }
   
   }
    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.header}>
                <Text style={GlobalStyles.title}>Patient Details</Text>
            </View>
            <View style={[FormsStyles.inputGroup,{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginBottom: 20, gap: 10 }]}>
                <TextInput 
                onChange={(text)=>setPatientUID(text)}
                    style={[FormsStyles.input,{width:'70%'}]}
                    keyboardType="number-pad" 
                    placeholder="Patient UID" 
                    placeholderTextColor="white" 
                />
                <Pressable 
                onPress={()=>fetchPatientDetails()}
                    style={{ height: 40, width: 110, backgroundColor: 'white', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, color: '#5D4FB3', marginHorizontal: 4 }}>Fetch Patient</Text>
                </Pressable>
            </View>
        {
            PatientDetails===null?(
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}> Search for Patient Details</Text>
                </View>
            ):(
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginTop: 20, marginBottom: 20, gap: 10, backgroundColor: 'white', padding: 10, borderRadius: 5 }}>
                <Text style={{ textAlign: 'center', fontSize: 22, textTransform: 'capitalize', fontWeight: '600' }}>Patient Details</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Text style={{ fontSize: 20, color: 'black' }}>Name:</Text>
                    <Text>Parminder Singh</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Text style={{ fontSize: 20, color: 'black' }}>Age:</Text>
                    <Text>30</Text> 
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Text style={{ fontSize: 20, color: 'black' }}>Gender:</Text>
                    <Text>Male</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Text style={{ fontSize: 20, color: 'black' }}>Address:</Text>
                    <Text>New Delhi</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Text style={{ fontSize: 20, color: 'black' }}>Contact:</Text>
                    <Text>(+91)9876543210</Text>
                </View>
            </View>
            )
        }
            
        </View>
    );
};

export default PatientDetails;
