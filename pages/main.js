import 'react-native-gesture-handler';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera'
import { shareAsync } from 'expo-sharing'
import *  as MediaLibrary from 'expo-media-library'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { React, useEffect, useRef, useState } from 'react'

import CameraWidow from './camera';
import ImageGallery from './imageGallery';

const Drawer = createDrawerNavigator();

function MyDrawer () {
    return (

        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Camera" component={CameraWidow} />
                <Drawer.Screen name="Image Gallery" component={ImageGallery} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default function Main() {

    
    // let cameraRef = useRef

    // const [cameraPermission, setCameraPermission] = useState()
    // const [mediaPermission, setMediaPermission] = useState()

    // useEffect(() => {
    //     (async () => {

    //         const camerahasPermission = await Camera.requestCameraPermissionsAsync()
    //         const hasmediaPermission = await MediaLibrary.requestPermissionsAsync()
    //         setCameraPermission(camerahasPermission.status === 'granted')
    //         setMediaPermission(hasmediaPermission.status === 'granted')

    //     })()
    // }, [])

    // if (cameraPermission === undefined) {
    //     return <Text>Requesting Permissions... Loading... ('o' )</Text>

    // } else if (!cameraPermission) {
    //     return <Text>Permissions have been denied. Please grant permissions in order to use camera.</Text>

    // }


    return (
        <View style={styles.Container}>

            <View style={styles.TopContainer}>

                {/* <TouchableOpacity onPress={() => { MyDrawer() }} style={{ alignItems: "flex-start", alignSelf: 'flex-start', paddingLeft: 20 }} >
                    <Entypo name="menu" size={24} color="#7b9acc" />
                </TouchableOpacity> */}

                <View style={styles.TopInnerContainer}>
                    <Text style={{ fontSize: 20, color: "gray" }}>Image Gallery App</Text>
                    <Ionicons name="ios-camera" size={200} color="gray" />
                </View>

            </View>

            <View style={styles.BottomContainer}>

                <View style={styles.actionSignButton}>

                    <TouchableOpacity style={styles.actionButton} >
                        <Text style={{ color: 'white' }} >
                            Take Picture</Text>
                    </TouchableOpacity >

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingvertical: 80,
        //   backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    TopContainer: {
        flex: 1,
        height: '60%',
        top: 45,
        // backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    TopInnerContainer: {
        flex: 1,
        top: 60,
        // backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    BottomContainer: {
        flex: 1,
        //   backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // bottom: 30,
    },
    actionButton: {
        // flex: 1,
        backgroundColor: '#7b9acc',
        borderRadius: 20,
        height: 45,
        width: 300,
        paddingvertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        // TextColor:'white'
    },
});