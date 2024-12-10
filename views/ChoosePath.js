import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ChoosePath = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose User</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StudentStack')}>
        <Image source={require('../assets/sicon.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Student</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EmployerStack')}>
        <Image source={require('../assets/eicon.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Employer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Background color
  },
  button: {
    flexDirection: 'row', // Layout the image and text horizontally
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E90FF', // Button background color
    padding: 15,
    marginVertical: 10,
    borderRadius: 10, // Rounded corners
    width: '50%',
  },
  buttonImage: {
    width: 40, // Width of the image
    height: 40, // Height of the image
    marginRight: 10, // Space between image and text
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Text color
  },
});

export default ChoosePath;
