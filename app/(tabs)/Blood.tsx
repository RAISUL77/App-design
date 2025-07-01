import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';



const bloodRequests = [
  {
    id: '1',
    name: 'John Doe',
    location: 'City Hospital, Delhi',
    bloodGroup: 'A+',
    urgency: 'High',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    location: 'Apollo Hospital, Mumbai',
    bloodGroup: 'O−',
    urgency: 'Medium',
  },
  {
    id: '3',
    name: 'Rahul Kumar',
    location: 'Fortis, Bangalore',
    bloodGroup: 'B+',
    urgency: 'Critical',
  },
];

export default function Blood() {
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
});
