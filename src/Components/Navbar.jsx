import React, { useState } from 'react'

import { Link } from 'react-router-dom'
const Navbar = () => {
    const navStyle = 'h-full flex items-center px-2 hover:text-white hover:bg-black duration-300 hover:ring-1 hover:ring-inset hover:ring-white'
    const [searchFlag, setSearchFlag] = useState(true);
    return (
        <>
            <header className=' h-[6vh] w-screen bg-white text-black text-xs font-normal font-mono tracking-wider ring-1 ring-inset ring-black  flex  items-center justify-start z-10' >
                <Link to={'/'} className=' text-2xl  font-black font-mono  h-full p-2'>#Style</Link>

                <nav className='flex justify-between h-full w-full '>

                    <div className={`first-half  flex items-center  px-2  duration-200 ${searchFlag ? 'opacity-1' : 'opacity-0'} `}>
                        <Link to={'/new'} className={`${navStyle} `} > New</Link>
                        <Link to={'/men'} className={`${navStyle} `}> Men</Link>
                        <Link to={'/women'} className={`${navStyle} `}> Women</Link>
                    </div>

                    <div className="second-half flex justify-end  items-center mr-2 ">
                        <Link className={`h-full flex items-center px-2 relative  `} title='Search'>
                            <input type='text' className={` p-2 w-[50vw] rounded-lg border-2 border-black outline-none right-0 absolute ${searchFlag ? 'opacity-0 hidden' : 'opacity-1'}  duration-300`} />
                            <span className={`${searchFlag ? 'rotate-0' : 'rotate-180'} duration-300 `} onClick={() => setSearchFlag(!searchFlag)}>
                                {searchFlag ?
                                    <i class="fa-solid fa-magnifying-glass"></i> :
                                    <i class="fa-solid fa-xmark"></i>}
                            </span>
                        </Link>
                        <Link className={`${navStyle} `} title='Cart'> <i class="fa-solid fa-cart-arrow-down"></i></Link>
                        <Link className={`${navStyle} `} title='Login'><i class="fa-solid fa-right-to-bracket"></i></Link>
                        {/* <Link className={navStyle}> <i class="fa-regular fa-address-card"></i></Link> --------Profile----- */}
                    </div>

                </nav>
            </header>
        </>
    )
}

export default Navbar