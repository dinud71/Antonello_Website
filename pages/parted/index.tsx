import Image from 'next/image'

import img_1 from '@/public/images/parted/img_1.png'
import img_2 from '@/public/images/parted/img_2.png'
import img_3 from '@/public/images/parted/img_3.png'
import img_4 from '@/public/images/parted/img_4.png'
import img_5 from '@/public/images/parted/img_5.png'
import img_6 from '@/public/images/parted/img_6.png'
import img_7 from '@/public/images/parted/img_7.png'
import img_8 from '@/public/images/parted/img_8.png'
import img_9 from '@/public/images/parted/img_9.png'
import img_10 from '@/public/images/parted/img_10.png'
import img_11 from '@/public/images/parted/img_11.png'
import img_12 from '@/public/images/parted/img_12.png'
import img_13 from '@/public/images/parted/img_13.png'
import img_14 from '@/public/images/parted/img_14.png'
import img_15 from '@/public/images/parted/img_15.png'
import img_16 from '@/public/images/parted/img_16.png'
import img_17 from '@/public/images/parted/img_17.png'
import img_18 from '@/public/images/parted/img_18.png'

const Index = () => {
    return (
        <div className="w-full px-3 lg:px-0 pt-32">
            <div className="container pt-60">
                <h1 className='text-[30px] text-white font-gotham font-semibold mb-14 lg:hidden'>Parted- <br /> Brand Strategy, <br /> and Architecture,</h1>
                <h1 className='hidden lg:block text-[60px] text-white font-gotham font-semibold leading-[45px] mb-10'>Parted- Brand Strategy, Architecture,</h1>
                <p className='text-[20px] lg:text-[32px] text-white font-gotham font-normal leading-[28px] lg:leading-[40px]'>
                    We have developed the brand identity of "Parted coffee". The whole space is separated by walls. So this cafe name is Parted and we separate all graphics.
                </p>
            </div>

            <div className='container mt-20'>
                <div>
                    <Image src={img_1} alt='parted image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_2} alt='parted image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_3} alt='parted image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_4} alt='parted image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_5} alt='parted image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_6} alt='parted image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_7} alt='parted image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_8} alt='parted image' />
                </div>
                <div className='grid md:grid-cols-2 gap-2 mt-2'>
                    <Image src={img_9} alt='parted image' />
                    <Image src={img_10} alt='parted image' />
                </div>
                <div className='grid md:grid-cols-2 gap-2 mt-2'>
                    <Image src={img_11} alt='parted image' />
                    <Image src={img_12} alt='parted image' />
                </div>
                <div className='grid md:grid-cols-2 gap-2 mt-2'>
                    <Image src={img_13} alt='parted image' />
                    <Image src={img_14} alt='parted image' />
                </div>
                <div className='grid md:grid-cols-2 gap-2 mt-2'>
                    <Image src={img_15} alt='parted image' />
                    <Image src={img_16} alt='parted image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_17} alt='parted image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_18} alt='parted image' />
                </div>
            </div>
        </div>
    )
}

export default Index;   