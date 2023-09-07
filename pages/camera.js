
import { View, Text, StyleSheet, Pressable, TouchableOpacity, SafeAreaView, Image, Button } from 'react-native'
import { Camera } from 'expo-camera'
import { shareAsync } from 'expo-sharing'
import *  as MediaLibrary from 'expo-media-library'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { React, useEffect, useRef, useState } from 'react'

import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CameraWidow() {

    let cameraRef = useRef();

    const [cameraPermission, setCameraPermission] = useState()
    const [mediaPermission, setMediaPermission] = useState()
    const [photo, setPhoto] = useState()


    //camera permissions
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

    //taking picture 

    let takePicture = async () => {
        let options = {
            quality: 1,
            base64: true,
            exif: false,
        }

        let newPicture = await cameraRef.current.takePictureAsync(options);

        setPhoto(newPicture);
    }

    if (photo) {

        let sharePicture = () => {
            shareAsync(photo.uri).then(() => {
                setPhoto(undefined)
            })

        }

        let savePicture = () => {

            MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
                setPhoto(undefined)
            })

        }

        return (
            <SafeAreaView style={styles.container}>

                <Image style={styles.preview} padding={10} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />

                <View style={styles.lowContainer} >

                   
                    <View style={styles.buttonContainer} >
                        <Entypo name="share" size={40} color="#fff" onPress={sharePicture} /></View>

                    <View style={styles.buttonContainer} >
                        {mediaPermission ? <MaterialIcons name="save-alt" size={40} color="#fff" onPress={savePicture} /> : undefined}</View>

                    <View style={styles.buttonContainer} >
                        <MaterialCommunityIcons name="camera-retake-outline" size={40} color="#fff" onPress={() => { setPhoto(undefined) }} /></View>
                </View>
            </SafeAreaView>
        )
    }


    return (
        <Camera style={styles.container} ref={cameraRef} >
            <View style={styles.TopContainer} >

                <TouchableOpacity>
                    {/* <Feather name="circle" size={60} color="white" /> */}
                </TouchableOpacity>
            </View>

            <View style={styles.bottomContainer} >

                <TouchableOpacity onPress={takePicture} >
                    <Feather name="circle" size={60} color="white" />
                </TouchableOpacity>

                {/* <TouchableOpacity>
                   <Entypo name="flash" size={60} color="black" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Feather name="circle" size={60} color="white" />
                </TouchableOpacity> */}

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
        width: '100%',
        alignSelf: "stretch",
        // flexDirection: 'row'
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
    bottomContainer: {
        flex: 1,
        top: 80,
        width: '100%',
        height: 100,
        // backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',

    },
    preview: {
        alignSelf: "stretch",
        flex: 1,
        width: '100%',
        padding: 10,

    },
    buttonContainer: {
        flex: 1,
        backgroundColor:"#7b9acc",
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius:0,
        // top:150,
        // height: 45,
        // paddingLeft: 0,

    },
    lowContainer: {
        flex: 0.1,
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        // top:150,
        // height: 45,
        // padding:10 ,

    },
});
