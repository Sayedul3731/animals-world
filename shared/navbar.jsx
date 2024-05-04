import React from 'react';

const Navbar = () => {
    return (
        <div className='w-full bg-black  text-white shadow-white shadow-md py-7 uppercase'>
            <div className='max-w-7xl mx-auto flex justify-center items-center'>
                <ul className='flex justify-center items-center gap-5'>
                    <li className='hover:underline hover:text-[#fea435] cursor-pointer'>Home</li>
                    <li className='hover:underline hover:text-[#fea435] cursor-pointer'>Animals</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;