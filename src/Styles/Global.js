import { StyleSheet } from "react-native";
import { GlobalColors} from "./GlobalColors";
import { Platform } from "react-native";

export const GlobalStyles  = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: GlobalColors.backgroundColor,
        paddingTop: Platform.OS === 'ios' ? 60 : 20,
        paddingHorizontal: 20,
    },
    header: {
        alignItems: 'center',
        backgroundColor: GlobalColors.headerBackgroundColor,
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
      },
      title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: GlobalColors.headerTextColor,
        textAlign: 'center',
      },
      
})

