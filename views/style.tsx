import { StyleSheet } from "react-native";

enum SizeText{
    small = 14,
    medium = 16,
    large = 18,
    xlarge = 22
}

enum ColorPalette {
    blue = "#7393B3",
    darkBlue = "#4682B4",
    black = "#000000",
    gray = "#808080",
    darkGray = "#A9A9A9",
    green = "#478778",
    darkGreen = "#355E3B",
    white = "#E2DFD2",
}

const styles = StyleSheet.create({
    titleText: {
        color: ColorPalette.darkGray,
        fontSize: SizeText.large,
    },
    subTitleText: {
        fontSize: SizeText.medium,
        color: ColorPalette.darkBlue,
        textAlign : "center",
        textAlignVertical: "center"
    }
});

export {styles, SizeText, ColorPalette};

export default styles;