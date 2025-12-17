import React from 'react';
import AppNavigator from './app/navigation/AppNavigator';
import { SkillProvider } from './app/context/SkillContext';

export default function App() {
  return (
    <SkillProvider>
      <AppNavigator />
    </SkillProvider>
  );
}
