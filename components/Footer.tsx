import Logo_2 from '@/public/logo_2.svg';
import Logo_3 from '@/public/logo_3.svg';

import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className='container px-4 md:px-0'>
            <section id='contact' className="mt-10 items-center lg:mt-20 grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center lg:col-end-1">
                    <Image src={Logo_2} alt="logo" className='w-1/2 sm:w-[30%] md:w-1/2 lg:w-2/3' />
                </div>
                <div className="col-span-2 grid-rows-2 lg:items-center lg:pl-10 xl:pl-40">
                    <div className="flex flex-col lg:flex-row justify-between mb-10">
                        <h1 className="text-white text-[20px] lg:hidden lg:text-[14px] font-gotham font-bold text-center my-10 lg:text-right">
                            Welcome <br /> to the Club!
                        </h1>
                        <p className="text-white text-[12px] font-gotham font-light lg:text-[14px] lg:text-left mb-4 lg:mb-0">
                            Send a brief <br /> dinu@antonellostudio.in
                        </p>
                        <p className="hidden text-white text-[12px] font-gotham font-light underline cursor-pointer lg:block lg:text-left lg:text-[14px]">
                            We are hiring
                        </p>
                        <h1 className="hidden text-white text-[12px] font-gotham font-bold text-center lg:block lg:text-[14px] lg:text-right">
                            Welcome <br /> to the Club!
                        </h1>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="flex items-start justify-between">
                            <div className="flex flex-col">
                                <div>
                                    <Link className="text-white text-[12px] font-gotham font-light underline cursor-pointer lg:text-[14px] lg:text-left lg:mb-0" href={{ pathname: 'https://www.instagram.com/antonello.studio/' }}>
                                        Instagram
                                    </Link>
                                </div>
                                <div>
                                    <Link className="text-white text-[12px] font-gotham font-light underline cursor-pointer lg:text-[14px] lg:text-left lg:mb-0" href={{ pathname: 'https://www.linkedin.com/company/74733349/admin/feed/posts/' }}>
                                        LinkedIn
                                    </Link>
                                </div>
                            </div>
                            <p className="text-white text-[12px] lg:text-[14px] font-gotham font-light underline cursor-pointer lg:hidden lg:text-left">
                                We are hiring
                            </p>
                        </div>
                        <p className="text-white text-[12px] font-gotham font-light my-5 lg:text-[14px] lg:text-left">
                            Bangalore, India
                        </p>
                        <p className="text-white text-[12px] font-gotham font-light lg:text-[14px] lg:text-right">
                            Anev Castle, 7th Cross, 5th Main, <br /> B Narayanapura, Krishnarajapura - 560016
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex items-center justify-center mt-10 lg:mt-20">
                <Image src={Logo_3} alt="logo" />
            </section>

            <footer className="mt-10 lg:mt-20 flex flex-col justify-center lg:flex-row lg:justify-normal">
                <p className="hidden text-white text-[12px] lg:text-[14px] font-gotham font-light mb-2 lg:block lg:mr-20">© Antonello Studio (P) Ltd</p>
                <p className="text-white text-[12px] font-gotham font-light mb-2 lg:text-[14px] lg:mr-20">#Branding</p>
                <p className="text-white text-[12px] lg:text-[14px] font-gotham font-light mb-2">#Marketing</p>
                <p className="lg:hidden text-white text-[12px] lg:text-[14px] font-gotham font-light mb-2 lg:mr-20">© Antonello Studio (P) Ltd</p>
            </footer>
        </div>
    )
}

export default Footer