import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50
    },
    profilePicture: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderColor: 'black',
        borderWidth: 2
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
        marginVertical: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginVertical: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20
    }
})