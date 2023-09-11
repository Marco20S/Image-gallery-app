import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
// import { e } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite';

import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import ImageGallery from './imageGallery';


const Images = [
    { uri: image1 },
    { uri: image2 },
    { uri: image3 },
    { uri: image4 },
    { uri: image4 },
    { uri: image4 },
    { uri: image4 },
    { uri: image4 },
    // {uri: image5},
]



export default function ShowImage() {

    const database = SQLite.openDatabase('myImageDatabase.db');

    const navigation = useNavigation();
    const route = useRoute();
    const { value } = route.params

    useEffect(() => {
        console.log(value);
    }, [])

    function deleteImage(id) {
        console.log(id);
        database.transaction((tx) => {

            tx.executeSql('DELETE FROM imageGallery WHERE id = ? ', [id],
                (txObj, res) => {
                    // let newData = [...imageData].filter(res => res.id !== id)
                    // setImageData(newData)
                    navigation.navigate('Image Gallery', ImageGallery)
                },
                (txObj, error) => {
                    console.log(error);
                },

            )
        })

    }


    return (

        <View>

            <View style={styles.lowContainer}>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Image Gallery', ImageGallery)} style={{ width: '47%', margin: 5 }}  >
                        <Ionicons style={{ alignContent: 'center', paddingTop: 35, position: 'relative', }} name="chevron-back-circle-outline" size={45} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => deleteImage(value.id)}>
                        <MaterialIcons style={{ alignContent: 'flex-end', paddingTop: 35 }} name="delete-outline" size={45} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <Image source={{ uri: value.image }} style={{ height: "90%", width: '100%' }} />


            {/* <TouchableOpacity key={index} onPress={() => navigation.navigate('ShowImage', { image1 })} style={{ width: '47%', margin: 5 }}  >
                <Image source={{ image1 }}
                    , borderRadius: 2, borderWidth: 0.2, borderColor: 'rgba(0,0,0,0.4)' }} />
                <Text>uri: imageData {image.uri}</Text>
            </TouchableOpacity> */}


        </View>

    )
}


const styles = StyleSheet.create({
    //   container: {
    //     flex: 1,
    //     backgroundColor: '#FCF6F5',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   },
    // });
    buttonContainer: {
        flex: 1,
        // backgroundColor: "#7b9acc",
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius:0,
        // top:150,
        // height: 45,
        // paddingLeft: 0,

    },
    lowContainer: {
        // flex: 0.1,
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        // top:150,
        // height: 45,
        // padding:10 ,

    },

})