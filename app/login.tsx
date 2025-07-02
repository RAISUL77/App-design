
export const options = {
  headerTitle: 'Login',
  headerTitleAlign: 'center',
};
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (email && password) {
      router.replace('/(tabs)/Home');
    } else {
      Alert.alert('Error', 'Please enter both email and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#A0AEC0"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#A0AEC0"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
       <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={styles.registerText}>
       Don't have an account? <Text style={styles.registerLink}>Register</Text>
      </Text>
     </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181A20',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 36,
    letterSpacing: 1.2,
    alignSelf: 'center',
    textAlign: 'center',
    paddingHorizontal: 0,
  },
  input: {
    width: 280,
    height: 48,
    backgroundColor: '#23263A',
    borderRadius: 10,
    paddingHorizontal: 16,
    color: '#fff',
    fontSize: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#31344B',
  },
  button: {
    width: 280,
    backgroundColor: '#3A86FF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#3A86FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1.1,
  },
  registerText: {
  color: '#A0AEC0',
  marginTop: 20,
},
registerLink: {
  color: '#3A86FF',
  fontWeight: 'bold',
},
});
