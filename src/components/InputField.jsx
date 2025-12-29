import React from "react";

const InputField = ({ label, type = "text", placeholder, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-md font-medium text-gray-600">{label}</label>
      <input
        className="border border-[#eceef8] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1153c1]"
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default InputField;
