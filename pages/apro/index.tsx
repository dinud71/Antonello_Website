import Image from 'next/image'

import img_1 from '@/public/images/apro/img_1.png'
import img_2 from '@/public/images/apro/img_2.png'
import img_3 from '@/public/images/apro/img_3.png'
import img_4 from '@/public/images/apro/img_4.png'
import img_5 from '@/public/images/apro/img_5.png'
import img_6 from '@/public/images/apro/img_6.png'
import img_7 from '@/public/images/apro/img_7.png'
import img_8 from '@/public/images/apro/img_8.png'
import img_9 from '@/public/images/apro/img_9.png'
import img_10 from '@/public/images/apro/img_10.png'
import img_11 from '@/public/images/apro/img_11.png'
import img_12 from '@/public/images/apro/img_12.png'
import img_13 from '@/public/images/apro/img_13.png'
import img_14 from '@/public/images/apro/img_14.png'
import img_15 from '@/public/images/apro/img_15.png'
import img_16 from '@/public/images/apro/img_16.png'
import img_17 from '@/public/images/apro/img_17.png'

const Index = () => {
    return (
        <div className="w-full px-4 lg:px-0 pt-32">
            <div className="container">
                <h1 className='text-[30px] text-white font-gotham font-semibold mb-14 lg:hidden'>APRO- <br /> Brand Strategy, <br /> and Identity</h1>
                <h1 className='hidden lg:block text-[60px] text-white font-gotham font-semibold leading-[45px] mb-10'>APRO- Brand Strategy, and Identity</h1>
            </div>

            <div className='container mt-20'>
                <div>
                    <Image src={img_1} alt='apro image' />
                </div>
                <div className='grid md:grid-cols-2 gap-2 mt-2'>
                    <div>
                        <Image src={img_2} alt='apro image' />
                    </div>
                    <div className='grid grid-rows-2 gap-3'>
                        <div className='grid md:grid-cols-2 gap-2'>
                            <Image src={img_3} alt='apro image' />
                            <Image src={img_4} alt='apro image' />
                        </div>
                        <div>
                            <Image src={img_5} alt='apro image' />
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 gap-2 mt-2'>
                    <div>
                        <Image src={img_6} alt='apro image' />
                    </div>
                    <div>
                        <Image src={img_7} alt='apro image' />
                    </div>
                    <div>
                        <Image src={img_8} alt='apro image' />
                    </div>
                </div>
                <div className='mt-2'>
                    <Image src={img_9} alt='apro image' />
                </div>
                <div className='grid md:grid-cols-3 gap-2 mt-2'>
                    <div>
                        <Image src={img_10} alt='apro image' />
                    </div>
                    <div>
                        <Image src={img_11} alt='apro image' />
                    </div>
                    <div>
                        <Image src={img_12} alt='apro image' />
                    </div>
                </div>
                <div className='mt-2'>
                    <Image src={img_13} alt='apro image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_14} alt='apro image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_15} alt='apro image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_16} alt='apro image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_17} alt='apro image' />
                </div>
            </div>
        </div>
    )
}

export default Index;   