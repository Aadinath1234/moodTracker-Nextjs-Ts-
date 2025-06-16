import React from "react";

interface NotesInputProps {
  value: string;
  onChange: (val: string) => void;
  maxLength?: number;
}

const NotesInput: React.FC<NotesInputProps> = ({
  value,
  onChange,
  maxLength = 300,
}) => {
  return (
    <div className="notes-input flex flex-col w-full max-w-lg mx-auto gap-2">
      <div className="border-2 border-black rounded-2xl p-2 md:p-4 bg-white/80">
        <label
          htmlFor="notes"
          className="block mb-2 font-semibold text-base md:text-lg"
        >
          {/* Optionally add a label text here */}
        </label>
        <textarea
          id="notes"
          rows={6}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Went for a walk, had a meeting, etc."
          maxLength={maxLength}
          className="w-full min-h-[120px] p-2 md:p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base md:text-lg resize-none"
        />
      </div>
      <div className="text-right text-sm text-gray-600 px-2">
        {value.length} / {maxLength}
      </div>
    </div>
  );
};

export default NotesInput;
