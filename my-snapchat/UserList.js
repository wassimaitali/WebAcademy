 import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import axios from 'axios';

export default function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('https://mysnapchat.epidoc.eu/user', {
      headers: {
        Authorization: 'Bearer 646b2c96319268ba1a22c70e'
      },
    })  
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Liste des utilisateurs :</Text>
      {users.map(user => (
        <Text key={user.id}>{user.email}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});