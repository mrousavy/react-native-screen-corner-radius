import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScreenCornerRadius } from 'react-native-screen-corner-radius';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Screen Corner Radius: {ScreenCornerRadius}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
