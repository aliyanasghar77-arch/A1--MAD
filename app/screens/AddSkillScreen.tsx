import React, { useState, useContext } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform 
} from 'react-native';
import { COLORS } from '../constants/Colors';
import { SkillContext } from '../context/SkillContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type AddSkillScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AddSkill'
>;

const AddSkillScreen = () => {
  const navigation = useNavigation<AddSkillScreenNavigationProp>();
  const { addSkill } = useContext(SkillContext);

  const [skillName, setSkillName] = useState('');
  const [ownerName, setOwnerName] = useState('');

  const handleAddSkill = () => {
    if (!skillName || !ownerName) return;

    addSkill({
      id: Date.now().toString(),
      name: skillName,
      owner: ownerName,
    });

    setSkillName('');
    setOwnerName('');
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.title}>Add a New Skill</Text>

      <TextInput
        placeholder="Skill Name"
        style={styles.input}
        value={skillName}
        onChangeText={setSkillName}
      />
      <TextInput
        placeholder="Your Name"
        style={styles.input}
        value={ownerName}
        onChangeText={setOwnerName}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddSkill}>
        <Text style={styles.buttonText}>Add Skill</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default AddSkillScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    backgroundColor: COLORS.white,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
