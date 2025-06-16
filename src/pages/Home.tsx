import React from "react";
import { useRouter } from "next/router";


const Home = () => {
  const router = useRouter();

  const handleStartCheckIn = () => {
    router.push("/MoodSelect");
  };

  return (
    <div className="absolute w-screen h-screen   overflow-x-hidden ">
      <div>
        <img
          src="/Bg.png"
          alt="backgroundimage"
          className="absolute inset-0 w-screen h-full object-cover z-0"
        />
        <img
          src="/frame.png"
          alt="frame"
          className="absolute inset-0 w-full h-full max-sm:h-5/9 max-sm:mt-20  object-contain z-10
           
          "
          onClick={handleStartCheckIn}
        />
      </div>
    </div>
  );
};

export default Home;
