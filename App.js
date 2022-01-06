import { StyleSheet, Text, View } from 'react-native';
import Main from './src/pages/Main';
import Looping from './src/pages/Looping';

export default function App() {
  return (
    <View style={styles.container}>
      {
        //<Main />
      }
      <Looping />
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
