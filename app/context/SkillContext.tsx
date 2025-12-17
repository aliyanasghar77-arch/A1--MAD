import React, { createContext, useState, ReactNode } from 'react';

export type Skill = {
  id: string;
  name: string;
  owner: string;
};

type SkillContextType = {
  skills: Skill[];
  addSkill: (skill: Skill) => void;
};

export const SkillContext = createContext<SkillContextType>({
  skills: [],
  addSkill: () => {},
});

type Props = {
  children: ReactNode;
};

export const SkillProvider = ({ children }: Props) => {
  const [skills, setSkills] = useState<Skill[]>([
    { id: '1', name: 'Guitar Lessons', owner: 'Aliyan' },
    { id: '2', name: 'React Native Tutoring', owner: 'Sara' },
  ]);

  const addSkill = (skill: Skill) => {
    setSkills(prev => [...prev, skill]);
  };

  return (
    <SkillContext.Provider value={{ skills, addSkill }}>
      {children}
    </SkillContext.Provider>
  );
};
