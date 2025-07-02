import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

// Define types for our form data
type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  bloodGroup: string;
  password: string;
  confirmPassword: string;
};

// Define the possible blood group types
type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export default function Register() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    bloodGroup: '',
    password: '',
    confirmPassword: ''
  });

  const router = useRouter();

  const bloodGroups: BloodGroup[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleRegister = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.bloodGroup || !formData.password) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    // Here you would typically send data to your backend
    Alert.alert('Success', 'Registration successful!');
    router.replace('/login');
  };

  // Add proper type annotations to handleChange parameters
  const handleChange = (name: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Full Name*"
          placeholderTextColor="#A0AEC0"
          value={formData.name}
          onChangeText={(text) => handleChange('name', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email*"
          placeholderTextColor="#A0AEC0"
          value={formData.email}
          onChangeText={(text) => handleChange('email', text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number*"
          placeholderTextColor="#A0AEC0"
          value={formData.phone}
          onChangeText={(text) => handleChange('phone', text)}
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Address"
          placeholderTextColor="#A0AEC0"
          value={formData.address}
          onChangeText={(text) => handleChange('address', text)}
        />

        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Blood Group*</Text>
          <View style={styles.bloodGroupContainer}>
            {bloodGroups.map(group => (
              <TouchableOpacity
                key={group}
                style={[
                  styles.bloodGroupButton,
                  formData.bloodGroup === group && styles.selectedBloodGroup
                ]}
                onPress={() => handleChange('bloodGroup', group)}
              >
                <Text style={styles.bloodGroupText}>{group}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Password*"
          placeholderTextColor="#A0AEC0"
          value={formData.password}
          onChangeText={(text) => handleChange('password', text)}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password*"
          placeholderTextColor="#A0AEC0"
          value={formData.confirmPassword}
          onChangeText={(text) => handleChange('confirmPassword', text)}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace('/login')}>
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.loginLink}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181A20',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    alignSelf: 'center',
  },
  input: {
    width: '100%',
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
  pickerContainer: {
    width: '100%',
    marginBottom: 18,
  },
  pickerLabel: {
    color: '#A0AEC0',
    marginBottom: 8,
    fontSize: 14,
  },
  bloodGroupContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bloodGroupButton: {
    width: '23%',
    padding: 10,
    marginBottom: 8,
    backgroundColor: '#23263A',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#31344B',
  },
  selectedBloodGroup: {
    backgroundColor: '#3A86FF',
    borderColor: '#3A86FF',
  },
  bloodGroupText: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    width: '100%',
    backgroundColor: '#3A86FF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#A0AEC0',
    marginTop: 16,
  },
  loginLink: {
    color: '#3A86FF',
    fontWeight: 'bold',
  },
});