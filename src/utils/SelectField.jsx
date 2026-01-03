import React from "react";

const SelectField = ({ label, options, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-md font-medium text-gray-600">{label}</label>
      <select
        {...props}
        className="border border-[#eceef8] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1153c1]"
      >
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
