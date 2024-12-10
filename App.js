import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StudentStack from './views/Student/StudentStack';
import EmployerStack from './views/Employer/EmployerStack';
import ChoosePath from './views/ChoosePath';
import { JobProvider } from './JobContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <JobProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ChoosePath">
          <Stack.Screen name="ChoosePath" component={ChoosePath} options={{ headerShown: false }} />
          <Stack.Screen name="StudentStack" component={StudentStack} options={({ }) => ({
            header: () => (
              <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Career App</Text>
              </View>
            ),
          })}/>
          <Stack.Screen name="EmployerStack" component={EmployerStack} options={({ }) => ({
            header: () => (
              <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Career App</Text>
              </View>
            ),
          })}/>
        </Stack.Navigator>
      </NavigationContainer>
    </JobProvider>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1E90FF',
    paddingHorizontal: 10,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  rightButton: {
    padding: 5,
  },
});