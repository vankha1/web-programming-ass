import { FaBars } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Cart from "../Cart/Cart";
import Navbar from "./Navbar";

const Header = (props) => {
    const [isMenuOpen, setMenuStatus] = useState(false);
    const scrollRef = props.scrollRef;
    const handleMenu = async () => {
        setMenuStatus(!isMenuOpen)
    }

    useEffect(() => {
        if(isMenuOpen) {
            scrollRef.current.className = "overflow-hidden h-screen";
        } else {
            scrollRef.current.className = "h-screen";
        }
    }, [isMenuOpen])


    return (
        <div className="w-full h-[8%] flex justify-between align-middle bg-gray-600">
            <div className="px-5 flex basis-1/3 items-center justify-between">
                <div className={`h-fit ${isMenuOpen ? "hidden" : "block"}`}>
                    <FaBars size={25} onClick={() => { handleMenu() }} />
                </div>
                <div className={`fixed inset-0 z-[99] w-screen bg-black/20 ${isMenuOpen ? "h-screen" : "h-0"}`}>
                    <div className={`flex h-full bg-white ${isMenuOpen ? 'w-1/2 lg:w-[25%]' : 'w-[0%]'} duration-[0.25s] transition-width ease-in-out`}>
                        <Navbar handleMenu={handleMenu} menuState={isMenuOpen}  />
                    </div>
                </div>
            </div>
            <div className="flex basis-1/3 justify-center items-center">
                <Link to="/">
                    <div className='m-auto w-40 md:w-80 h-8 flex justify-center items-center font-bold bg-black text-white'>
                        BKooler
                    </div>
                </Link>
            </div>
            <div className="flex basis-1/3 justify-end">
                <input className="h-1/2 w-1/3 md:w-1/2 mx-3 my-auto px-5 rounded focus:border-3 focus:border-gray-800" />
                <IoIosSearch className="my-auto hidden md:block" size={25} />
                <div className="relative inline-flex mx-0 md:mx-3 mr-3 my-auto">
                    <Cart scrollRef={scrollRef}/>
                </div>
                <Link to={"/user"} className="h-[90%] w-10">
                    <div className="h-full w-full mx-3 my-auto flex bg-black">
                        a
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default Header;