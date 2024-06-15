import React, { useEffect } from 'react'
import { kishu } from '../normalJs/script.js'
import Flex from '../layouts/Flex.jsx'
import { FaSearch } from "react-icons/fa";
// import rain from '../assets/rain.png'


const Weather = () => {

    useEffect(() => {
        kishu()
    }, [])

    return (
        <div id='weather_pic'>
            <div className="overlay">
                <div className='flex justify-center items-center'>
                    <input type="text" placeholder='search' className='mt-5 w-[375px] h-[45px] rounded-[10px] px-5 search_input' />
                    <button className='mt-5 ml-3 bg-white w-[30px] h-[45px] items-center rounded-[10px] search_btn'><FaSearch className='inline-block' /></button>
                </div>

                <div className='degree flex flex-col justify-center items-center mt-[10px]'>
                    {/* <img src={rain} alt="" className='weather_icon' /> */}
                    <div className="weather_icon">
                        
                    </div>
                    <h1 className='text-[50px] text-black  city'>Vancouver, CA</h1>
                    <h2 className='text-[75px] font-bold  temp' >16°<span className='text-[55px]'>C</span></h2>
                    <p className='text-[40px] text-white'>----------</p>
                </div>
            </div>
        </div>
    )
}

export default Weather