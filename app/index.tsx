import { Image } from 'expo-image';
import { router } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {

  const handleLogin = () => {
    router.replace('/homepage');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/fire-background.jpg')}
        style={StyleSheet.absoluteFill}
        contentFit="cover"
      />
      <View style={styles.loginContainer}>
        <Text style={styles.title}>כבאות והצלה - עובדים</Text>
        <TextInput
          style={styles.input}
          placeholder="איימל"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="סיסמה"
          placeholderTextColor="#ccc"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>כניסה</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 40,
    width: '90%',
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 15,
    color: 'white',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ff6600',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  }
});