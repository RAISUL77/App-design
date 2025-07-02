import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const bloodRequests = [
  {
    id: '1',
    name: 'John Doe',
    location: 'City Hospital, Delhi',
    bloodGroup: 'A+',
    urgency: 'High',
    phone: '+91 98765 43210',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    location: 'Apollo Hospital, Mumbai',
    bloodGroup: 'O−',
    urgency: 'Medium',
    phone: '+91 87654 32109',
  },
  {
    id: '3',
    name: 'Rahul Kumar',
    location: 'Fortis, Bangalore',
    bloodGroup: 'B+',
    urgency: 'Critical',
    phone: '+91 76543 21098',
  },
];

export default function Blood() {
  const handleCall = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blood Required</Text>
      <FlatList
        data={bloodRequests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.detail}>Location: {item.location}</Text>
            <Text style={styles.detail}>Blood Group: <Text style={styles.blood}>{item.bloodGroup}</Text></Text>
            <Text style={styles.detail}>Urgency: <Text style={styles.urgency}>{item.urgency}</Text></Text>
            <Text style={styles.detail}>Contact: {item.phone}</Text>
            
            <TouchableOpacity 
              style={styles.callButton} 
              onPress={() => handleCall(item.phone)}
            >
              <Text style={styles.callButtonText}>Call Now</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A20',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 28,
    textAlign: 'center',
    color: '#fff',
    letterSpacing: 1.2,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  card: {
    backgroundColor: '#23263A',
    padding: 22,
    borderRadius: 16,
    marginBottom: 18,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    borderLeftWidth: 6,
    borderLeftColor: '#d10000',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
    letterSpacing: 0.5,
  },
  detail: {
    fontSize: 15,
    marginBottom: 4,
    color: '#A0AEC0',
  },
  blood: {
    color: '#d10000',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    borderRadius: 6,
    overflow: 'hidden',
  },
  urgency: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 8,
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: '#ff8c00',
    alignSelf: 'flex-start',
  },
  callButton: {
    backgroundColor: '#d10000',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  callButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});