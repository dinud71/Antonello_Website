import Image from 'next/image'

import img_1 from '@/public/images/delhi_delhi/img_1.png'
import img_2 from '@/public/images/delhi_delhi/img_2.png'
import img_3 from '@/public/images/delhi_delhi/img_3.png'
import img_4 from '@/public/images/delhi_delhi/img_4.png'
import img_5 from '@/public/images/delhi_delhi/img_5.png'
import img_6 from '@/public/images/delhi_delhi/img_6.png'
import img_7 from '@/public/images/delhi_delhi/img_7.png'
import img_8 from '@/public/images/delhi_delhi/img_8.png'
import img_9 from '@/public/images/delhi_delhi/img_9.png'
import img_10 from '@/public/images/delhi_delhi/img_10.png'
import img_11 from '@/public/images/delhi_delhi/img_11.png'
import img_12 from '@/public/images/delhi_delhi/img_12.png'
import img_13 from '@/public/images/delhi_delhi/img_13.png'
import img_14 from '@/public/images/delhi_delhi/img_14.png'
import img_15 from '@/public/images/delhi_delhi/img_15.png'
import img_16 from '@/public/images/delhi_delhi/img_16.png'
import img_17 from '@/public/images/delhi_delhi/img_17.png'
import img_18 from '@/public/images/delhi_delhi/img_18.png'
import img_19 from '@/public/images/delhi_delhi/img_19.png'

const Index = () => {
    return (
        <div className="w-full px-4 lg:px-0 pt-32">
            <div className="container pt-60">
                <h1 className='text-[30px] text-white font-gotham font-semibold mb-14 lg:hidden'>Delhi Delhi-  <br /> Brand Strategy, <br /> Brand Identity</h1>
                <h1 className='hidden lg:block text-[60px] text-white font-gotham font-semibold leading-[45px] mb-10'>Delhi Delhi- Brand Strategy, Brand Identity</h1>

                <p className='text-[20px] lg:text-[32px] text-white font-gotham font-normal leading-[28px] lg:leading-[40px]'>
                    Delhi Delhi is a curry bar with a modern interpretation of Indian food. Its not about Bollywood and the stereotypical India. This place is more relevant for Kyiv citizens and introduces them to bright spicy tastes and sensations.
                    <br /><br />
                    This is immediately confirmed by the Indian flow with its magic bright colors through the prism of modernity. So we showed it in our design materials. The color palette includes a wide range of bright, eye-pleasing shades. And the main characters seem to be familiar, but associative with Indian culture.
                    <br /><br />
                    Delhi Delhi is the place where you may know a bit another and adaptive India that is free from regular touristic images. At the same time you understand, its the best place for a first date.
                    <br /><br />
                    Art-director: Andrei Barmalei <br />
                    Designer: Dmitry Onischenko, Christina Vlasenko <br />
                    Illustrator: Dmitry Onischenko <br />
                    Photographer: Igor Tsarukov <br />
                    2020 <br />
                    <br /><br />
                </p>
            </div>

            <div className='container mt-20'>
                <div>
                    <Image src={img_1} alt='delhi_delhi image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_2} alt='delhi_delhi image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_3} alt='delhi_delhi image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_4} alt='delhi_delhi image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_5} alt='delhi_delhi image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_6} alt='delhi_delhi image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_7} alt='delhi_delhi image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_8} alt='delhi_delhi image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_9} alt='delhi_delhi image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_10} alt='delhi_delhi image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_11} alt='delhi_delhi image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_12} alt='delhi_delhi image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_13} alt='delhi_delhi image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_14} alt='delhi_delhi image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_15} alt='delhi_delhi image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_16} alt='delhi_delhi image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_17} alt='delhi_delhi image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_18} alt='delhi_delhi image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_19} alt='delhi_delhi image' />
                </div>
            </div>
        </div>
    )
}

export default Index;   