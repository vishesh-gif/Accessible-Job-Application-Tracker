import React from "react";

const SelectField = ({ label, options, className, ...props }) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="text-md font-medium text-gray-600">{label}</label>
      <select
        {...props}
        className="border border-[rgb(236,238,248)] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1153c1]"
      >
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
