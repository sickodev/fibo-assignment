"use client";
import { ChevronUpIcon, ShareIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import FoodCard from "./components/FoodCard";
import OfferCard from "./components/OfferCard";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["500"] });

export default function Home() {
    return (
        <main className='overflow-y-scroll scrollbar-hide'>
            <div
                className='bg-fixed bg-cover w-screen h-[75vh] flex flex-col justify-between'
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                }}
            >
                <motion.button
                    type='button'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    whileTap={{ scale: 0.7 }}
                    className='h-10 p-1 ml-auto my-1 mr-1 rounded-full flex items-center justify-center w-10 bg-gray-100/20'
                >
                    <ShareIcon className='h-7 w-7 text-white' />
                </motion.button>
                <div className='bg-gradient-to-b from-transparent to-black w-screen h-48'></div>
            </div>
            <div className='bg-black text-white py-2'>
                <div className='flex items-center gap-3 px-4 py-2'>
                    <Image
                        src={
                            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
                        }
                        alt=''
                        width={50}
                        height={50}
                        className='rounded-full'
                    />
                    <div>
                        <h4 className='text-lg font-bold'>Bhardwaj Center</h4>
                        <p className='text-sm text-gray-400'>Food Influencer</p>
                    </div>
                </div>
                <div className='bg-[#28333A] py-4 px-2 rounded-t-[20px] overflow-y-scroll scrollbar-hide'>
                    <div className='flex flex-col justify-center mx-2'>
                        <ChevronUpIcon className='h-6 w-6 mx-auto' />
                        <h3 className='text-xl font-bold'>Food Center</h3>
                        <div className='pt-6 flex items-center justify-start gap-4'>
                            <h3 className='text-xl'>Noodles</h3>
                            <p className='p-[3px] rounded-[5px] bg-[#D15439] text-sm'>
                                Chinese
                            </p>
                        </div>
                        <div className='my-4'>
                            <FoodCard
                                title='Don Don Noodles'
                                time='12 min'
                                type='#D15439'
                                calories='75 cal'
                                imageSrc='https://images.pexels.com/photos/5966249/pexels-photo-5966249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            />
                            <FoodCard
                                title='Chow Mein Noodles'
                                time='12 min'
                                type='#D15439'
                                calories='75 cal'
                                imageSrc='https://images.pexels.com/photos/13085835/pexels-photo-13085835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            />
                            <FoodCard
                                title='Lo Mein Noodles'
                                time='12 min'
                                type='#D15439'
                                calories='75 cal'
                                imageSrc='https://images.pexels.com/photos/8992932/pexels-photo-8992932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            />
                        </div>
                        <div className='pt-2 flex items-center justify-start gap-4'>
                            <h3 className='text-xl'>Biryani</h3>
                            <p className='p-[3px] rounded-[5px] bg-[#D15439] text-sm'>
                                Indian
                            </p>
                        </div>
                        <div className='my-4'>
                            <FoodCard
                                title='Hyderabadi Biryani'
                                time='12 min'
                                type='#D15439'
                                calories='75 cal'
                                imageSrc='https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            />
                            <FoodCard
                                title='Lucknowi Biryani'
                                time='12 min'
                                type='#D15439'
                                calories='75 cal'
                                imageSrc='https://images.pexels.com/photos/8688803/pexels-photo-8688803.jpeg?auto=compress&cs=tinysrgb&w=600'
                            />
                            <FoodCard
                                title='Kolkata Biryani'
                                time='12 min'
                                type='#D15439'
                                calories='75 cal'
                                imageSrc='https://images.pexels.com/photos/7426867/pexels-photo-7426867.jpeg?auto=compress&cs=tinysrgb&w=600'
                            />
                        </div>
                        <h3 className='text-xl py-2'>Food Center</h3>
                    </div>
                    <div className='bg-[#0D1317] flex items-center justify-between gap-1 -mx-2 px-4 py-6'>
                        <div className='h-full w-[250px] px-2'>
                            <p className='mb-1 text-[12px]'>
                                27th Jan - 18th Feb
                            </p>
                            <h4 className='text-lg'>UPTO</h4>
                            <h4 className='text-lg'>25% OFF</h4>
                        </div>
                        <div className='flex flex-grow items-center justify-between gap-4 overflow-x-auto scrollbar-hide w-screen px-4'>
                            <OfferCard title='Chinese' />
                            <OfferCard title='Indian' />
                            <OfferCard title='Korean' />
                        </div>
                    </div>
                    <div className='mt-4 flex items-center justify-center'>
                        <motion.button
                            className={`bg-[#D15439] p-2 w-[300px] rounded-lg`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ type: "spring", duration: 0.3 }}
                        >
                            Order Now
                        </motion.button>
                    </div>
                </div>
            </div>
        </main>
    );
}
