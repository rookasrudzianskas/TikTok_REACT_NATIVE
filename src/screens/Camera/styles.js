import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#000",
        // alignItems: "center",
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    button: {
        alignSelf: 'center',
        marginVertical: 10,
        width: 50,
        height: 50,
        backgroundColor: "white",
        borderRadius: 25,
    }

})


export default styles;
