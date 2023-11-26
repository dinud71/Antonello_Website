import Image from "next/image";
import Logo from "@/public/logo.svg";
import Logo_2 from "@/public/logo_2.svg";
import { Menu, X } from "lucide-react";
import { useState } from 'react'
import Link from "next/link";
import { useEffect } from 'react';
import { useRouter } from "next/router";

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
    <div className="lg:container relative">
      <header className="">
        <div className="py-4 px-4 lg:px-0 flex items-start justify-between">
          <div>
            <Image src={Logo} alt="logo" className="w-20 lg:w-full" />
          </div>
          <button onClick={() => setIsActive(!isActive)} className=" cursor-pointer">
            <Menu color="white" />
          </button>
        </div>
        {
          isActive && (
            <div className="container w-full h-screen top-0 bg-[#242424] fixed transition-all duration-300 opacity-100 px-4">
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
              <div className="flex flex-col md:flex-row items-start justify-between absolute bottom-10">
                <div className="grid md:grid-rows-2 md:gap-12">
                  <div className=" grid md:grid-cols-3">
                    <p className="text-white text-[12px] font-gotham font-light lg:text-[24px] lg:text-left mb-4 lg:mb-0">
                      Send a brief <br /> dinu@antonellostudio.in
                    </p>
                    <div className="flex flex-col">
                      <div>
                        <Link className="text-white text-[12px] font-gotham font-light underline cursor-pointer lg:text-[24px] lg:text-left lg:mb-0" href={{ pathname: 'https://www.instagram.com/antonello.studio/' }}>
                          Instagram
                        </Link>
                      </div>
                      <div>
                        <Link className="text-white text-[12px] font-gotham font-light underline cursor-pointer lg:text-[24px] lg:text-left lg:mb-0" href={{ pathname: 'https://www.linkedin.com/company/74733349/admin/feed/posts/' }}>
                          LinkedIn
                        </Link>
                      </div>
                    </div>
                    <p className="text-white text-[12px] font-gotham font-light underline cursor-pointer lg:block lg:text-left lg:text-[24px] mt-1">
                      We are hiring
                    </p>
                  </div>
                  <div className=" grid md:grid-cols-3 mt-4">
                    <p className="hidden text-white text-[12px] lg:text-[24px] font-gotham font-light md:mb-2 lg:block lg:mr-20 whitespace-nowrap">© Antonello Studio (P) Ltd</p>
                    <p className="text-white text-[12px] font-gotham font-light md:mb-2 lg:text-[24px] lg:mr-20">#Branding</p>
                    <p className="text-white text-[12px] lg:text-[24px] font-gotham font-light mb-2">#Marketing</p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <p className="text-white text-[12px] lg:text-[24px] font-gotham font-light mb-1 md:mb-2 lg:mr-20 whitespace-nowrap">Antonello Studio Private Limited</p>
                  <p className="text-white text-[12px] font-gotham font-light lg:text-[24px] whitespace-nowrap">
                    Anev Castle, 7th Cross, 5th Main, <br /> B Narayanapura, Krishnarajapura - 560016 <br /> Bangalore, India
                  </p>
                </div>
              </div>
            </div>
          )
        }
      </header >
    </div >
  );
};

export default Navbar;
