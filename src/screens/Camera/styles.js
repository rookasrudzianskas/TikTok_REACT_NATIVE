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
    buttonRecord: {
        alignSelf: 'center',
        marginVertical: 10,
        width: 50,
        height: 50,
        backgroundColor: "#ff4343",
        borderRadius: 25,
    },
    buttonStop: {
        alignSelf: 'center',
        marginVertical: 10,
        width: 35,
        height: 35,
        backgroundColor: "#ff4343",
        borderRadius: 3,
    }

})


export default styles;
