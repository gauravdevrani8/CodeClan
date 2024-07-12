import { Typography } from '@material-tailwind/react';
import React, { useContext } from 'react';
import myContext from '../../Context/Data/MyContext';
import backgroundImage from '../../assets/bg.jpg'; // Update with your actual image path

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <section className="relative py-24">
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b',
                }}
                className="absolute inset-0"
            />
            <div className="bg-black bg-opacity-20 absolute inset-0" /> 
            <div className="container mx-auto relative flex flex-col items-center justify-center text-center">
                {/* Main Content */}
                <div className="mb-8">
                    {/* Image */}
                    <div className="flex justify-center mb-4">
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/2888/2888407.png"
                            alt="Code Clan Logo"
                            className="h-16 w-16"
                        />
                    </div>
                    {/* Text */}
                    <h1 className="text-4xl text-white font-bold transition duration-300 hover:underline">Code Clan</h1>
                </div>

                {/* Paragraph */}
                <p
                    style={{ color: mode === 'dark' ? 'white' : 'white' }}
                    className="text-xl sm:text-2xl font-light sm:mx-auto max-w-2xl"
                >
                    Discover insightful blogs and tutorials contributed by Code Clan members.
                </p>
            </div>
        </section>
    );
}

export default HeroSection;
