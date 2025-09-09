"use client";

import { socialLinks } from "@/lib/links";
import { Icons } from "./icons";
import Link from "next/link";

export function FloatingActions() {
  return (
    <div className="fixed left-6 bottom-16 z-50 flex flex-col gap-3">
      <div
        className={`text-white py-3 mx-auto rounded-4xl max-w-fit shadow-md transition-all duration-300"
          }`}
      >
        <div className="container mx-auto px-2">
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-3">
              <Link
                rel="noopener noreferrer"
                href={"#"}
                className="w-8 h-8 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center  hover:scale-[1.2] duration-300 transition-all"
              >
                <Icons.whatsapp className="w-4 h-4" />
              </Link>
              <Link
                rel="noopener noreferrer"
                href={"#"}
                className="w-8 h-8 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center  hover:scale-[1.2] duration-300 transition-all"
              >
                <Icons.phone className="w-4 h-4" />
              </Link>
              <Link
                rel="noopener noreferrer"
                href={"#"}
                className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center  hover:scale-[1.2] duration-300 transition-all"
              >
                <Icons.instagram className="w-4 h-4" />
              </Link>
              <Link
                rel="noopener noreferrer"
                // href={socialLinks.facebook}
                href={"#"}
                className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center  hover:scale-[1.2] duration-300 transition-all"
              >
                <Icons.facebook className="w-4 h-4" />
              </Link>

              {/* <Link
                rel="noopener noreferrer"
                href={socialLinks.twitter}
                className="w-8 h-8 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Icons.twitter className="w-4 h-4" />
              </Link> */}
              {/* <Link
                rel="noopener noreferrer"
                href={socialLinks.youtube}
                className="w-8 h-8 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Icons.youtube className="w-4 h-4" />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
