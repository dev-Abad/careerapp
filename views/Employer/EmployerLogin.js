// EmployerLogin.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const EmployerLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://example.com/api/employers/login', { email, password });

      if (response.data.success) {
        navigation.navigate('EmployerHome');
      } else {
        Alert.alert('Invalid credentials', 'Please check your email and password.');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Enter email" />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Enter password" secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={() => navigation.navigate('EmployerSignup')} />
    </View>
  );
};

// Similar implementation for EmployerSignup.js but with sign-up functionality.

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  label: { fontSize: 18, marginBottom: 8 },
  input: { borderWidth: 1, padding: 8, marginBottom: 16, borderRadius: 4 },
});

export default EmployerLogin;
