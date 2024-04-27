import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Cart_Item from "../components/Cart/Cart_item";
import useFetchCart from "../customizes/useFetchCart";

const appName = "BKooler";

const CartMobile = () => {
    //const userId = document.cookie.split(';')[0];  
    const userId = 2; 
    const {data, trigger} = useFetchCart(userId);

    const handleShipping = useCallback(() => {
        //TODO
    }, [])
    
 return (
    <>
    <div className='px-5 py-3 border border-gray-100'>
        <h1 className='title'>Giỏ hàng của bạn</h1>
    </div>
    <div className="h-fit w-screen overflow-auto">
            {
                data ? data.map((i, index) => <Cart_Item isMobile={true} data={data[index]} key={index} trigger={trigger}></Cart_Item>) : null
            }
        <div className="h-15 w-screen p-2">
            <button className="h-full w-full btn-primary rounded-md"
            onClick={() => {handleShipping()}}
            >
                Mua
            </button>
        </div>
    </div>
    </>
 )
}

export default CartMobile;