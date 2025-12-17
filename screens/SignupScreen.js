import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SignupScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Signup Screen</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
