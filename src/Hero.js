import React from 'react';

const Hero = () => {
    return (
        <div
            className="hero min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url('https://i.pinimg.com/originals/bc/da/31/bcda316d54ffe83c0415ab06a1866ecf.jpg')`,
            }}
        >
            <div className="hero-content flex-col lg:flex-row bg-opacity-75 p-10">
                <div className="text-white">
                    <h1 className="text-7xl font-bold">Rick and Morty WIKI</h1>
                    <p className="py-6 text-lg">
                        In this web page we will show you all the characters that appear in Rick & Morty and valuable information.<span className='text-transparent'>
                            Tenemos todos los personajes de la serie y
                            información importante de cada uno de ellos!</span>

                    </p>
                    <p className='text-lg'>Get Started ⬇️ ⬇️ </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
