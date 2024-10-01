import Link from "next/link";
import TopBar from "./TopBar";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    // { name: "About", href: "/about" },
    // { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <header>
      <TopBar />
      <nav className="flex flex-col md:flex-row md:justify-between md:items-center py-10 px-4 md:px-24">
        <div className="text-3xl  w-full md:text-left text-center">Mentor Connect</div>
        <div className="my-4 md:m-0">
          <ul className="flex flex-col md:flex-row justify-end items-end">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="mx-5 opacity-70 font-bold cursor-pointer hover:scale-110"
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
