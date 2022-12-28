import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import profile from '../assets/img/profile.jpg'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <nav className='p-5 bg-brand-1 text-grayColor-100'>
      <div className={`${!showNav ? 'max-[540px]:h-7' : 'max-[540px]:h-auto'} overflow-hidden flex max-[540px]:flex-col gap-7 sm:gap-20 md:gap-40 xl:gap-52 items-center relative`}>

        <Link href='/' className='max-[540px]:ml-auto'>
          <div className='flex gap-2'>
            <svg id="icon_24_home" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <rect id="Bounding_box" data-name="Bounding box" width="24" height="24" fill="rgba(255,255,255,0)" />
              <path id="Icon_color" data-name="Icon color" d="M17,18H12a1,1,0,0,1-1-1V11.25a.25.25,0,0,0-.25-.25H7.25a.25.25,0,0,0-.25.25V17a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V9.24A2.981,2.981,0,0,1,.88,7.12L7.71.29A.993.993,0,0,1,8.41,0H9.59a.993.993,0,0,1,.7.29l6.83,6.83A2.981,2.981,0,0,1,18,9.24V17A1,1,0,0,1,17,18ZM6,9h6a1,1,0,0,1,1,1v6h3V9.24a.994.994,0,0,0-.29-.7L9.17,2H8.83L2.29,8.54a.994.994,0,0,0-.29.7V16H5V10A1,1,0,0,1,6,9Z" transform="translate(3 3)" fill="#FAFAFA" />
            </svg>
            <h1 className=' text-xl'>الموقع</h1>
          </div>
        </Link>

        <div className='flex gap-2 items-center'>
          <div>
            <Image className='rounded-full' src={profile} width={30} height={30} alt='Profile Photo' />
          </div>
          <svg id="icon-24-chevron_down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <rect id="Bounding_box" data-name="Bounding box" width="24" height="24" fill="rgba(255,255,255,0)" />
            <path id="Icon_color" data-name="Icon color" d="M6.718,6.708a.75.75,0,0,1-.53.22h-.38a.77.77,0,0,1-.53-.22L.148,1.568a.5.5,0,0,1,0-.71l.71-.71a.49.49,0,0,1,.7,0L6,4.6l4.44-4.45a.5.5,0,0,1,.71,0l.7.71a.5.5,0,0,1,0,.71Z" transform="translate(6.002 9.072)" fill="#1DBBBE" />
          </svg>
          <p className='text-sm'>احمد علي عبدالوهاب</p>

          <div className='flex gap-2 mr-7 items-end'>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 29" className=' cursor-pointer'>
              <g id="icon-Notification" transform="translate(0 2)">
                <path id="Notification_Icon" data-name="Notification Icon" d="M7.875,18.375h5.25a2.625,2.625,0,0,1-5.25,0ZM1.312,17.063a1.312,1.312,0,1,1,0-2.625h.657A5.714,5.714,0,0,0,3.937,10.5V6.563A6.5,6.5,0,0,1,10.5,0a6.5,6.5,0,0,1,6.562,6.563V10.5a5.711,5.711,0,0,0,1.969,3.938h.657a1.312,1.312,0,1,1,0,2.625Z" transform="translate(0 6)" fill="#1DBBBE" />
                <g id="Notification_Badge" data-name="Notification Badge" transform="translate(14)" fill="#ffc06a" stroke="#fff" strokeWidth="2">
                  <ellipse cx="5.5" cy="5" rx="5.5" ry="5" stroke="none" />
                  <ellipse cx="5.5" cy="5" rx="6.5" ry="6" fill="none" />
                </g>
              </g>
            </svg>

            <svg id="list_email" data-name="list email" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className=' cursor-pointer'>
              <g id="icon-24-email">
                <rect id="Bounding_box" data-name="Bounding box" width="24" height="24" fill="rgba(255,255,255,0)" />
                <path id="Icon_color" data-name="Icon color" d="M18,16H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H18a2,2,0,0,1,2,2V14A2,2,0,0,1,18,16ZM2,4.9V7l6.35,4.45a2.878,2.878,0,0,0,3.3,0L18,7V4.9L10.65,10.05a1.141,1.141,0,0,1-1.3,0Z" transform="translate(2 4)" fill="#1DBBBE" />
              </g>
            </svg>
          </div>
        </div>

        <div className='flex md:basis-96 rounded-3xl overflow-hidden bg-[#045172]'>
          <label htmlFor="search">
            <div className=' bg-brand-2 p-2 rounded-b-3xl cursor-pointer'>
              <svg id="icon_24_search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className=''>
                <rect id="Bounding_box" data-name="Bounding box" width="24" height="24" fill="rgba(255,255,255,0)" />
                <path id="Icon_color" data-name="Icon color" d="M16.8,18a.5.5,0,0,1-.355-.149l-4-4a2.683,2.683,0,0,1-.3-.361l-.75-1a7.026,7.026,0,0,1-4.37,1.532H7A7.01,7.01,0,0,1,3.974.69a6.991,6.991,0,0,1,8.518,1.971,7.016,7.016,0,0,1-.046,8.753l1,.691a2.471,2.471,0,0,1,.43.35l4,4.005a.5.5,0,0,1-.02.691l-.7.7A.5.5,0,0,1,16.8,18ZM7.025,2a5.008,5.008,0,1,0,5,5.007A5.009,5.009,0,0,0,7.025,2Z" transform="translate(3 3)" fill="#FAFAFA" />
              </svg>
            </div>
          </label>
          <input className=' bg-[transparent] px-5 w-full' placeholder='هنا ستجد ما تبحث عنه' type="text" name="search" id="search" />
        </div>

        <button className=' hidden max-[540px]:block absolute left-0 cursor-pointer' onClick={() => setShowNav(prev => !prev)}>
          <svg id="burger_side_bar" data-name="burger side bar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g id="icon-24-menu_burger">
              <rect id="Bounding_box" data-name="Bounding box" width="24" height="24" fill="rgba(0,0,0,0%)" />
              <path id="Icon_color" data-name="Icon color" d="M17.5,14H.5a.5.5,0,0,1-.5-.5v-1A.5.5,0,0,1,.5,12h17a.5.5,0,0,1,.5.5v1A.5.5,0,0,1,17.5,14Zm0-6H.5A.5.5,0,0,1,0,7.5v-1A.5.5,0,0,1,.5,6h17a.5.5,0,0,1,.5.5v1A.5.5,0,0,1,17.5,8Zm0-6H.5A.5.5,0,0,1,0,1.5V.5A.5.5,0,0,1,.5,0h17a.5.5,0,0,1,.5.5v1A.5.5,0,0,1,17.5,2Z" transform="translate(3 5)" fill='#FAFAFA'/>
            </g>
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar