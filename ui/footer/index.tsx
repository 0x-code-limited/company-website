import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-5xl mx-auto">
      <div className="py-8 px-4 text-white">
        <div className="flex flex-col md:flex-row pb-3">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <Link href="/" passHref>
              <Image
                src="/0x-code-limited-logo.png"
                width={111}
                height={32}
                alt="0x Code Limited Logo"
              />
            </Link>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-bold">Quick Links</h3>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>

              <li>
                <Link href="/better-bc-assessment/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative pt-4">
          <Link href="https://linkedin.com/company/0x-code-limited" passHref>
            <div
              className="absolute right-0 -top-6 bg-white rounded-full p-2 shadow-lg w-11 h-11 flex items-center justify-center"
              style={{
                boxShadow:
                  "0 4px 6px rgba(255, 255, 255, 0.6), 0 1px 3px rgba(255, 255, 255, 0.2)",
              }}
            >
              <Image
                src="/linkedin-icon.png"
                width={24}
                height={24}
                alt="LinkedIn"
              />
            </div>
          </Link>
        </div>
        <hr className="mt-8" />
        <div className="text-center pt-4">
          <p>
            © {new Date().getFullYear()} 0x Code Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
