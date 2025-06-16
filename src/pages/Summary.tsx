import React, { useState } from "react";
import { useRouter } from "next/router";
import { useMood } from "../context/MoodContext";
import { submitMoodEntry } from "../pages/api/api";

const Summary: React.FC = () => {
  const { mood, intensity, notes } = useMood();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const entry = {
        mood,
        intensity,
        notes,
        timestamp: new Date().toISOString(),
      };

      await submitMoodEntry(entry);

      // ✅ Save to localStorage for dashboard/calendar
      const allEntries = JSON.parse(
        localStorage.getItem("moodHistory") || "[]"
      );
      allEntries.push(entry);
      localStorage.setItem("moodHistory", JSON.stringify(allEntries));

      setSuccess(true);

      setTimeout(() => {
        router.push("/Dashboard");
      }, 1500);
    } catch {
      setError("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute w-full min-h-screen overflow-x-hidden flex items-center justify-center">
      {/* Background image */}
      <img
        src="/Bg.png"
        alt="backgroundimage"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <div className="w-full max-w-lg bg-white/80 border-2 rounded-2xl p-4 md:p-8 mx-auto shadow-lg flex flex-col items-center">
          <p className="bg-green-200 text-black rounded-2xl p-2 md:p-4 font-bold font-sans text-lg md:text-2xl text-center mb-4">
            ✅ Review Your Entry
          </p>
          <div className="summary-box flex flex-col gap-4 w-full mb-6">
            <p className="bg-blue-200 text-black rounded-2xl p-2 md:p-4 font-bold font-sans mt-2 w-full text-center">
              <strong>Mood:</strong> {mood}
            </p>
            <p className="bg-blue-200 mt-2 text-black rounded-2xl p-2 md:p-4 font-bold font-sans w-full text-center">
              <strong>Intensity:</strong> {intensity}
            </p>
            <p className="bg-blue-200 mt-2 text-black rounded-2xl p-2 md:p-4 font-bold font-sans w-full text-center">
              <strong>Notes:</strong> {notes || "None"}
            </p>
          </div>

          {error && <p className="text-red-600 mb-2">{error}</p>}
          {success && <p className="text-green-600 mb-2">✅ Entry Created</p>}

          <button
            onClick={handleSubmit}
            disabled={loading || success}
            className="bg-black text-white rounded-2xl p-2 md:p-4 w-full max-w-xs text-lg md:text-xl font-bold disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
