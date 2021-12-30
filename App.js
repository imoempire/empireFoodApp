import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/Navigator';
import SignIn from './src/Screen/SignIn';
import Welcome from './src/Screen/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navigator/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

