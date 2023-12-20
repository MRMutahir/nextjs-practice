"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa";
import classNames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();
  console.log(currentPath);

  const Links = [
    {
      label: `Dashboard`,
      href: `/`,
    },
    {
      label: `Issues`,
      href: `/issues`,
    },
  ];
  return (
    <nav className="flex space-x-6  border-b mb-5 px-5 h-14 items-center">
      <Link href={"/"}>
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {Links.map((ele) => (
          <li key={ele.href}>
            <Link
              className={classNames({
                'text-zinc-900': ele.href === currentPath,
                'text-zinc-500': ele.href !== currentPath,
                'hover:text-zinc-800 transition-colors': true,
              })}
              href={ele.href}
            >
              {ele.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
