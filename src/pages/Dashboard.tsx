import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReminderForm from "../components/ReminderForm";
import CalendarMoodView from "../components/CalenderMoodView";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type MoodEntry = {
  date: string; // ISO format
  mood: string;
};

const Dashboard: React.FC = () => {
  const [moodStats, setMoodStats] = useState<{ mood: string; count: number }[]>(
    []
  );
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("moodHistory");
    const moodEntries: MoodEntry[] = stored ? JSON.parse(stored) : [];

    const frequencyMap: Record<string, number> = {};

    moodEntries.forEach((entry) => {
      frequencyMap[entry.mood] = (frequencyMap[entry.mood] || 0) + 1;
    });

    const stats = Object.entries(frequencyMap).map(([mood, count]) => ({
      mood,
      count,
    }));

    setMoodStats(stats);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Background image */}
      <img
        src="/Bg.png"
        alt="backgroundimage"
        className="fixed inset-0 w-full h-full object-cover z-0"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-2 py-4">
        <div className="dashboard-page flex flex-col p-4 gap-4 w-full max-w-6xl mx-auto">
          <p className="border-2 bg-amber-100 rounded-2xl text-xl md:text-2xl p-4 md:p-8 font-bold text-center">
            📊 Mood Dashboard
          </p>

          {/* Reminder Section */}
          <section className="dashboard-section border-2 border-black rounded-2xl p-4 bg-white/80 w-full">
            <ReminderForm />
          </section>

          {/* Responsive layout for calendar and chart */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
            {/* Calendar View */}
            <section className="dashboard-section border-2 border-black rounded-2xl p-4 bg-white/80 flex-1 mb-4 md:mb-0">
              <CalendarMoodView />
            </section>

            {/* Mood Chart */}
            <section className="dashboard-section border-2 border-black rounded-2xl p-4 bg-white/80 flex-1">
              <p className="border-2 rounded-2xl p-4 w-full text-lg md:text-xl font-semibold text-center mb-4">
                Mood Frequency Chart
              </p>
              <div className="p-0 md:p-2 w-full h-64 flex justify-center items-center">
                {moodStats.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={moodStats}>
                      <XAxis dataKey="mood" />
                      <YAxis allowDecimals={false} />
                      <Tooltip />
                      <Bar dataKey="count" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <p>No mood data to display yet.</p>
                )}
              </div>
            </section>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 w-full max-w-md mx-auto gap-4">
            <button
              onClick={() => router.back()}
              className="flex-1 border-2 border-black rounded-2xl p-2 md:p-4 bg-gray-200 hover:bg-gray-300 font-semibold"
            >
              ⬅ Back
            </button>
            <button
              onClick={() => router.push("/")}
              className="flex-1 border-2 border-black rounded-2xl p-2 md:p-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold"
            >
              Next ➡
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
