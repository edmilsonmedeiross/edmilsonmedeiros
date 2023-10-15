import React from "react";
import Link from "next/link";
import GroupedContacts from "../GroupedContacts";

interface NavLink {
  title: string;
  url: string;
}

const navLinks: NavLink[] = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Services", url: "/services" },
  { title: "Contact", url: "/contact" },
];

const Header: React.FC = () => {
  return (
    <nav>
      {navLinks.map((navLink) => (
        <Link key={navLink.url} href={navLink.url}>
          {navLink.title}
        </Link>
      ))}
      <GroupedContacts />
    </nav>
  );
};

export default Header;
