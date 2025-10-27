import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../Styles/Global";
import { FormsStyles } from "../../Styles/Forms";

const DischargePatient = () => {
    return (

        <View style={GlobalStyles.container}>
             <View style={GlobalStyles.header}>
            <Text style={GlobalStyles.title}>Patient Discharge Details</Text>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#18181B',
        paddingHorizontal: 10,
        paddingVertical: 10,
        paddingTop: Platform.OS === 'ios' ? 60 : 20,
    },
      formContainer: {
        flexDirection: 'column',
        backgroundColor: '#3b007a',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        gap: 10,
        height: '100%',
      },

      header: {
        alignItems: 'center',
        backgroundColor: '#5D4FB3',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
      },
      title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
      },
});
export default DischargePatient;