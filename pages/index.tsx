import Image from 'next/image'
import Clients from '@/public/images/clients.png'
import Clients_mob from '@/public/images/clients_mob.png'
import { workImages } from '@/constants'
import Link from 'next/link'
import icon_1 from '@/public/images/icon_1.png'
import icon_2 from '@/public/images/icon_2.png'
import icon_3 from '@/public/images/icon_3.png'
import icon_4 from '@/public/images/icon_4.png'

const index = () => {
  return (
    <div className='w-full px-4 lg:px-0 pt-32'>
      <section id='about' className='container'>
        <h1 className='text-[30px] text-white font-gotham font-semibold mb-14 lg:hidden'>Elevating <br /> Brand Strategy, <br /> Design, and <br /> Crafting Innovation <br /> Into Success</h1>
        <h1 className='hidden lg:block text-[60px] text-white font-gotham font-semibold leading-[65px] mb-28'>Elevating Brand Strategy, <br /> Design, and Crafting Innovation <br /> Into Success</h1>
        <p className='text-[20px] lg:text-[32px] text-white font-gotham font-normal leading-[28px] lg:leading-[40px]'>In 2016, our journey began as a humble design agency. By 2022, we took a significant step forward, incorporating as a private limited company. Today, we stand as a thriving enterprise, having served over 99+ clients and successfully delivered 150+ branding and marketing projects across the globe. In the world of food manufacturing, taste is often impeccable, but brand distinction is frequently overlooked.  Many brand designers lack the specialized expertise to make culinary businesses truly shine. At our core, we exist to defy the ordinary and conquer the competitive landscape. We don't merely replicate others' work and bill for hours; we craft bespoke solutions that come with a premium commitment</p>
      </section>

      <section id='services' className='container services'>
        <h1 className='text-[32px] lg:text-[45px] text-white text-center font-gotham font-semibold mt-20 lg:mt-20 mb-7'>Our Services</h1>

        <div className=' grid lg:grid-cols-4 sm:grid-cols-2 gap-5'>
          <div className='w-full h-[40vh] py-10 text-[35px] text-[#242424] text-center font-semibold bg-[#5D5D5D] flex flex-col items-center justify-around'>
            <div className='flex items-center justify-center'>
              <Image src={icon_1} alt='' className='w-[80%]' />
            </div>
            <p className='leading-[35px]'>
              Brand <br /> Strategy
            </p>
          </div>
          <div className='w-full h-[40vh] py-10 text-[35px] text-[#242424] text-center font-semibold bg-[#5D5D5D] flex flex-col items-center justify-around'>
            <div className='flex items-center justify-center'>
              <Image src={icon_2} alt='' className='w-[80%]' />
            </div>
            <p className='leading-[35px]'>
              Brand Identity <br /> design
            </p>
          </div>
          <div className='w-full h-[40vh] py-10 text-[35px] text-[#242424] text-center font-semibold bg-[#5D5D5D] flex flex-col items-center justify-around'>
            <div className='flex items-center justify-center'>
              <Image src={icon_3} alt='' className='w-[80%]' />
            </div>
            <p className='leading-[35px]'>
              Marketing <br /> Strategy
            </p>
          </div>
          <div className='w-full h-[40vh] py-10 text-[35px] text-[#242424] text-center font-semibold bg-[#5D5D5D] flex flex-col items-center justify-around'>
            <div className='flex items-center justify-center'>
              <Image src={icon_4} alt='' className='w-[80%]' />
            </div>
            <p className='leading-[35px]'>
              Marketing <br /> Execution
            </p>
          </div>
        </div>
      </section>

      <div className='container'>
        <h1 className='text-[32px] lg:text-[45px] text-white text-center font-gotham font-semibold mt-20 lg:mt-20 mb-7'>Our Clients</h1>

        <div className='flex items-center justify-center'>
          <Image src={Clients} alt='clients' className='hidden sm:block md:w-2/3' />
          <Image src={Clients_mob} alt='clients' className='sm:hidden' />
        </div>
      </div>

      <section id='works' className='container'>
        <h1 className='text-[32px] lg:text-[45px] text-white text-center font-gotham font-semibold mt-20 lg:mt-20 mb-7'>Our Works</h1>

        <div className='grid grid-cols-2 gap-2 lg:gap-5'>
          {
            workImages.map((item, index) => (
              <Link href={{ pathname: `/${item.pathname}` }} key={index} className=' overflow-hidden'>
                <Image src={item.image} alt='work image' className='hover:scale-125 transition-transform duration-300' />
              </Link>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default index