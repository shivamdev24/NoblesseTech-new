import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image'
import BgImage from '@/assets/bgImg.png'

const ContactCTA = () => {
    const handleCall = () => {
        window.location.href = 'tel:+1 (236) 238-1642';
    };

    const handleEmail = () => {
        window.location.href = 'mailto:admin@tecklo.co';
    };

    return (
        <div className='relative overflow-hidden'>
            <Image src={BgImage} alt={"bg img"} width={1000} height={1000} className="w-full h-full
             absolute -z-50 top-0 left-0 object-fit  object-center" />
            <div className=" h-[90vh] md:h-[90vh] w-full -z-20 absolute top-0 left-0 bg-black opacity-[.3]">
            </div>
            <div className="p-6  flex py-20 flex-col lg:flex-row justify-between items-center max-w-5xl mx-auto">
                <div className='max-w-2xl text-white mx-auto text-center lg:text-start'>
                    <h2 className="text-xl lg:text-5xl font-semibold mb-4">Get in Touch with Us!</h2>
                    <p className="mb-4 text-sm">
                        Whether you have questions, need assistance, or want to discuss your project,
                        we&apos;re here to help! Reach out to us through the options below, and our team will
                        get back to you as soon as possible.
                    </p>
                </div>
                <div className="flex flex-col items-center w-full space-y-4 ">
                    <a
                        href="tel:+91 88270 15401"
                        className="bg-white text-black font-bold py-2 w-full lg:w-80 text-center px-4 rounded transition duration-200 hover:bg-gray-200 flex items-center"
                    >
                        <FaPhoneAlt className="mr-2" />
                        Call Us: +91 88270 15401
                    </a>
                    <a
                        href="mailto:admin@noblessetech.com"
                        className="bg-blue-800 text-white w-full lg:w-80  py-2 px-4 text-center rounded transition duration-200 hover:bg-blue-600 flex items-center"
                    >
                        <FaEnvelope className="mr-2" />
                        Email: admin@noblessetech.com
                    </a>
                </div>
            </div>
       </div>
    );
};

export default ContactCTA;
