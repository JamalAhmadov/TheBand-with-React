import React from 'react'

const NavbarItem = (props) => {
  return (
    <div className='h-12 w-24 flex cursor-pointer items-center justify-center  hover:bg-stone-400 hover:text-black'>
        <a className='flex items-center' href={props.page}>{props.text}{props.icon}</a>
    </div>
  )
}

export default NavbarItem
