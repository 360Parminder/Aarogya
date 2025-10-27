import { useNavigation } from "@react-navigation/native";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../Styles/Global";
const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={GlobalStyles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.profileImage}
                    source={require('../../assets/images/Profile.jpg')}
                    resizeMode="cover"
                />
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>Welcome Back !</Text>
                    <Text style={styles.headerName}>Parminder Singh</Text>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <Pressable onPress={() => navigation.navigate('NewPatient')} style={styles.pressable}>
                    <Image
                        style={styles.iconImage}
                        source={require('../../assets/images/NewPatient.gif')}
                        resizeMode="cover"
                    />
                    <Text style={styles.pressableText}>New Patient</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('PatientDetails')} style={styles.pressable}>
                    <Image
                        style={styles.iconImage}
                        source={require('../../assets/images/OldPatient.gif')}
                        resizeMode="cover"
                    />
                    <Text style={styles.pressableText}>Old Patient</Text>
                </Pressable>
            </View>
            <View style={styles.rowContainer}>
                <Pressable onPress={() => navigation.navigate('AddAdmission')} style={styles.pressable}>
                    <Image
                        style={styles.iconImage}
                        source={require('../../assets/images/hospitalization.gif')}
                        resizeMode="cover"
                    />
                    <Text style={styles.pressableText}>Add admission details</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('DischargePatient')} style={styles.pressable}>
                    <Image
                        style={styles.iconImage}
                        source={require('../../assets/images/opd.gif')}
                        resizeMode="cover"
                    />
                    <Text style={styles.pressableText}>Upload discharge summary</Text>
                </Pressable>
            </View>
            <View style={styles.rowContainer}>
                <Pressable style={styles.pressable}>
                    <Image
                        style={styles.iconImage}
                        source={require('../../assets/images/reception.gif')}
                        resizeMode="cover"
                    />
                    <Text style={styles.pressableText}>Assign doctors</Text>
                </Pressable>
                <Pressable style={styles.pressable}>
                    <Image
                        style={styles.iconImage}
                        source={require('../../assets/images/medical-storage.gif')}
                        resizeMode="cover"
                    />
                    <Text style={styles.pressableText}>Manage medications</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
   
    header: {
        flexDirection: 'row',
        height: 100,
        alignItems: 'center',
        backgroundColor: '#5D4FB3',
        padding: 10,
        borderRadius: 5,
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    headerTextContainer: {
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    headerName: {
        fontSize: 17,
        color: '#fff',
    },
    rowContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pressable: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#5D4FB3',
        padding: 10,
        borderRadius: 5,
        width: '45%',
    },
    iconImage: {
        width: 70,
        height: 70,
        borderRadius: 14,
    },
    pressableText: {
        fontSize: 16,
        color: '#fff',
        marginTop: 10,
        textAlign: 'center',
    },
});

export default HomeScreen;
