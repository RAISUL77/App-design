
import { Link, Stack, Tabs } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Page Not Found' }} />
      <View style={nf.container}>
        <Text style={dec.text}>WELCOME TO BLOOD DONATION APP</Text>
        <Link href="/login" style={Style.button}>Log In The Account</Link>
      </View>
    </>
  );
}
const Style =StyleSheet.create({
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#007AFF',
  },
})
const nf = StyleSheet.create({
    container:
    {
        
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor:"#800000",
    }
})
const dec=StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 16,
    }
})
