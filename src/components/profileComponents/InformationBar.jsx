import React from "react";

const InformationBar = ({ text }) => {
  return (
    <p className="text-sm py-4 bg-white px-1 text-gray-500">
      Fill out the information below to {text} your profile.
    </p>
  );
};

export default InformationBar;
