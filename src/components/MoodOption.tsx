// components/MoodOption.tsx
import React from "react";
import { motion } from "framer-motion";

interface MoodOptionProps {
  imageSrc: string;
  altText: string;
  moodValue: string;
  onSelect: (mood: string) => void;
}

const MoodOption: React.FC<MoodOptionProps> = ({
  imageSrc,
  altText,
  moodValue,
  onSelect,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      style={{ borderRadius: 5, cursor: "pointer" }}
      onClick={() => onSelect(moodValue)}
    >
      <li>
        <img src={imageSrc} alt={altText} />
      </li>
    </motion.div>
  );
};

export default MoodOption;
