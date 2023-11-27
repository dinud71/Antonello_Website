import Image from 'next/image'

import img_1 from '@/public/images/la_mia/img_1.png'
import img_2 from '@/public/images/la_mia/img_2.png'
import img_3 from '@/public/images/la_mia/img_3.png'
import img_4 from '@/public/images/la_mia/img_4.png'
import img_5 from '@/public/images/la_mia/img_5.png'
import img_6 from '@/public/images/la_mia/img_6.png'
import img_7 from '@/public/images/la_mia/img_7.png'
import img_8 from '@/public/images/la_mia/img_8.png'
import img_9 from '@/public/images/la_mia/img_9.png'
import img_10 from '@/public/images/la_mia/img_10.png'
import img_11 from '@/public/images/la_mia/img_11.png'
import img_12 from '@/public/images/la_mia/img_12.png'
import img_13 from '@/public/images/la_mia/img_13.png'
import img_14 from '@/public/images/la_mia/img_14.png'
import img_15 from '@/public/images/la_mia/img_15.png'
import img_16 from '@/public/images/la_mia/img_16.png'

const Index = () => {
    return (
        <div className="w-full px-4 lg:px-0 pt-32">
            <div className="container pt-60">
                <h1 className='text-[30px] text-white font-gotham font-semibold mb-14 lg:hidden'>La Mia- <br /> Brand Product, <br /> Package,</h1>
                <h1 className='hidden lg:block text-[60px] text-white font-gotham font-semibold leading-[45px] mb-10'>La Mia- Brand Product, Package,</h1>
                <p className='text-[20px] lg:text-[32px] text-white font-gotham font-normal leading-[28px] lg:leading-[40px]'>
                    Pure gelato with an Italian base and world flavors. <br /> <br />

                    Unlike traditional ice cream shops, where people eat on the spot, La Mia is an irresistible self-service store offering more than 50 flavors to fill your basket and freezer, and enjoy with your family. <br /> <br />

                    To celebrate the simple Italian way of making gelato, Papanapa was invited to build the verbal and visual universes of the brand and launch it to the market with consistent and joyful communication. <br /> <br />

                    In positioning, it was essential to communicate attributes such as accessibility in price, sophistication in experience, and made-to-consume at home. We arrived at the simple and sensorial tagline: “Gelato Conforto”. <br /><br />

                    From this central message, we derived a light and humorous verbal identity, which delights between flavors and creates comfortable dialogues across all channels and in more than 50 packages. <br /><br />

                    With the brand narrative defined, we created a simple and light wordmark that reflects the pure essence of La Mia. <br /><br />

                    For the visual identity system, in addition to an extensive color palette relating to each of the flavors and a surprising typographic combination, the studio created a series of illustrations of containers and popsicles interacting in delicate compositions. Its use on packaging, posters, social media, and uniforms gives the brand a unique and fun presence. <br /><br />

                    Emphasizing its welcoming personality, La Mia is already charismatic and distinct, ready to win the hearts of ice cream enthusiasts and comfortable moments. <br /><br />


                </p>
            </div>

            <div className='container mt-20'>
                <div>
                    <Image src={img_1} alt='la mia image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_2} alt='la mia image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_3} alt='la mia image' />
                </div>
                <div className='grid md:grid-cols-2 gap-2 mt-2'>
                    <Image src={img_4} alt='la mia image' />
                    <Image src={img_5} alt='la mia image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_6} alt='la mia image' />
                </div>
                <div className='grid md:grid-cols-3 grid-cols-2 gap-2 mt-2'>
                    <Image src={img_7} alt='la mia image' />
                    <Image src={img_8} alt='la mia image' />
                    <Image src={img_9} alt='la mia image' className='hidden md:block' />
                </div>
                <div className='grid md:grid-cols-3 grid-cols-2 gap-2 mt-2'>
                    <Image src={img_9} alt='la mia image' className='md:hidden' />
                    <Image src={img_10} alt='la mia image' />
                    <Image src={img_11} alt='la mia image' />
                    <Image src={img_12} alt='la mia image' />
                </div>
                <div className='grid md:grid-cols-2 grid-cols-2 gap-2 mt-2'>
                    <Image src={img_13} alt='la mia image' />
                    <Image src={img_14} alt='la mia image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_15} alt='la mia image' />
                </div>
                <div className='mt-2'>
                    <Image src={img_16} alt='la mia image' />
                </div>
            </div>
        </div>
    )
}

export default Index;   