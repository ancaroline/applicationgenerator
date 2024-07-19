import { userState, useState } from 'react'
import Slider from '@react-native-community/slider'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function App() {
    const [size, setsize] = useState(10)


    return(
        <View style={styles.container}>
            <Image
                source={require("../../src/assets/logo.png")}
                style={styles.logo}
            />
            <Text style={styles.title}>{size} characters</Text>

            <View style={styles.area}>
                <Slider
                    style={{ height: 50 }}
                    minimumValue={6}
                    maximumValue={20}
                    maximumTrackTintColor="#FF0000"
                    minimumTrackTintColor="#000"
                    thumbTintColor='grey'
                    value={size}
                    onValueChange={ (value) => setsize(value.toFixed(0)) }
                />
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Generate Password</Text>
            </TouchableOpacity>
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
    },
    button:{
        backgroundColor: 'grey',
        width: "80%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginBottom: 18,
    },
    buttonText:{
        color: "#FFF",
        fontSize: 16,
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',

    }
})