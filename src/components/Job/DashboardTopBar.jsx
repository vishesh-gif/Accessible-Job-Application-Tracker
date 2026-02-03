import React, { useEffect, useState } from "react";
import AddApplicationBtn from "../sideBarComponents/AddApplicationBtn";
import SelectField from "../../utils/SelectField";
import { useDispatch } from "react-redux";
import { filtereApplicationByStatus } from "../../Redux/applicationSlice";

const DashboardTopBar = () => {
  const [filterStatus, setFilterStatus] = useState("");
  const dispatch = useDispatch();
  const filterApp = async () => {
    dispatch(filtereApplicationByStatus(filterStatus));
  };

  useEffect(() => {
    filterApp();
  }, [filterStatus]);
  return (
    <div
      className="
      sm:hidden
      flex
      flex-row sm:flex-row items-stretch sm:items-center
      gap-3 w-full
    "
    >
      {/* Search */}

      <SelectField
        onChange={(e) => setFilterStatus(e.target.value)}
        className={"w-full"}
        options={[
          "All Applications",
          "Applied",
          "Rejected",
          "Offer",
          "Interview",
        ]}
      />

      {/* Button */}
      <AddApplicationBtn
        btnText={"+ Add"}
        className="sm:w-auto whitespace-nowrap"
      />
    </div>
  );
};

export default DashboardTopBar;
