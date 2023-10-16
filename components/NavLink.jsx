"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ children, href }) {
  const pathname = usePathname();
  console.log("pathname: ", pathname);
  if (pathname === href) {
    return <span className="text-orange-800">{children}</span>;
  }
  return (
    <Link href={href} className="text-orange-800 hover:underline">
      {children}
    </Link>
  );
}
