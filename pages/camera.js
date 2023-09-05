
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera'
import { shareAsync } from 'expo-sharing'
import *  as MediaLibrary from 'expo-media-library'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { React, useEffect, useRef, useState } from 'react'

import { Feather } from '@expo/vector-icons';

export default function CameraWidow() {

    let cameraRef = useRef();

    const [cameraPermission, setCameraPermission] = useState()
    const [mediaPermission, setMediaPermission] = useState()

    useEffect(() => {
        (async () => {

            const hascameraPermission = await Camera.requestCameraPermissionsAsync()
            const hasmediaPermission = await MediaLibrary.requestPermissionsAsync()
            setCameraPermission(hascameraPermission.status === 'granted')
            setMediaPermission(hasmediaPermission.status === 'granted')

        })()
    }, [])

    if (cameraPermission === undefined) {
        return <Text>Requesting Permissions... Loading... ('o' )</Text>

    } else if (!cameraPermission) {
        return <Text>Permissions have been denied. Please grant permissions in order to use camera.</Text>

    }


    return (
        <Camera style={styles.container} ref={cameraRef} >
            <View style={styles.TopContainer} >

                <TouchableOpacity>
                    {/* <Feather name="circle" size={60} color="white" /> */}
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer} >

                <TouchableOpacity>
                    <Feather name="circle" size={60} color="white" />
                </TouchableOpacity>
            </View>
        </Camera>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCF6F5',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%'
    },

    TopContainer: {
        flex: 1,
        // height: '60%',
        top: 45,
        // backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    buttonContainer: {
        flex: 1,
        // backgroundColor: 'purple',
        height:100,
        alignItems: 'center',
        justifyContent: 'center',
        top: 80,
        width: '100%'
    },
});
