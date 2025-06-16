import React from "react";
import { useRouter } from "next/router";
import NotesInput from "../components/NotesInput";
import { useMood } from "../context/MoodContext";

const ActivityInput: React.FC = () => {
  const { notes, setNotes } = useMood();
  const router = useRouter();

  const handleNext = () => {
    router.push("/Summary");
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
        <div className="w-full max-w-lg bg-white/80 border-2 rounded-2xl p-4 md:p-8 mt-10 mx-auto shadow-lg">
          <div className="font-semibold font-[Montserrat] text-2xl md:text-4xl text-center">
            <p>📝 What did you do today?</p>
          </div>

          <div className="font-semibold font-[Montserrat] text-base md:text-xl p-2 md:p-4 gap-4 flex flex-col">
            <NotesInput value={notes} onChange={setNotes} />

            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <button
                onClick={() => router.back()}
                className="flex-1 border-2 border-black rounded-2xl p-2 md:p-4 bg-gray-200 hover:bg-gray-300 font-semibold"
              >
                ⬅ Back
              </button>

              <button
                onClick={handleNext}
                disabled={!notes.trim()}
                className="flex-1 border-2 border-black rounded-2xl p-2 md:p-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityInput;
