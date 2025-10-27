import { Text, View } from "react-native";
import { GlobalColors } from "../../Styles/GlobalColors";
import { GlobalStyles } from "../../Styles/Global";

const HomeScreen = () => {
    return (
        <View style={GlobalStyles.container}>
            <Text>
                Welcome to Govrnment
            </Text>
        </View>
    )
}

export default HomeScreen;