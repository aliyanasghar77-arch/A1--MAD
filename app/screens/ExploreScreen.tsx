import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/Colors';
import { SkillContext } from '../context/SkillContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type ExploreScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Explore'
>;

const ExploreScreen = () => {
  const navigation = useNavigation<ExploreScreenNavigationProp>();
  const { skills } = useContext(SkillContext);

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.skillName}>{item.name}</Text>
      <Text style={styles.ownerName}>by {item.owner}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddSkill')}
      >
        <Text style={styles.addButtonText}>+ Add Skill</Text>
      </TouchableOpacity>

      <FlatList
        data={skills}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 16,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    marginHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  addButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: COLORS.white,
    padding: 16,
    marginRight: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    width: 140,
    alignItems: 'center',
  },
  skillName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    textAlign: 'center',
  },
  ownerName: {
    fontSize: 12,
    color: COLORS.gray,
  },
});
