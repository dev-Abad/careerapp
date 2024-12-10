import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const EmployerSignup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('https://example.com/api/employers/signup', { email, password });

      if (response.data.success) {
        Alert.alert('Account created', 'Your account has been created successfully!');
        navigation.navigate('EmployerHome');
      } else {
        Alert.alert('Error', 'Signup failed. Please try again.');
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
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  label: { fontSize: 18, marginBottom: 8 },
  input: { borderWidth: 1, padding: 8, marginBottom: 16, borderRadius: 4 },
});

export default EmployerSignup;
