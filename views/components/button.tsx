import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { rectAroundButtonStyles as rectABtS } from "./buttonStyles";

const ARectButton = ({ onPress, title } : {onPress: any, title: any})  => (
    <TouchableOpacity 
        activeOpacity={0.8}
        onPress={onPress}
        style={rectABtS.container}
    >
        <Text style={rectABtS.text}>{title}</Text>
    </TouchableOpacity>
)

export {ARectButton};