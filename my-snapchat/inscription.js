import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


export default function InscriptionScreen({ handleCancel }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const navigation = useNavigation();

  const handleRegistration = () => {
    if (email && password && username) {
      const userData = {
        email: email,
        password: password,
        username: username
      };
  
      axios.post('https://mysnapchat.epidoc.eu/user', userData)
        .then(response => {
          // Vérifier la réponse de l'API et effectuer les actions appropriées
          // Alert.alert('Inscription réussie', 'Vous êtes maintenant inscrit');
          console.log(response.data);
          
          axios.put('https://mysnapchat.epidoc.eu/user', {email: email,
          password: password})
        .then(response => {
          // Vérifier la réponse de l'API et effectuer les actions appropriées
          Alert.alert('Inscription réussie', 'Vous êtes maintenant inscrit');
          console.log(userData);
          navigation.navigate('Accueil');
          setEmail('');
          setPassword('');
          setUsername('');
          
        })

        })
        .catch(error => {
          // Gérer les erreurs de l'API
          Alert.alert('Erreur', 'Une erreur s\'est produite lors de l\'inscription');
          console.error(error);
        });
    } else {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleRegistration}>
            <Text style={styles.buttonText}>S'inscrire</Text>
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
    width: 395,
    height: 1050,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    width: 395,
    height: 960,
    // width: '80%',
    padding: 20,
    paddingBottom: 200,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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