import React from 'react';
import { View, Text, Button } from 'react-native';

export default function CreatePostScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Create Post Screen</Text>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
