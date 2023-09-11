import { ScrollView, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Image } from 'react-native';
import * as React from 'react';
import * as SQLite from 'expo-sqlite';
import { useNavigation } from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import images from '../src/Images'
// import Images from '../src/images';
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import frog from '../images/frog.jpg'

const Images = [
    { uri: image1 },
    { uri: image2 },
    { uri: image3 },
    { uri: image4 },
    { uri: image4 },
    { uri: image4 },
    { uri: image4 },
    { uri: frog },
    // {uri: image5},
]

const Stack = createNativeStackNavigator();

let deviceHeight = Dimensions.get('window').height
let deviceWidth = Dimensions.get('window').width


// const database = SQLite.openDatabase({
//     name: 'myImageDatabase',
//     location: "default"
// });

const database = SQLite.openDatabase('myImageDatabase.db');



export default function ImageGallery({ navigation }) {

    // const navigation = useNavigation();

    const [imageData, setImageData] = React.useState(null);

    // get images from sqlite
    React.useEffect(() => {

        // database.transaction((tx) => {
        //     tx.executeSql(

        //         'SELECT * FROM imageGallery ORDER BY id DESC',
        //         null,
        //         (tx, results) => {
        //             // Step 3: Process the image data
        //             if (results.rows.length > 0) {
        //                 const imageData = results.rows.item(0).ImageGallery;
        //                 setImageData(imageData);

        //             }
        //         },
        //         (error) => {
        //             console.log('Error retrieving image data:', error);
        //         }
        //     );
        // });
        // console.log("line77 number of imagess", imageData);

        database.transaction((tx) => {

            tx.executeSql('SELECT * FROM imageGallery ORDER BY id DESC', null,
                (txObj, results) => {

                    console.log('res', results.rows._array);
                    setImageData(results.rows._array)
                },
                (txObj, error) => {
                    console.log(error);
                },

            )
        })

    }, [])

    //delete function

   


    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', width: 350 }}>

                {
                    imageData && imageData.map((image, index) => {
                        return (

                            <TouchableOpacity key={index} onPress={() => navigation.navigate('ShowImage', { value: image })} style={{ width: '47%', margin: 5 }}  >

                                <Image source={{ uri: image.image }}
                                    style={{ height: deviceHeight / 3, width: '100%', borderRadius: 2, borderWidth: 0.2, borderColor: 'rgba(0,0,0,0.4)' }} />

                                {/*uri: imageData <Text>{image.uri}</Text> */}
                            </TouchableOpacity>

                        )
                    })

                }


            </View>
        </ScrollView>
    )
}



