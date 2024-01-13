import React, {  useState } from 'react'

import { Link } from 'react-router-dom'
const Navbar = () => {
    const [searchFlag, setSearchFlag] = useState(true);
    const [search, setSearch] = useState('');
    const [active, setActive] = useState('');
    const navStyle = 'h-full flex items-center px-2 hover:text-white hover:bg-black duration-300 hover:ring-1 hover:ring-inset hover:ring-white'

    const handleSearch = e => {
        if (e.key === 'Enter') {
            setSearchFlag(!false);

        }
    }

    return (
        <>
            <header className='overflow-hidden h-[6vh] w-auto sticky top-0 bg-white text-black text-xs font-normal font-mono tracking-wider border-b-2 border-b-black  flex  items-center justify-start z-10' >
                <Link to={'/'} className={` text-2xl  font-black font-mono  h-full p-2 duration-200 `} onClick={() => setActive('style')}>{searchFlag ? '#Style' : '#'}</Link>

                <nav className='flex justify-between h-full w-full  '>

                    <div className={`first-half flex items-center  px-1  duration-200 ${searchFlag ? 'opacity-1' : 'opacity-0'} `}>
                        <Link to={'/men'} className={`${navStyle} ${active === 'men' && 'bg-black text-white'}`} onClick={() => setActive('men')}> Men</Link>
                        <Link to={'/women'} className={`${navStyle} ${active === 'women' && 'bg-black text-white'}  `} onClick={() => setActive('women')}> Women</Link>
                        <Link to={'/new'} className={`${navStyle} ${active === 'new' && 'bg-black text-white'} `} onClick={() => setActive('new')}> New</Link>
                    </div>

                    <div className="second-half flex justify-end  items-center   ">
                        <Link className={`h-full w-7 flex items-center px-2 relative `} title='Search'>
                            <input type='text'
                                className={` p-2 pr-5 w-[50vw] rounded-lg border-2 border-black outline-none right-0 absolute ${searchFlag ? 'opacity-0 -z-10' : 'opacity-1'}  duration-500`}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onKeyDown={(e) => handleSearch(e)}
                                placeholder='Search Here'
                                draggable="ture"
                            />
                            <span className={`   ${searchFlag ? 'rotate-0' : 'rotate-180'} duration-300  `} onClick={() => setSearchFlag(!searchFlag)}>
                                {searchFlag ?
                                    <i className="fa-solid fa-magnifying-glass "></i> :
                                    <i className="fa-solid fa-xmark w-full"></i>}
                            </span>
                        </Link>

                        <Link to={'/fav'} className={`${navStyle}  ${active === 'fav' && 'bg-black text-white'}`} onClick={() => setActive('fav')} title='Cart'> <i className="fa-solid fa-heart"></i></Link>
                        <Link to={'/cart'} className={`${navStyle} ${active === 'cart' && 'bg-black text-white'} `} onClick={() => setActive('cart')} title='Cart'> <i className="fa-solid fa-cart-arrow-down"></i></Link>
                        <Link className={`${navStyle}  ${active === 'login' && 'bg-black text-white'}`} onClick={() => setActive('login')} title='Login'><i className="fa-solid fa-right-to-bracket"></i></Link>
                        {/* <Link className={navStyle}> <i className="fa-regular fa-address-card"></i></Link> --------Profile----- */}
                    </div>

                </nav>
            </header>
        </>
    )
}

export default Navbar