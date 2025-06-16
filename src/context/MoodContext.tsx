import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

type MoodContextType = {
  mood: string;
  setMood: Dispatch<SetStateAction<string>>;
  intensity: string;
  setIntensity: Dispatch<SetStateAction<string>>;
  notes: string;
  setNotes: Dispatch<SetStateAction<string>>;
};

const MoodContext = createContext<MoodContextType | undefined>(undefined);

export const useMood = () => {
  const context = useContext(MoodContext);
  if (!context) {
    throw new Error('useMood must be used within a MoodProvider');
  }
  return context;
};

type MoodProviderProps = {
  children: ReactNode;
};

export const MoodProvider: React.FC<MoodProviderProps> = ({ children }) => {
  const [mood, setMood] = useState<string>('');
  const [intensity, setIntensity] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  return (
    <MoodContext.Provider value={{ mood, setMood, intensity, setIntensity, notes, setNotes }}>
      {children}
    </MoodContext.Provider>


  );
};