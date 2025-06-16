import React from "react";

type MoodIntensityProps = {
  mood: string;
  onSelect: (level: string) => void;
};

const intensityLevels = ["slight", "moderate", "strong"];

const MoodIntensitySelector: React.FC<MoodIntensityProps> = ({
  mood,
  onSelect,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-10">
      <h1 className="text-2xl font-semibold font-[Montserrat]">{`How ${mood.toLowerCase()} are you?`}</h1>
      <div className="flex gap-6">
        {intensityLevels.map((level) => {
          const imagePath = `/intensity/${mood.toLowerCase()}_${level}.png`; // dynamic path
          return (
            <button key={level} onClick={() => onSelect(level)}>
              <img
                src={imagePath}
                alt={`${level} ${mood}`}
                className="w-70 h-70 object-contain hover:scale-110 transition-transform"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MoodIntensitySelector;
