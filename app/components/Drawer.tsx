import React from 'react'

const Drawer = () => {
  return (
    <div className="drawer-side z-50">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-center items-center space-y-4 no-underline rounded-box">
      <li className="text-center">
        <a href="/" className="cursor-pointer">Home</a>
      </li>
      <li className="text-center">

        <a href='/product' className="cursor-pointer">Product</a>
      </li>
    </ul>
  </div>
  )
}

export default Drawer