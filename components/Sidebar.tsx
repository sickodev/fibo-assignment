"use client";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import {
    ArrowRightCircleIcon,
    Bars3Icon,
    Cog6ToothIcon,
    CogIcon,
    HomeIcon,
    InformationCircleIcon,
    RectangleStackIcon,
    Squares2X2Icon,
    UserGroupIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Comfortaa, Roboto } from "next/font/google";

type Props = {
    className?: string;
};

const roboto = Roboto({ subsets: ["latin"], weight: ["300"] });
const comfortaa = Comfortaa({ subsets: ["latin"], weight: ["300", "700"] });
const Menu = ({ className }: Props) => {
    const controls = useAnimation();
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuOpen = () => {
        controls.start({ x: 0, opacity: 1 });
        // Perform any other necessary actions when the menu opens
    };

    const handleMenuClose = () => {
        controls.start({ x: -100, opacity: 0 });
        // Perform any other necessary actions when the menu closes
    };

    return (
        <div className={`top-0 z-30 md:hidden absolute ${className}`}>
            <motion.button
                onClick={() => {
                    setShowMenu(!showMenu);
                    if (showMenu) handleMenuClose();
                    else handleMenuOpen();
                }}
                initial={{ opacity: 1 }}
                whileHover={{
                    animation: "ease-in",
                    opacity: 0.5,
                    backgroundColor: "#B79CED",
                }}
                transition={{ duration: 0.3 }}
                className='rounded-full p-1 my-1 -mx-3'
            >
                {showMenu ? (
                    <XMarkIcon className='h-4 w-4' />
                ) : (
                    <Bars3Icon className='h-4 w-4' />
                )}
            </motion.button>

            <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.3 }}
            >
                <div
                    className={`py-12 items-center max-h-full justify-between w-screen h-screen z-10 sm:w-[250px] border-[0.8px] border-black/40 rounded-2xl`}
                >
                    <div className='cursor-default flex items-center justify-start my-4 group w-48'>
                        <Image
                            src={
                                "https://img.freepik.com/free-vector/butterfly-logo-colorful-gradient-illustrations_483537-972.jpg?w=740&t=st=1684358139~exp=1684358739~hmac=717bee490e21fb4e1523c1034ce9fba9093984af8531c427dbdb852ee8b8bcbd"
                            }
                            alt=''
                            width={50}
                            height={50}
                            className='my-2 group-hover:scale-110 group-hover:translate-x-4 transition-all duration-200 ease-in'
                        />
                        <h3 className='text-3xl mx-1 md:text-5xl font-bold group-hover:opacity-0 transition-all duration-200 ease-in'>
                            Qwilio
                        </h3>
                    </div>
                    <hr className='border-[1px] border-black/30 w-[200px] mx-auto' />
                    <div
                        className={`flex items-start flex-col justify-start px-8 my-6 ${roboto.className}`}
                    >
                        <Link
                            className='flex items-center justify-between gap-2 my-2 hover:scale-110 transition-all duration-200 ease-in active:scale-90'
                            href={"/"}
                        >
                            <HomeIcon className='h-5 w-5' />
                            <h5 className='text-xl'>Home</h5>
                        </Link>
                        <Link
                            className='flex items-center justify-between gap-2 my-2 hover:scale-110 transition-all duration-200 ease-in active:scale-90'
                            href={"/"}
                        >
                            <Squares2X2Icon className='h-5 w-5' />
                            <h5 className='text-xl'>Projects</h5>
                        </Link>
                        <Link
                            className='flex items-center justify-between gap-2 my-2 hover:scale-110 transition-all duration-200 ease-in active:scale-90'
                            href={"/"}
                        >
                            <RectangleStackIcon className='h-5 w-5' />
                            <h5 className='text-xl'>Tasks</h5>
                        </Link>
                        <Link
                            className='flex items-center justify-between gap-2 my-2 hover:scale-110 transition-all duration-200 ease-in active:scale-90'
                            href={"/"}
                        >
                            <UserGroupIcon className='h-5 w-5' />
                            <h5 className='text-xl'>Team</h5>
                        </Link>
                        <Link
                            className='flex items-center justify-between gap-2 my-2 hover:scale-110 transition-all duration-200 ease-in active:scale-90'
                            href={"/"}
                        >
                            <Cog6ToothIcon className='h-5 w-5' />
                            <h5 className='text-xl'>Settings</h5>
                        </Link>
                        <div className='py-8'></div>

                        <motion.button
                            className='p-2 rounded-2xl border-2 border-black'
                            initial={{ backgroundColor: "transparent" }}
                            animate={{
                                backgroundColor: "#7161EF",
                                borderColor: "transparent",
                                color: "white",
                            }}
                            whileHover={{
                                scale: 1.1,
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.h5
                                className={`${comfortaa.className} font-bold flex items-center gap-4`}
                            >
                                Upgrade to Pro
                                <ArrowRightCircleIcon className='h-5 w-5' />
                            </motion.h5>
                        </motion.button>

                        <div className='py-8'></div>
                        <div className='px-4 py-2'>
                            <Link
                                href={"/"}
                                className='block hover:scale-110 transition-all duration-200 ease-in'
                            >
                                <p>Help & Information</p>
                            </Link>
                            <Link
                                href={"/"}
                                className='block hover:scale-110 transition-all duration-200 ease-in'
                            >
                                <p>Contact Us</p>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Menu content goes here */}
            </motion.div>
        </div>
    );
};

export default Menu;
