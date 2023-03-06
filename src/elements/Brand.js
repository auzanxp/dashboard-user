import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Brand({ isSmall }) {
    const [animate, setAnimate] = useState({
        logo: '',
        brand: false,
    });

    const animateBrand = (status) => {
        if (status) {
            setAnimate({
                logo: 'animate-bounce',
                brand: 'text-yellow-400',
            });
        } else {
            setAnimate({
                logo: '',
                brand: '',
            });
        }
    };
    return (
        <Link
            to="/"
            className="flex items-center gap-3 cursor-pointer"
            onMouseEnter={() => animateBrand(true)}
            onMouseLeave={() => animateBrand(false)}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${isSmall ? 'h-4 w-4 sm:h-6 sm:w-6' : 'h-6 w-6 sm:h-8 sm:w-8'
                    } transition duration-500 drop-shadow-lg ${animate.logo} ${animate.brand ? 'text-amber-400' : 'text-gray-800 dark:text-gray-100'
                    }`}
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                    clipRule="evenodd"
                />
            </svg>
            <h2
                className={`${isSmall ? 'text-md sm:text-lg' : 'text-lg sm:text-xl'
                    }drop-shadow-lg font-bold  uppercase tracking-wider transition duration-500 ${animate.brand ? 'text-amber-400' : 'text-gray-800 dark:text-gray-100'
                    }`}
            >
                Dashboard
            </h2>
        </Link>
    );
}
