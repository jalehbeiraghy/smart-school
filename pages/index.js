import Image from 'next/image'
import Hero from '../components/Hero'
import Link from 'next/link'
import Head from 'next/head'
import { BsArrowRightShort, BsLayoutTextSidebar } from 'react-icons/bs';
import Faq from '@/components/Faq';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          نرم افزار مطب روانشناسی
        </title>
        <meta name="description" content='نرم افزارهای مدیریت روانشناسان'/>
        <meta name="theme-color" content='#e7e9eb'/>
        <Link ref="icon" href="/images/s2.jpg"/>
        
      </Head>
         <Hero/> 
  
    <div>
      <div>
        <p className=' flex justify-center font-extrabold text-4xl px-52 py-16 text-center'>
          shinsy has experienced in  psychololgy , mental health assistance , and healing alot of people.
        </p>


{/* number */}
        <div className='flex justify-center mb-10'>

          <div className='flex flex-col px-4'>
            <div className='flex justify-center items-center '>
              <p className=' text-4xl text-purple-500 font-bold '>670000+</p>
              <p className=' text-gray-500 pl-2 '>People</p>
            </div>
            <p className=' text-center'> are healed </p>
          </div>
          
          <div className='flex flex-col px-4 border-x-2'>
            <div className='flex justify-center items-center '>
              <p className=' text-4xl text-purple-500 font-bold '>670000+</p>
              <p className=' text-gray-500 pl-2 '>People</p>
            </div>
            <p className=' text-center'> are healed </p>
          </div>
          
          <div className='flex flex-col px-4'>
            <div className='flex justify-center items-center '>
              <p className=' text-4xl text-purple-500 font-bold '>670000+</p>
              <p className=' text-gray-500 pl-2 '>People</p>
            </div>
            <p className=' text-center'> are healed </p>
          </div>

         



        </div>

{/* /number */}









      </div>
      <div className=' flex-col'>
      <Link href='/index' className=' flex justify-center'>
                    <p className=' flex justify-center bg-green-100 text-green-600 text-sm rounded-2xl p-2'>psychological issues</p>
      </Link>
      <p className='  flex justify-center font-extrabold  text-4xl px-52 py-16 text-center '>
      psychological issues that we deal with
      </p>         
      </div>
      
      <div className=' flex justify-center items-center'>
        <div className=' grid grid-cols-3 gap-3 justify-center px-[15%]'>
          <div className='' >
            <Image src='/images/1.jpg' width='200' height='400'  className=' bg-black rounded-xl    h-64 object-cover'/>
            {/* <div className='w-full px-[10%]  h-64 rounded-xl flex justify-round items-center  '>
              <p className=' bg-gray-200  relative bottom-2'>Anxiety Problem</p>
              <BsArrowRightShort/>
            </div> */}
          </div>
                <div>
          <Image src='/images/6.jpg' width='200' height='400'  className=' bg-black rounded-xl   h-64 object-cover'/>
          </div>

          <div>
            <Image src='/images/2.jpg' width='200' height='400'  className=' bg-black rounded-xl   h-64 object-cover'/>
          </div>

          <div>
          <Image src='/images/5.jpg' width='200' height='400'  className=' bg-black rounded-xl   h-64 object-cover'/>
          </div>

          <div>
            <Image src='/images/3.jpg' width='200' height='400'  className=' bg-black rounded-xl   h-64 object-cover'/>
          </div>

          <div>
            <Image src='/images/4.jpg' width='200' height='400'  className=' bg-black rounded-xl  h-64 object-cover'/>
          </div>
        

          </div> 

      </div>
      <div>
        
        <div className=' pt-10'>
        <Link href='/' className=' flex justify-center'>
                    <p className=' flex justify-center bg-green-100 text-green-600 text-sm rounded-2xl p-2'>psychological issues</p>
      </Link>
        <p className=' flex justify-center font-extrabold text-4xl px-52 py-3 text-center'>
        shinsy has experienced in  psychololgy , mental health assistance , and healing alot of people.
      </p>
      </div>

      <div className=' flex w-full px-[15%] justify-center items-center space-x-2 pb-96 '>
      <div className=' flex w-1/2  '>

              <div className='relative inline-block '>
                 <Image src='/images/4.jpg' width='200' height='400'  className='  rounded-xl w-full h-full  object-cover'/>
                  <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4 bg-white text-balck whitespace-nowrap flex px-4 py-2 rounded'>
                       <div className='group w-full'>
                        {/* <div className='grid grid-cols-2'>
                          <Image src='/images/2.jpg' width='6' height='6'  className='  rounded-full w-6 h-6 object-contain'/>
                          <div className='flex-col'>
                            <p>11</p>
                            <p>11</p>

                          </div>

                        </div> */}
                        <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block ' />
                      </div>
                    me
                    </button>
              </div>
              










      </div>
          <div className=' flex flex-col w-1/2'>
            <div className=' flex flex-col rounded-lg'>
              <h3 className=' text-lg border-b-2 border-gray-600 mx-2 py-2'>Online 1 on 1 Consultation </h3>
              <p className =' text-gray-600 p-2 text-left text-sm'> the best online terapy & counseling experience from the werified professionals. </p>
            </div>
            
            <div className=' flex flex-col rounded-lg'>
              <h3 className=' text-lg border-b-2 border-gray-600 mx-2 py-2'>Online 1 on 1 Consultation </h3>
              <p className =' text-gray-600 p-2 text-left text-sm'> the best online terapy & counseling experience from the werified professionals. </p>
            </div>
           
            <div className=' flex flex-col rounded-lg'>
              <h3 className=' text-lg border-b-2 border-gray-600 mx-2 py-2'>Online 1 on 1 Consultation </h3>
              <p className =' text-gray-600 p-2 text-left text-sm'> the best online terapy & counseling experience from the werified professionals. </p>
            </div>

          </div>
      </div>



{/* Faq */}

<Faq/>
{/* Faq/ */}
        </div>
        
    </div>

  </div>
  )
}
