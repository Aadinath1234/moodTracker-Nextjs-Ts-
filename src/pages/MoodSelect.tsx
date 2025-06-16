import React, { useState } from "react";
import { useRouter } from "next/router";
import { useMood } from "../context/MoodContext";
import MoodIntensitySelector from "../components/MoodIntensitySelector";
import MoodOption from "@/components/MoodOption";

const MoodSelect: React.FC = () => {
  const router = useRouter();
  const { setMood, setIntensity, mood } = useMood();
  const [showIntensity, setShowIntensity] = useState(false);

  const handleMoodSelect = (selectedMood: string) => {
    setMood(selectedMood);
    setShowIntensity(true);
  };

  const handleIntensitySelect = (selectedIntensity: string) => {
    setIntensity(selectedIntensity);
    router.push("/ActivityInput");
  };

  return (
    <div className="absolute w-full min-h-screen  flex items-center justify-center">
      {/* Background image */}
      <img
        src="/Bg.png"
        alt="backgroundimage"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <div className="w-full  max-w-lg  lg:max-w-2xl  bg-white/80  border-2 rounded-2xl  p-4 md:p-8  mt-10 mx-auto shadow-lg flex flex-col items-center  " >
          <div className="font-semibold font-[Montserrat] text-2xl md:text-4xl text-center">
            <p>How are you feeling today?</p>
          </div>

{/*           <p className="font-semibold font-[Montserrat] text-base md:text-xl p-2 md:p-4 text-center">
            No matter how you&apos;re feeling, it&apos;s okay. We&apos;re here to support you.
          </p> */}

          <p className="font-semibold font-[Montserrat] text-base md:text-xl p-2 md:p-4 text-center">
               No matter how you&apos;re feeling, it&apos;s okay. We&apos;re here to support you.
           </p>


          {!showIntensity && (
            <ul
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 md:p-4 flex-col items-center lg:flex-row lg:items-center lg:justify-center"
            >
              <MoodOption
                imageSrc="/angry.png"
                altText="anger"
                moodValue="angry"
                onSelect={handleMoodSelect}
              />
              <MoodOption
                imageSrc="/sad.png"
                altText="sad"
                moodValue="sad"
                onSelect={handleMoodSelect}
              />
              <MoodOption
                imageSrc="/neutral.png"
                altText="neutral"
                moodValue="neutral"
                onSelect={handleMoodSelect}
              />
              <MoodOption
                imageSrc="/content.png"
                altText="content"
                moodValue="content"
                onSelect={handleMoodSelect}
              />
              <MoodOption
                imageSrc="/happy.png"
                altText="happy"
                moodValue="happy"
                onSelect={handleMoodSelect}
              />
              <MoodOption
                imageSrc="/awe.png"
                altText="awe"
                moodValue="awe"
                onSelect={handleMoodSelect}
              />
            </ul>
          )}

          {showIntensity && (
            <MoodIntensitySelector
              mood={mood}
              onSelect={handleIntensitySelect}
            />
          )}

          <p className="font-semibold font-[Montserrat] text-base md:text-xl p-4 text-center">
            Choose the feeling that is closest to how you are feeling
          </p>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6 w-full gap-4">
            <button
              onClick={() => router.back()}
              className="flex-1 border-2 border-black rounded-2xl p-2 md:p-4 bg-gray-200 hover:bg-gray-300 font-semibold"
            >
              ⬅ Back
            </button>
            <button
              onClick={() => router.push("/ActivityInput")}
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

export default MoodSelect;
