
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subtitle}>Details for User</Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Name:</Text>
          <View style={styles.infoValueColumn}>
            <Text style={styles.infoValue}>Mr Nadim</Text>
            <Text style={styles.infoDescription}>A+ blood group, active donor</Text>
          </View>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Email:</Text>
          <View style={styles.infoValueColumn}>
            <Text style={styles.infoValue}>Nadim@email.com</Text>
            <Text style={styles.infoDescription}>01712398765</Text>
          </View>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Last Donation:</Text>
          <Text style={styles.infoValue}>2025-06-15</Text>
        </View>
      </View>
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
  card: {
    backgroundColor: '#23263A',
    borderRadius: 18,
    padding: 32,
    width: 320,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    letterSpacing: 1.1,
  },
  subtitle: {
    fontSize: 18,
    color: '#A0AEC0',
    marginBottom: 24,
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 14,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#31344B',
  },
  infoValueColumn: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  infoLabel: {
    color: '#A0AEC0',
    fontSize: 16,
    fontWeight: '600',
  },
  infoValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  infoDescription: {
    color: '#A0AEC0',
    fontSize: 13,
    fontStyle: 'italic',
    marginTop: 2,
    textAlign: 'right',
  },
});
