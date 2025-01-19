import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div className="ring-1 ring-black rounded-md px-4 py-2 flex flex-col gap-2 absolute z-50 bg-gray-700 bg-opacity-30 right-0">
      <Link href="/signin" className="">
        SignIn
      </Link>
      <Link href="/signup" className="">
        SignUp
      </Link>
    </div>
  );
};

export default Profile;
