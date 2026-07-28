"use client";

import { Link2, FileUser } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [socials, setSocials] = useState(false);

  const toggleSocials = () => {
    setSocials((prev) => !prev);
  };

  return (
    <div className="bottom-2 left-0 right-0 flex justify-center m-5 mt-20">
      <div className="flex flex-row p-2 w-full max-w-4xl justify-between border-t border-gray-900">
        <div className="flex flex-row gap-4 items-center">
          <button
            onClick={toggleSocials}
            className="flex flex-row items-center gap-2 cursor-pointer text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <Link2 className="w-5 h-5" /> Socials
          </button>

          {socials && (
            <div className="flex flex-row items-center gap-3">
              <Link href="https://github.com/karimshadyy">
                <Image
                  src="/Icons/Github.png"
                  alt="Github"
                  width={20}
                  height={20}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </Link>
              <Link href="https://instagram.com/karimshadyy">
                <Image
                  src="/Icons/Instagram.png"
                  alt="Instagram" // Fixed the alt text here!
                  width={20}
                  height={20}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </Link>
              {/* <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileUser />
              </Link> */}
            </div>
          )}
        </div>

        <div className="text-zinc-500 text-sm">Made with ❤️</div>
      </div>
    </div>
  );
}
