import Slider from '@react-native-community/slider'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function App() {
    return(
        <View style={styles.container}>
            <Image
                source={require("../../src/assets/logo.png")}
                style={styles.logo}
            />
            <Text style={styles.title}>Enter 20 characters</Text>

            <View style={styles.area}>
                <Slider
                    style={{ height: 50 }}
                    minimumValue={6}
                    maximumValue={20}
                    maximumTrackTintColor="#FF0000"
                    minimumTrackTintColor="#000"
                    thumbTintColor='grey'
                />
            </View>
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
    },
    area:{
        marginTop: 14,
        marginBottom: 14,
        width: "80%",
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 8,
    }
})