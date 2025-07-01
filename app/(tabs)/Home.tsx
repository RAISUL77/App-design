
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Have to Edit App</Text>
      <View style={styles.buttonContainer}>
        <Link href={"/(tabs)/Profile"} style={styles.button1}>
          Go to Profile screen
        </Link>
        <Link href={"/(tabs)/Blood"} style={styles.button2}>
          Go to Blood screen
        </Link>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#181A20",
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
    letterSpacing: 1.2,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 18,
  },
  button1: {
    width: 220,
    backgroundColor: '#3A86FF',
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#3A86FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  button2: {
    width: 220,
    backgroundColor: '#FF006E',
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    shadowColor: '#FF006E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
});
