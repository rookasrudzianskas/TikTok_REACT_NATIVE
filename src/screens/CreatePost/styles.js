import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
        justifyContent: "space-between",
        // backgroundColor: "#000",
    },
    textInput: {
        width: "100%",
        height: 150,
        margin: 10,
        paddingHorizontal: 10,
        backgroundColor: "white",
    },
    button: {
        backgroundColor: "#ff4747",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderRadius: 10,
        height: 60,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    }

})


export default styles;
