import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import Main from './pages/main';
import CameraWidow from './pages/camera';
import ImageGallery from './pages/imageGallery';
import ShowImage from './pages/showImage';
// ShowImage


const Drawer = createDrawerNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(28, 28, 30)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(242, 242, 242)',
    text: 'rgb(28, 28, 30)',
    // border: 'rgb(199, 199, 204)',
    notification: 'blue',
  },
};


export default function App() {
  return (
    

      <NavigationContainer theme={MyTheme}>

        <Drawer.Navigator screenOptions={{  }}>

          <Drawer.Screen name="Home" component={Main} />
          <Drawer.Screen name="Camera" component={CameraWidow} options={{ headerShown:false }} />
          <Drawer.Screen name="Image Gallery" component={ImageGallery}  options={{title:'Gallery'}} />
          <Drawer.Screen name="ShowImage" component={ShowImage} options={{ headerShown:false }}  />

        </Drawer.Navigator>

      </NavigationContainer>

      // {/* <Main/> */}
      // {/* <CameraWidow/> */}
      // {/* <Text>Open up App.js to start working on your app!</Text> */}
      // {/* <StatusBar style="auto" /> */}
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FCF6F5',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
