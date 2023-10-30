import Image from "next/image";
import Logo from "@/public/logo.svg";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="lg:container">
      <header className="py-3 flex items-start justify-between">
        <div>
          <Image src={Logo} alt="logo" className="w-20 lg:w-full" />
        </div>
        <Menu color="white" />
      </header>
    </div>
  );
};

export default Navbar;
