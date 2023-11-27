import Image from "next/image";
import Logo from "@/public/logo.svg";
import Logo_2 from "@/public/logo_2.svg";
import { Menu, X } from "lucide-react";
import { useState } from 'react'
import Link from "next/link";
import { useEffect } from 'react';
import { useRouter } from "next/router";
import Footer from "./Footer";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const router = useRouter();
  let adjustedScrollPosition = 0;

  useEffect(() => {
    // Scroll to the target section on initial page load
    const { hash } = window.location;
    if (hash) {
      const targetElement = document.querySelector(hash) as HTMLElement;
      if (targetElement) {
        adjustedScrollPosition = targetElement?.offsetTop - 100;

        // Scroll to the adjusted position
        window.scrollTo({
          top: adjustedScrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, []);


  const handleLinkClick = (targetId: any) => {
    setIsActive(false);

    // Update the URL with the hash
    router.push(`/#${targetId}`).then(() => {
      // Scroll to the target section after the route change
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const adjustedScrollPosition = targetElement.offsetTop - 100;
        // Scroll to the adjusted position
        window.scrollTo({
          top: adjustedScrollPosition,
          behavior: "smooth",
        });
      }
    });
  };

  return (
    <div className=" relative">
      <header className="h-full">
        <div className=" container py-4 px-4 lg:px-0 flex items-start justify-between">
          <Link href={'/'}>
            <Image src={Logo} alt="logo" className="w-20 lg:w-full" />
          </Link>
          <button onClick={() => setIsActive(!isActive)} className=" cursor-pointer">
            <Menu color="white" />
          </button>
        </div>
        {
          isActive && (
            <div className=" mx-auto w-full max-h-screen top-0 bg-[#242424] fixed transition-all duration-300 opacity-100 px-4 overflow-y-auto">
              <div className=" container">
                <div
                  onClick={() => setIsActive(!isActive)}
                  className="py-4 flex items-center justify-end cursor-pointer">
                  <X color="#fff" />
                </div>
                <div className="flex items-start justify-between">
                  <div className=" flex flex-col">
                    <p onClick={() => handleLinkClick("about")} className="text-[40px] md:text-[72px] text-white font-gotham font-semibold cursor-pointer">
                      About us
                    </p>
                    <p onClick={() => handleLinkClick("services")} className="text-[40px] md:text-[72px] text-white font-gotham font-semibold cursor-pointer">
                      Our Services
                    </p>
                    <p onClick={() => handleLinkClick("works")} className="text-[40px] md:text-[72px] text-white font-gotham font-semibold cursor-pointer">
                      Our Works
                    </p>
                    <p onClick={() => handleLinkClick("contact")} className="text-[40px] md:text-[72px] text-white font-gotham font-semibold cursor-pointer">
                      Contact us
                    </p>
                  </div>
                  <div>
                    <Image src={Logo_2} alt="logo" className="hidden lg:block" />
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          )
        }
      </header >
    </div >
  );
};

export default Navbar;
