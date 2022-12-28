import React from 'react'

import SidebarItem from './SidebarItem'
import home from '../assets/icons/icon-24-dashboard.svg'
import shopping from '../assets/icons/bag.svg'
import { sideItems } from '../data'


const Sidebar = () => {

  return (
    <aside className='bg-[#eff9ff] py-14 px-2 h-full'>
      <ul className='flex flex-col gap-4'>
        {sideItems.map((item, index) => (
          <SidebarItem key={index} icon={item.icon} text={item.text} />
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar