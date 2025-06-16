import React, { useEffect, useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
// import "react-calendar/dist/Calendar.css";

type MoodEntry = {
  mood: string;
  intensity: string;
  notes: string;
  timestamp: string; // ISO timestamp
};

const moodToEmoji: Record<string, string> = {
  Happy: "😊",
  Sad: "😢",
  Angry: "😠",
  Neutral: "😐",
  Excited: "😄",
  Tired: "😴",
  Awe: "🤩",
};

const normalizeMood = (mood: string) => {
  const capitalized =
    mood.charAt(0).toUpperCase() + mood.slice(1).toLowerCase();
  return moodToEmoji[capitalized] ? capitalized : null;
};

const CalendarMoodView: React.FC = () => {
  const [value, setValue] = useState<Date>(new Date());
  const [moodData, setMoodData] = useState<Record<string, string>>({});

  useEffect(() => {
    const stored = localStorage.getItem("moodHistory");
    const rawEntries: MoodEntry[] = stored ? JSON.parse(stored) : [];

    const moodMap: Record<string, string> = {};

    rawEntries.forEach((entry) => {
      if (!entry.mood || !entry.timestamp) return;

      const mood = normalizeMood(entry.mood);
      if (!mood) return;

      const date = new Date(entry.timestamp).toISOString().split("T")[0];

      // If multiple moods on the same day, use the latest one (overwrites older one)
      moodMap[date] = mood;
    });

    setMoodData(moodMap);
  }, []);

  const getMoodForDate = (date: Date): string | null => {
    const isoDate = date.toISOString().split("T")[0];
    return moodData[isoDate] || null;
  };

  const handleChange: CalendarProps["onChange"] = (value) => {
    if (value instanceof Date) {
      setValue(value);
    } else if (Array.isArray(value) && value[0] instanceof Date) {
      setValue(value[0]);
    }
  };

  return (
    <div className="calendar-mood-view w-full max-w-md mx-auto gap-4 p-2 md:p-4">
      <p className="border-2 border-black rounded-2xl p-2 md:p-4 bg-blue-300 text-lg md:text-2xl font-bold text-center">
        Your Monthly Mood
      </p>
      <div className="w-full">
        <Calendar
          className="rounded-2xl p-2 md:p-4 mt-4 border-4 border-black w-full"
          onChange={handleChange}
          value={value}
          tileContent={({ date, view }) =>
            view === "month" && getMoodForDate(date) ? (
              <div style={{ fontSize: "1.2em", textAlign: "center" }}>
                {moodToEmoji[getMoodForDate(date)!]}
              </div>
            ) : null
          }
        />
      </div>
    </div>
  );
};

export default CalendarMoodView;
