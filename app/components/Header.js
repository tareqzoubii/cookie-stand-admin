import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header(){
     return (
          <header>
               <nav className='flex flex-wrap items-center px-3 bg-green-900'>
                    <Link className='inline-flex items-center px-2 mr-4' href='/'>
                         <Image 
                              src='/assets/Cookies1-1.png'
                              width={90}
                              height={50}
                              alt="/"
                              >
                         </Image>
                         <span className='text-xl fonr-bold tracking-wide text-white uppercase'> Cookies Shop </span>
                         </Link>
                         <section>
                              <section>
                                   <Link className='items-center justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white' href='/'>Home</Link>
                                   <Link className='items-center justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white' href='/services'>Services</Link>
                                   <Link className='items-center justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white' href='/about'>About Us</Link>
                              </section>
                         </section>
               </nav>
          </header>
     )
}