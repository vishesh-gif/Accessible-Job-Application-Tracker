import React from "react";

const TextareaField = ({ label, placeholder, ...prop }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-md font-medium text-gray-600">{label}</label>
      <textarea
        rows="4"
        className="border border-[#eceef8] rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#1153c1]"
        placeholder={placeholder}
        {...prop}
      />
    </div>
  );
};

export default TextareaField;
