import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='bg-gray-800 w-full'>

        <div className=' p-2 flex border-b-2 border-white '>
            
            <div id="social" className='p-2 mx-2 text-white text-xs flex flex-col font-sansw-1/3'>
            <span className='text-lg font-semibold font-mono'>Socials</span>
                <a href="#" className='py-1 hover:underline underline-offset-2 '>Instagram</a>
                <a href="#" className='py-1  hover:underline underline-offset-2'>Twitter</a>
                <a href="#" className='py-1 hover:underline underline-offset-2'>YouTube</a>
            </div>

            <div id="help" className='p-2 mx-2 text-white text-xs flex flex-col font-sans border-r-[1px] border-white w-1/3'>
            <span className='text-lg font-semibold font-mono'>Help</span>
                <a href="#" className='py-1 hover:underline underline-offset-2'>Payment</a>
                <a href="#" className='py-1 hover:underline underline-offset-2'>Shipping</a>
                <a href="#" className='py-1 hover:underline underline-offset-2'>Cancellation & Return </a>
                <a href="#" className='py-1 hover:underline underline-offset-2'>FAQ </a>

            </div>
            <div id="help" className='p-2 mx-2 text-white text-xs flex flex-col font-sans w-1/3'>
            <span className='text-lg font-semibold font-mono'>Office Address</span>
               <div>neeraj.jain@flipkart.com; Registered Office Address: Vaishnavi Summit, Ground Floor, 7th Main, 80 Feet Road, 3rd Block, Koramangala Industrial Layout ...</div>
            </div>
          
        </div>
        <div className=' p-2 text-white text-xs text-center'>&copy; all rights reserved </div>
    </div>
    </>
  )
}

export default Footer