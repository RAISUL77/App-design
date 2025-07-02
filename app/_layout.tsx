import { Stack } from 'expo-router';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <Stack initialRouteName="login">
      <Stack.Screen 
        name="login" 
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="register" 
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="(tabs)" 
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="+not-found" 
        options={{
          headerShown: false,
        }} 
      />
    </Stack>
  );
}