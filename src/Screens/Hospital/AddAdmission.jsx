import { View, Text, TextInput, ScrollView, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../Styles/Global";
import { FormsStyles } from "../../Styles/Forms";

const AddAdmission = () => {
  return (
    <ScrollView style={GlobalStyles.container}>
        <View style={GlobalStyles.header}>
            <Text style={GlobalStyles.title}>Patient Admission Details</Text>
        </View>
      <View style={FormsStyles.formContainer}>
        {/* Doctor Name */}
        <View style={[FormsStyles.inputGroup, { marginTop:10 }]}>
          <Text style={FormsStyles.label}>Doctor Name</Text>
          <TextInput
            style={FormsStyles.input}
            placeholder="Doctor Name"
            placeholderTextColor={'#f5f0ff'}
          />
        </View>

        {/* Date & Time of Admission */}
        <View style={FormsStyles.inputGroup}>
          <Text style={FormsStyles.label}>Date & Time of Admission</Text>
          <TextInput
            style={FormsStyles.input}
            placeholder="Date of Admission"
            placeholderTextColor={'#f5f0ff'}
          />
        </View>

        {/* Disease Name */}
        <View style={FormsStyles.inputGroup}>
          <Text style={FormsStyles.label}>Disease Name</Text>
          <TextInput
            style={FormsStyles.input}
            placeholder="Disease Name"
            placeholderTextColor={'#f5f0ff'}
          />
        </View>

        {/* Mode of Payment */}
        <View style={FormsStyles.inputGroup}>
          <Text style={FormsStyles.label}>Mode of Payment</Text>
          <TextInput
            style={FormsStyles.input}
            placeholder="Mode of Admission"
            placeholderTextColor={'#f5f0ff'}
          />
        </View>

        {/* Ward Type */}
        <View style={FormsStyles.inputGroup}>
          <Text style={FormsStyles.label}>Ward Type</Text>
          <TextInput
            style={FormsStyles.input}
            placeholder="Ward Type"
            placeholderTextColor={'#f5f0ff'}
          />
        </View>

        {/* Room Number */}
        <View style={FormsStyles.inputGroup}>
          <Text style={FormsStyles.label}>Room Number</Text>
          <TextInput
            style={FormsStyles.input}
            placeholder="Room Number"
            keyboardType="number-pad"
            placeholderTextColor={'#f5f0ff'}
          />
        </View>

        {/* Bed Number */}
        <View style={FormsStyles.inputGroup}>
          <Text style={FormsStyles.label}>Bed Number</Text>
          <TextInput
            style={FormsStyles.input}
            placeholder="Bed Number"
            keyboardType="number-pad"
            placeholderTextColor={'#f5f0ff'}
          />
        </View>
        <View style={FormsStyles.inputGroup}>
         <Pressable style={{ backgroundColor: '#f5f0ff', padding: 10, borderRadius: 5, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{color:'#3b007a'}}>Admit Patient</Text>
         </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 
 
});

export default AddAdmission;
