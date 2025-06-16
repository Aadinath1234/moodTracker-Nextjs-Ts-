import React from 'react';

type Mood = {
  name: string;
  color: string;
};

const baseMoods: Mood[] = [
  { name: 'Happy', color: '#FFD700' },
  { name: 'Sad', color: '#87CEFA' },
  { name: 'Angry', color: '#FF6347' },
  { name: 'Anxious', color: '#FFA07A' },
  { name: 'Excited', color: '#98FB98' },
  { name: 'Tired', color: '#D3D3D3' },
];

type EmotionSelectorProps = {
  onSelect: (moodName: string) => void;
};

const EmotionSelector: React.FC<EmotionSelectorProps> = ({ onSelect }) => {
  return (
    <div>
      {baseMoods.map((mood) => (
        <button
          key={mood.name}
          onClick={() => onSelect(mood.name)}
        >
          {mood.name}
        </button>
      ))}
    </div>
  );
};

export default EmotionSelector;