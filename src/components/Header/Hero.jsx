import React from 'react';

const Hero = () => {
    return (
        <div
            className="hero min-h-[500px] "
            style={{
                backgroundImage:
                    "url(https://i.ibb.co.com/gL6mMkDT/Banner-min.jpg)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="flex flex-col justify-start items-start text-neutral-content  w-full ml-48">
                <div className="  w-1/3 ">
                    <h1 className="mb-5 text-3xl font-bold">Bid on Unique Items from Around the World</h1>
                    <p className="mb-5">
                        Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                    </p>
                    <button className="btn rounded-xl">Explore Auctions</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;