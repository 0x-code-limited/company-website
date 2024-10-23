import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="bg-theme-yellow text-black p-4">
      <div className="flex flex-row h-16 max-w-5xl mx-auto">
        <div className="w-1/2">
          <Link href="/" passHref>
            <Image
              src="/0x-code-limited-logo.png"
              width={222}
              height={64}
              alt="0x Code Limited Logo"
            />
          </Link>
        </div>
        <div className="w-1/2">
          <nav className="h-full">
            <ul className="h-full flex flex-row items-center justify-end">
              <li className="mr-4">
                <Link href="/">Home</Link>
              </li>
              <li className="mr-4">
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
