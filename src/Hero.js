import React from 'react';

const Hero = () => {
    return (
        <div
            className="hero min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url('https://wallpapers.com/images/hd/rick-and-morty-unamused-rick-agpuysmhk3lhdl4p.jpg')`,
            }}
        >
            <div className="hero-content flex-col lg:flex-row bg-opacity-75 p-10">
                <div className="text-white">
                    <h1 className="text-5xl font-bold">Rick and Morty WIKI</h1>
                    <p className="py-6">
                        Tenemos todos los personajes de la serie y
                        información importante de cada uno de ellos! <span className='text-transparent'>
                            Tenemos todos los personajes de la serie y
                            información importante de cada uno de ellos!</span>

                    </p>
                    <button className="btn btn-primary bg-blue-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
