
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {


  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);


  return (
    <Stack screenOptions={{
      header: (d) => null,
    }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="view/diet" options={{ headerShown: true, title: 'Diet' }} />
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
    </Stack>
  );
}
