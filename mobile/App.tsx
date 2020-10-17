import React from 'react';

import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { useFonts } from 'expo-font';
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';

import AppRoutes from './src/routes/AppStack';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <ActivityIndicator color="#000" />
      </SafeAreaView>
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#15C3D6" />
      <SafeAreaView style={styles.container}>
        <AppRoutes />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
