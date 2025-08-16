import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="  flex justify-around items-center my-2">
                <div className=" ">
                    <a className="text-2xl "><span className='text-[#003EA4]'>Action</span><span className='text-[#FFD337] font-bold'>Gallery</span></a>
                </div>
                <div className='flex gap-10'>
                    <a href="">Home</a>
                    <a href="">Auction</a>
                    <a href="">Categories</a>
                    <a href="">How To Works</a>
                </div>
                <div className="flex-none">

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                       
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;