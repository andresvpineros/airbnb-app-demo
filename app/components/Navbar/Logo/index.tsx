'use client'

import Image from "next/image"

export const Logo = () => {

    return (
        <Image 
            alt="logo"
            className="hidden md:block cursor-pointer"
            height={100}
            width={100}
            src="/svg/Airbnb_Logo.svg" 
        />
    )
}