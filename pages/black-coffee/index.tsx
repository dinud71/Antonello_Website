import Image from 'next/image'

import img_1 from '@/public/images/black_coffee/img_1.png'
import img_2 from '@/public/images/black_coffee/img_2.png'
import img_3 from '@/public/images/black_coffee/img_3.png'
import img_4 from '@/public/images/black_coffee/img_4.png'
import img_5 from '@/public/images/black_coffee/img_5.png'
import img_6 from '@/public/images/black_coffee/img_6.png'
import img_7 from '@/public/images/black_coffee/img_7.png'
import img_8 from '@/public/images/black_coffee/img_8.png'
import img_9 from '@/public/images/black_coffee/img_9.png'
import img_10 from '@/public/images/black_coffee/img_10.png'
import img_11 from '@/public/images/black_coffee/img_11.png'
import img_12 from '@/public/images/black_coffee/img_12.png'

const Index = () => {
    return (
        <div className="w-full px-4 lg:px-0 pt-32">
            <div className="container pt-60">
                <h1 className='text-[30px] text-white font-gotham font-semibold mb-14 lg:hidden'>Black Coffee-  <br /> Brand Strategy, <br /> and Package</h1>
                <h1 className='hidden lg:block text-[60px] text-white font-gotham font-semibold leading-[45px] mb-10'>Black Coffee- Brand Strategy, and Package</h1>

                <p className='text-[20px] lg:text-[32px] text-white font-gotham font-normal leading-[28px] lg:leading-[40px]'>
                    Black is a coffee brand based in Kyiv, specializing in freshly roasted coffee. They aim to provide coffee enthusiasts with an easy and enjoyable experience in navigating different varieties, tastes, preparation methods, and drinks, allowing them to choose based on their preferences.
                    <br /><br />
                    Our strategist, Natasha, worked closely in-house with Black to conduct in-depth research and develop a strong brand strategy. Through her insights, she discovered that in cafes, people often prefer a straightforward coffee experience without the need to explore various nuances and flavors. This insight served as the foundation for our comprehensive branding approach.
                    <br /><br />
                    We crafted an easy-going, friendly brand identity that will stand the test of time. The packaging design system we developed includes three distinct design lines, each representing a specific blend and roasting profile. With unique typography and illustrations featuring cut edges, our design style strikes a harmonious balance between craftiness and cleanliness.
                    <br /><br />
                    Our work on Black spanned from brand identity development to product shooting, ensuring a cohesive and impactful brand presence.
                    Long-lasting brand identity appearance.
                    Packaging design system.
                    User-friendly and holistic brand experience.


                </p>
            </div>

            <div className='container mt-20'>
                <div>
                    <Image src={img_1} alt='black_coffee image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_2} alt='black_coffee image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_3} alt='black_coffee image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_4} alt='black_coffee image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_5} alt='black_coffee image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_6} alt='black_coffee image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_7} alt='black_coffee image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_8} alt='black_coffee image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_9} alt='black_coffee image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_10} alt='black_coffee image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_11} alt='black_coffee image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_12} alt='black_coffee image' />
                </div>
            </div>
        </div>
    )
}

export default Index;   