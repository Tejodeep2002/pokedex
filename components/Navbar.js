import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="NavBar bg-cyan-500 w-full  flex  items-center  p-2">
      <Link href="/">
        <div className="text-white font-bold text-[2rem] flex">POKE-Dex</div>
      </Link>
    </div>
  );
};

export default Navbar;
