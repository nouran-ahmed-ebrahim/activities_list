import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import Home from './src/componanets/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      {/* <Activity ActivityName="hallo"currentDate={new Date().toLocaleString()}></Activity>      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
