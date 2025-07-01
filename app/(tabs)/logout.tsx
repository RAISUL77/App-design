import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Logout() {
  const router = useRouter();

  const handleLogout = () => {
    // Here you would clear any auth tokens or user state if needed
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Are you sure you want to logout?</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
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
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    width: 180,
    backgroundColor: '#d10000',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#d10000',
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
});
