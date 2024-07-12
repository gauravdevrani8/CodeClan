import React, { useContext } from 'react';
import myContext from '../../Context/Data/MyContext';

function Footer() {
    const context = useContext(myContext);
    const { mode } = context;
    
    return (
        <footer className="body-font" style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#EEEEEE' }}>
            <div className="container px-5 py-5 mx-auto flex items-center flex-col md:flex-row">
                {/* Logo Section */}
                <div className="flex title-font font-medium items-center justify-center text-gray-300 mb-4 md:mb-0">
                    <img className='w-10' src="https://cdn-icons-png.flaticon.com/128/2888/2888407.png" alt="Code Clan Logo" />
                    <span className="ml-3 text-xl">Code Clan</span>
                </div>

                {/* Copyright Section */}
                <p className="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-700 sm:py-2 sm:mt-0 mt-4">
                    © 2023 Code Clan
                </p>
                
                {/* Social Media Icons */}
                <span className="inline-flex justify-center mt-4 md:mt-0">
                    <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
                        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                    </a>

                    <a href="#" className="ml-3 text-gray-400 hover:text-gray-300 transition-colors duration-300">
                        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                    </a>

                    <a href="#" className="ml-3 text-gray-400 hover:text-gray-300 transition-colors duration-300">
                        <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                        </svg>
                    </a>

                    <a href="#" className="ml-3 text-gray-400 hover:text-gray-300 transition-colors duration-300">
                        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                            <circle cx={4} cy={4} r={2} />
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
