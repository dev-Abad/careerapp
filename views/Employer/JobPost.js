import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useJobContext } from '../../JobContext';

const JobPost = () => {
  const { addJobPost } = useJobContext();

  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobRequirements, setJobRequirements] = useState('');

  const handlePostJob = () => {
    if (!jobTitle || !jobDescription || !jobRequirements) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }

    const newJob = {
      title: jobTitle,
      description: jobDescription,
      requirements: jobRequirements,
    };

    addJobPost(newJob);

    setJobTitle('');
    setJobDescription('');
    setJobRequirements('');

    Alert.alert('Success', 'Job post has been created');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Job Post</Text>

      <TextInput
        style={styles.input}
        placeholder="Job Title"
        value={jobTitle}
        onChangeText={setJobTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Job Description"
        value={jobDescription}
        onChangeText={setJobDescription}
        multiline
        numberOfLines={4}
      />
      <TextInput
        style={styles.input}
        placeholder="Job Requirements"
        value={jobRequirements}
        onChangeText={setJobRequirements}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.button} onPress={handlePostJob}>
        <Text style={styles.buttonText}>Post Job</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#0066cc',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default JobPost;
