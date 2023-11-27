import Image from "next/image"

import img_1 from '@/public/images/amaranth/img_1.png'
import img_2 from '@/public/images/amaranth/img_2.png'
import img_3 from '@/public/images/amaranth/img_3.png'
import img_4 from '@/public/images/amaranth/img_4.png'
import img_5 from '@/public/images/amaranth/img_5.png'
import img_6 from '@/public/images/amaranth/img_6.png'
import img_7 from '@/public/images/amaranth/img_7.png'
import img_8 from '@/public/images/amaranth/img_8.png'
import img_9 from '@/public/images/amaranth/img_9.png'
import img_10 from '@/public/images/amaranth/img_10.png'
import img_11 from '@/public/images/amaranth/img_11.png'

const index = () => {
    return (
        <div className="w-full px-4 lg:px-0 pt-32">
            <div className="container pt-60">
                <h1 className='text-[30px] text-white font-gotham font-semibold mb-14 lg:hidden'>Black Sea Amaranth- <br /> Brand Strategy, <br /> and Identity</h1>
                <h1 className='hidden lg:block text-[60px] text-white font-gotham font-semibold leading-[45px] mb-10'>Black Sea Amaranth- Brand Strategy, and Identity</h1>
                <p className='text-[20px] lg:text-[32px] text-white font-gotham font-normal leading-[28px] lg:leading-[40px]'>
                    We grind the groats, press the butter, wash the flakes, clean the grain.
                    <br /><br />
                    "Black Sea Amaranth" is a family business engaged in the cultivation and production of amaranth products in Ukraine.
                    <br /><br />
                    We were involved in rebranding, the main goal of which is to introduce and interest the audience in the new brand and to distinguish it from competitors on the store shelf. Each illustration tells a story and invites you to dive into the adventure, and the colors are inspired by the natural shades of amaranth. <br /> <br />

                </p>
            </div>

            <div className='container mt-20'>
                <div>
                    <Image src={img_1} alt='amaranth image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_2} alt='amaranth image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_3} alt='amaranth image' />
                </div>
                <div className='grid grid-cols-2 gap-2 mt-2'>
                    <Image src={img_4} alt='amaranth image' />
                    <Image src={img_5} alt='amaranth image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_6} alt='amaranth image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_7} alt='amaranth image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_8} alt='amaranth image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_9} alt='amaranth image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_10} alt='amaranth image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_11} alt='amaranth image' />
                </div>
            </div>
        </div>
    )
}

export default index