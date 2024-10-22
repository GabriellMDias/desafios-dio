import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    profilePicture: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderColor: 'black',
        borderWidth: 2
    },
    nameText: {
        fontWeight:'bold',
        fontSize: 25
    },
    button: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
    }
})