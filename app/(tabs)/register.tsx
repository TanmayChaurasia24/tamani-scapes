import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: 'project-id.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
};

const firebaseapp = initializeApp(firebaseConfig);

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const handleAuth = async () => {
    console.log("Button Pressed!"); // Debugging step
  
    const auth = await getAuth(firebaseapp);
    setError(""); // Clear previous errors  
  
    try {
      console.log("Inside function"); // Debugging step
  
      let userCredential;
      if (isLogin) {
        // Login User
        userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in:", userCredential.user.email);
      } else {
        // Register User
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User registered:", userCredential.user.email);
      }
  
      setUserName(userCredential.user.email!);
    } catch (error: any) {
      console.error("Error:", error.message);
      setError(error.message);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? "Login" : "Create an Account"}</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleAuth}>
        <Text style={styles.buttonText}>{isLogin ? "Login" : "Register"}</Text>
      </TouchableOpacity>

      {userName ? <Text style={styles.welcomeText}>Welcome, {userName}!</Text> : null}

      <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
        <Text style={styles.link}>
          {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 12,
    color: "#fff",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#292929",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#6200ea",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 12,
    shadowColor: "#6200ea",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 10,
    fontSize: 14,
  },
  welcomeText: {
    color: "#fff",
    fontSize: 16,
    marginTop: 10,
  },
  link: {
    color: "#bb86fc",
    marginTop: 20,
    fontSize: 14,
  },
});
