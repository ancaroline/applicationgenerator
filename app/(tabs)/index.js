import { View, Text, StyleSheet, Image } from 'react-native'

export default function App() {
    return(
        <View style={styles.container}>
            <Image
                source={require("../../src/assets/logo.png")}
                style={styles.logo}
            />
            <Text style={styles.title}>Enter 20 characters</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#F3F3FF",
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo:{
        marginBottom: 20
    }
})