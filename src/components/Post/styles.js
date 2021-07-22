import {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: Dimensions.get('window').height -47,
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1,
    },
    uiContainer: {
        height: '100%',
        justifyContent: 'flex-end',
        zIndex: 2,
    }
});

export default styles;
