import { StyleSheet } from "react-native";
import { ColorPalette, SizeText } from "../style";

const rectAroundButtonStyles = StyleSheet.create({
    container: {
        elevation: 8,
        backgroundColor: ColorPalette.green,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        alignSelf: 'stretch',
        margin: 25,
        alignItems: 'center'
    },
    text: {
        fontSize: SizeText.large,
        color: ColorPalette.black,
        fontWeight: "bold",
        alignSelf: "center",
    }
});

export {rectAroundButtonStyles};