import React from "react";

import { BsFillPersonFill } from "react-icons/bs";

const ProfileHeader = ({ headerText, headerLogo }) => {
  return (
    <div>
      <h1 className="font-semibold text-lg flex items-center gap-2 bg-gray-100 border border-gray-200 py-2 px-1 text-[#37425e]">
        <span className="text-2xl">
          <BsFillPersonFill />
        </span>{" "}
        {headerText}
      </h1>
    </div>
  );
};

export default ProfileHeader;
