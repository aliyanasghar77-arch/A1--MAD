import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../constants/Colors';

const user = {
  name: 'Aliyan Asghar',
  skills: ['React Native', 'Guitar', 'Photography'],
  bio: 'A passionate developer and musician looking to share my skills with the world.',
};

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>

      <Text style={styles.sectionTitle}>Skills</Text>
      <View style={styles.skillsContainer}>
        {user.skills.map((skill, index) => (
          <View key={index} style={styles.skillBadge}>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: 16 },
  name: { fontSize: 24, fontWeight: '700', color: COLORS.primary, marginBottom: 8 },
  bio: { fontSize: 14, color: COLORS.gray, marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 8 },
  skillsContainer: { flexDirection: 'row', flexWrap: 'wrap' },
  skillBadge: { backgroundColor: COLORS.primary, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, marginRight: 8, marginBottom: 8 },
  skillText: { color: COLORS.white, fontSize: 12, fontWeight: '600' },
});
