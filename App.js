import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './pages/main';
import CameraWidow from './pages/camera';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Main/> */}
      <CameraWidow/>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF6F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
