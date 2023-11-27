import Image from 'next/image'

import img_1 from '@/public/images/neurox/img_1.png'
import img_2 from '@/public/images/neurox/img_2.png'
import img_3 from '@/public/images/neurox/img_3.png'
import img_4 from '@/public/images/neurox/img_4.png'
import img_5 from '@/public/images/neurox/img_5.png'
import img_6 from '@/public/images/neurox/img_6.png'
import img_7 from '@/public/images/neurox/img_7.png'
import img_8 from '@/public/images/neurox/img_8.png'
import img_9 from '@/public/images/neurox/img_9.png'
import img_10 from '@/public/images/neurox/img_10.png'
import img_11 from '@/public/images/neurox/img_11.png'
import img_12 from '@/public/images/neurox/img_12.png'
import img_13 from '@/public/images/neurox/img_13.png'
import img_14 from '@/public/images/neurox/img_14.png'
import img_15 from '@/public/images/neurox/img_15.png'

const Index = () => {
    return (
        <div className="w-full px-4 lg:px-0 pt-32">
            <div className="container pt-60">
                <h1 className='text-[30px] text-white font-gotham font-semibold mb-14 lg:hidden'>Neurox-  <br /> Brand Strategy, <br /> and Identity</h1>
                <h1 className='hidden lg:block text-[60px] text-white font-gotham font-semibold leading-[45px] mb-10'>Neurox- Brand Strategy, And Identity,</h1>
            </div>

            <div className='container mt-20'>
                <div>
                    <Image src={img_1} alt='neurox image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_2} alt='neurox image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_3} alt='neurox image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_4} alt='neurox image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_5} alt='neurox image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_6} alt='neurox image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_7} alt='neurox image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_8} alt='neurox image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_9} alt='neurox image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_10} alt='neurox image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_11} alt='neurox image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_12} alt='neurox image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_13} alt='neurox image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_14} alt='neurox image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_15} alt='neurox image' />
                </div>
            </div>
        </div>
    )
}

export default Index;   