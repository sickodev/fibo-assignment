/* eslint-disable @next/next/no-img-element */
"use client";
import {
    BellIcon,
    CalendarDaysIcon,
    ChatBubbleBottomCenterTextIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Comfortaa, Roboto } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const comfortaa = Comfortaa({ subsets: ["latin"], weight: ["300", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300"] });

const Navbar = () => {
    return (
        <nav
            className={`flex items-center justify-between gap-4 ${roboto.className}`}
        >
            <div className='flex items-center justify-between gap-4 px-2 mx-[2px]'>
                <img
                    src={`https://api.dicebear.com/6.x/notionists/svg?seed=user`}
                    alt='avatar'
                    style={{ objectFit: "cover" }}
                    height={50}
                    width={50}
                    className='rounded-full border-2 border-white cursor-pointer hover:shadow-lg hidden md:inline'
                />
                <h3
                    className={`sm:text-lg text-md font-bold ${comfortaa.className}`}
                >
                    Martha <span className='hidden sm:inline'>Kewleck</span>
                    <div className='hidden sm:flex items-center justify-between gap-1'>
                        <div className='rounded-full h-3 w-3 bg-emerald-400 mx-auto'></div>
                        <p className='text-sm font-light'>Project Manager</p>
                    </div>
                    <br />
                    <p className='text-slate-500 text-xs inline sm:hidden'>
                        Online
                    </p>
                </h3>
            </div>
            <motion.div
                className='md:w-96 flex items-center justify-between sm:px-4 sm:py-2 p-2 bg-gradient-to-r from-[#B79CED]/75 to-white rounded-full sm:rounded-2xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.input
                    type='text'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    placeholder='Search...'
                    className='hidden sm:inline outline-none bg-transparent placeholder:text-black/80'
                />
                <motion.button initial={{}} animate={{}}>
                    <MagnifyingGlassIcon className='h-6 w-6' />
                </motion.button>
            </motion.div>
            <div className='flex items-center gap-2'>
                <motion.button
                    initial={{
                        opacity: 0,
                        borderRadius: "0px",
                        padding: "0",
                        backgroundColor: "transparent",
                    }}
                    animate={{
                        opacity: 1,
                        borderRadius: "99px",
                        padding: "0.3rem",
                        backgroundColor: "#b79ced75",
                    }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                >
                    <BellIcon className='h-6 w-6' />
                </motion.button>
                <motion.button
                    initial={{
                        opacity: 0,
                        borderRadius: "0px",
                        padding: "0",
                        backgroundColor: "transparent",
                    }}
                    animate={{
                        opacity: 1,
                        borderRadius: "99px",
                        padding: "0.3rem",
                        backgroundColor: "#B79CED75",
                    }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                >
                    <ChatBubbleBottomCenterTextIcon className='h-6 w-6' />
                </motion.button>
            </div>
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileTap={{ scale: 0.8 }}
                className='flex items-center justify-between px-2 gap-2 py-2 bg-[#b79ced75] rounded-2xl'
            >
                <CalendarDaysIcon className='h-6 w-6' />
                <p className='hidden sm:inline'>27 Feb</p>
            </motion.button>
        </nav>
    );
};

export default Navbar;
