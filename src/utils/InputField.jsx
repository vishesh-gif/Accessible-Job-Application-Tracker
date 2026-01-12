import React from "react";

const InputField = React.forwardRef(
  ({ label, type = "text", placeholder, divClass = "", ...props }, ref) => {
    return (
      <div className={`${divClass} flex flex-col gap-1`}>
        {label && (
          <label className="text-md font-medium text-gray-600">{label}</label>
        )}

        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className="border border-[#eceef8] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1153c1]"
          {...props}
        />
      </div>
    );
  }
);

export default InputField;
