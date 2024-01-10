
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import InscriptionScreen from './inscription';
import ConnexionScreen from './connexion';
// import { NavigationContainer } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';
import Inscription from './inscription'
import Connexion from './connexion'
import Accueil from './Accueil'
import UserList from './UserList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Inscription" component={Inscription} />
        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="Accueil" component={Accueil} />
        <Stack.Screen name="UserList" component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  const handleLogin = () => {
    setShowInscriptionForm(false);
    setShowConnexionForm(true);
  };

  const handleSignup = () => {
    setShowConnexionForm(false);
    setShowInscriptionForm(true);
  };

  const handleCancel = () => {
    setShowInscriptionForm(false);
    setShowConnexionForm(false);
  };

  const [showInscriptionForm, setShowInscriptionForm] = useState(false);
  const [showConnexionForm, setShowConnexionForm] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: 'rgba(255, 252, 0, 1)' }]}>
      <View style={styles.content}>
        <Image source={require('./assets/Snapchat-logo.png')} style={styles.image} />
        {showInscriptionForm ? (
          <InscriptionScreen handleCancel={handleCancel} />
        ) : showConnexionForm ? (
          <ConnexionScreen handleCancel={handleCancel} />
        ) : (
          <View style={styles.buttonsContainer}>
            <TouchableHighlight
              style={[styles.button, { backgroundColor: 'rgba(231, 38, 83, 1)' }]}
              onPress={handleLogin}
              underlayColor="rgba(231, 38, 83, 0.8)"
            >
              <Text style={styles.buttonText}>Connexion</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button, { backgroundColor: 'rgba(60, 178, 226, 1)' }]}
              onPress={handleSignup}
              underlayColor="rgba(60, 178, 226, 0.8)"
            >
              <Text style={styles.buttonText}>Inscription</Text>
            </TouchableHighlight>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  buttonsContainer: {
    marginTop: 20,
  },
  button: {
    width: 200,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
