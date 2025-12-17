import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Home Screen</Text>
      <Button title="Create Post" onPress={() => navigation.navigate('CreatePost')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
