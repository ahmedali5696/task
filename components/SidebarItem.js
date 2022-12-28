import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const SidebarItem = ({ icon, text }) => {
  return (
    <li className='flex gap-3 px-8 py-2 items-center font-medium text-xl text-brand-1 hover:bg-[#b6fdff] transition-colors duration-300'>
      <div>
        <Image src={icon} alt={'icon'} />
      </div>
      <a href="#">
        {text}
      </a>
      <div className=' mr-auto'>
        <FontAwesomeIcon icon={faAngleLeft} size="sm" />
      </div>
    </li>
  )
}

export default SidebarItem