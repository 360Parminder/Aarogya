import { GlobalColors } from "./GlobalColors";

export const FormsStyles  = {
    formContainer: {
        flexDirection: 'column',
        backgroundColor: GlobalColors.cardBackgroundColor,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        gap: 10,
      },
      inputGroup: {
        marginBottom: 10,
      },
      label: {
        color: GlobalColors.textColor,
        fontSize: 16,
        fontWeight: 'bold',
      },
      input: {
        height: 40,
        borderColor: GlobalColors.inputBorderColor,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        color: GlobalColors.textColor,
        marginTop: 5,
      },
      button:{
        backgroundColor: GlobalColors.buttonColor,
        padding: 10,
        borderRadius: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText:{

        color: GlobalColors.textColor,
        fontSize: 16,
      },
}