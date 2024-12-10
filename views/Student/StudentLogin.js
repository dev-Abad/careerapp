import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const StudentLogin = ({ navigation }) => {
  const [studentID, setStudentID] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/students'); //paltan ng IP ng iyong device if ever na ibang laptop gagamitin
      const validIDs = response.data;
      //logic nung validation
      if (validIDs.includes(studentID)) {
        navigation.navigate('StudentHome');
      } else {
        Alert.alert('Invalid credentials', 'Please check your Student ID.');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Student ID</Text>
      <TextInput
        style={styles.input}
        value={studentID}
        onChangeText={setStudentID}
        placeholder="Enter Student ID"
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  label: { fontSize: 18, marginBottom: 8 },
  input: { borderWidth: 1, padding: 8, marginBottom: 16, borderRadius: 4 },
});

export default StudentLogin;
