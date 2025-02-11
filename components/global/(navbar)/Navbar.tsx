import React from "react";
import Link from "next/link";
import NavbarButton from "./NavbarButton";

const Navbar = (): React.ReactElement => {
  return (
    <div className="navbar bg-base-100">
      <div className="container flex mx-auto justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          OpenDairy
        </Link>
        <NavbarButton />
      </div>
    </div>
  );
};
export default Navbar;
