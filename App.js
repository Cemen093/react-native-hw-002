import { StyleSheet, View } from 'react-native';
import Shape from './Shape';
import ProfileScreen from './screen/ProfileScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <ProfileScreen/>
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
