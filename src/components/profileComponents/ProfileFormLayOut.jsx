import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";

const ProfileFormLayOut = () => {
  const [btnState, setBtnState] = useState(false);

  return (
    <section className="mb-4 py-4 px-4 border border-gray-100 rounded shadow-2xl bg-white">
      {btnState ? <SignUpForm /> : <LogInForm />}
      <button
        type="button"
        onClick={() => setBtnState((prev) => !prev)}
        className="hover:bg-[#f3f4f6] duration-200 border w-50 self-center mt-2.5 border-gray-200 rounded px-2 py-1 cursor-pointer text-sm"
      >
        {btnState ? "Already have Account" : "Create new Account"}
      </button>
    </section>
  );
};

export default ProfileFormLayOut;
