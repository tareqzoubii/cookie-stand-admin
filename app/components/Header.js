import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useContext } from 'react';
import {ThemeContext} from '../contexts/theme'

export default function Header() {

     const {isDarkTheme, toggleThemeHandler} = useContext(ThemeContext);
     console.log(useContext(ThemeContext));

  return (
    <header>
      <nav className="flex flex-wrap items-center px-3 bg-green-900">
        <Link className="inline-flex items-center px-2 mr-4" href="/">
          <Image
            src="/assets/Cookies1-1.png"
            width={90}
            height={50}
            alt="/"
          ></Image>
        </Link>
        <section>
          <section>
            <Link
              className="items-center justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white"
              href="/"
            >
              Home
            </Link>
            <Link
              className="items-center justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="items-center justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white"
              href="/about"
            >
              About Us
            </Link>
            <button
                    type="button"
                    className="items-center justify-center w-full px-3 py-2 font-bold- text-white rounded lg:inline-flex lg:w-auto hover:bg-cyan-700 hover:text-white"
                    onClick={toggleThemeHandler}
              >Change Theme
            </button>
          </section>
        </section>
      </nav>
    </header>
  );
}

