import Image from 'next/image'
import Navbar from '../components/Navbar'
import Clients from '@/public/images/clients.png'
import Clients_mob from '@/public/images/clients_mob.png'
import { workImages } from '@/constants'
import Footer from '@/components/Footer'

const index = () => {
  return (
    <div className='bg-[#242424] w-full px-3 lg:px-0'>
      <Navbar />

      <div className='container'>
        <h1 className='text-[30px] text-white font-gotham font-semibold mt-40 mb-14 lg:hidden'>Elevating <br /> Brand Strategy, <br /> Design, and <br /> Crafting Innovation <br /> Into Success</h1>
        <h1 className='hidden lg:block text-[36px] text-white font-gotham font-semibold leading-[45px] mt-32 mb-28'>Elevating Brand Strategy, <br /> Design, and Crafting Innovation <br /> Into Success</h1>
        <p className='text-[20px] lg:text-[32px] text-white font-gotham font-normal leading-[28px] lg:leading-[40px]'>In 2016, our journey began as a humble design agency. By 2022, we took a significant step forward, incorporating as a private limited company. Today, we stand as a thriving enterprise, having served over 99+ clients and successfully delivered 150+ branding and marketing projects across the globe. In the world of food manufacturing, taste is often impeccable, but brand distinction is frequently overlooked. Many brand designers lack the specialized expertise to make culinary businesses truly shine. At our core, we exist to defy the ordinary and conquer the competitive landscape. We don't merely replicate others' work and bill for hours; we craft bespoke solutions that come with a premium commitment</p>
      </div>

      <div className='container'>
        <h1 className='text-[32px] lg:text-[45px] text-white text-center font-gotham font-semibold mt-20 lg:mt-20 mb-7'>Our Services</h1>

        <div className=' grid lg:grid-cols-4 sm:grid-cols-2 gap-5'>
          <div className='w-full h-80 p-1.5 text-[35px] text-[#242424] text-center font-semibold leading-[30px] bg-[#5D5D5D] flex items-center justify-center'>Brand Strategy</div>
          <div className='w-full h-80 p-1.5 text-[35px] text-[#242424] text-center font-semibold leading-[30px] bg-[#5D5D5D] flex items-center justify-center'>Brand Identity design</div>
          <div className='w-full h-80 p-1.5 text-[35px] text-[#242424] text-center font-semibold leading-[30px] bg-[#5D5D5D] flex items-center justify-center'>Marketing Strategy</div>
          <div className='w-full h-80 p-1.5 text-[35px] text-[#242424] text-center font-semibold leading-[30px] bg-[#5D5D5D] flex items-center justify-center'>Marketing Execution</div>
        </div>
      </div>

      <div className='container'>
        <h1 className='text-[32px] lg:text-[45px] text-white text-center font-gotham font-semibold mt-20 lg:mt-20 mb-7'>Our Clients</h1>

        <div className='flex items-center justify-center'>
          <Image src={Clients} alt='clients' className='hidden sm:block md:w-2/3' />
          <Image src={Clients_mob} alt='clients' className='sm:hidden' />
        </div>
      </div>

      <div className='container'>
        <h1 className='text-[32px] lg:text-[45px] text-white text-center font-gotham font-semibold mt-20 lg:mt-20 mb-7'>Our Works</h1>

        <div className='grid grid-cols-2 gap-2 lg:gap-5'>
          {
            workImages.map((image, index) => (
              <div key={index} className=''>
                <Image src={image} alt='work image' />
              </div>
            ))
          }
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default index