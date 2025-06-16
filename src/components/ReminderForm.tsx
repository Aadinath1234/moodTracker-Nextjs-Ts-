import React, { useEffect, useState } from "react";

const ReminderForm: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const storedTime = localStorage.getItem("reminderTime") || "";
    setTime(storedTime);
  }, []);

  useEffect(() => {
    if (time) {
      localStorage.setItem("reminderTime", time);
    }
  }, [time]);

  const handleSetReminder = () => {
    alert(`Reminder set for ${time}`);
    scheduleReminder(time);
  };

  const scheduleReminder = (timeString: string) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    const now = new Date();
    const target = new Date();

    target.setHours(hours, minutes, 0, 0);
    if (target <= now) target.setDate(target.getDate() + 1);

    const timeout = target.getTime() - now.getTime();

    if ("Notification" in window) {
      Notification.requestPermission().then((perm) => {
        if (perm === "granted") {
          setTimeout(() => {
            new Notification("Time for your mood check-in");
          }, timeout);
        }
      });
    }
  };

  return (
    <div className="reminder-form flex flex-col gap-4 p-4 w-full max-w-xs md:max-w-sm bg-white/80 rounded-2xl shadow mx-auto">
      <p className="border-2 border-black rounded-2xl p-2 md:p-4 text-base md:text-2xl font-bold text-center">
        Set a daily reminder
      </p>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="p-2 md:p-4 border-2 border-black rounded-2xl w-full"
      />
      <button
        onClick={handleSetReminder}
        className="border-2 border-black rounded-2xl p-2 md:p-4 bg-black text-white w-full font-semibold"
      >
        Set Reminder
      </button>
    </div>
  );
};

export default ReminderForm;
