import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Alert, Switch } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function ConnexionScreen({ handleCancel }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigation = useNavigation();

  const handleLogin = async () => {
    const loginData = {
      email: username,
      password: password
    };

    try {
      await axios.put('https://mysnapchat.epidoc.eu/user', loginData);
      Alert.alert('Connexion réussie', 'Vous êtes maintenant connecté');
      setUsername('');
      setPassword('');
      navigation.navigate('Accueil'); // Remplacez 'home.js' par le nom de votre écran principal
    } catch (error) {
      Alert.alert('Erreur', 'Une erreur s\'est produite lors de la connexion');
      console.error(error);
    }
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="ADRESSE E-MAIL"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="MOT DE PASSE"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Enregistrer mes informations de connexion</Text>
          <Switch
            value={rememberMe}
            onValueChange={handleRememberMeChange}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Connexion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCancel}>
            <Text style={styles.buttonText}>Annuler</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    width: 395,
    height: 960,
    // width: '150%',
    padding: 20,
    paddingBottom: 200,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
    // marginTop: 150,
    // paddingHorizontal: 10,
    paddingLeft: -70,
  },
  switchContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    marginLeft: 8,
  },
  buttonContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    
    // marginHorizontal: 30,
  },
  button: {
    backgroundColor: '#a3a8af',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
});