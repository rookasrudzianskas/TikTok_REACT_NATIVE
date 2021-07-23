import {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: Dimensions.get('window').height -80,
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    videoPlayButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 100,
    },
    uiContainer: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    rightContainer: {
        alignSelf: 'flex-end',
        height: 300,
        justifyContent: "space-between",
        alignItems: 'center',
        marginRight: 5,
    },
    bottomContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    handle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 10,
    },
    description: {
        color: "#fff",
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 10,
    },
    songRow: {
        flexDirection: "row",
        paddingBottom: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    songName: {
        color: "#fff",
        fontSize: 16,
        marginLeft: 5,
    },
    songImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 5,
      borderColor: "#4c4c4c",
    },
    // right container goes in here
    profilePictureContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "white",
    },
    iconContainer: {
        alignItems: 'center',
    },
    statsLabel: {
        color: "#fff",
        fontSize: 16,
        fontWeight: '600',
        marginTop: 5,
    }
});

export default styles;
