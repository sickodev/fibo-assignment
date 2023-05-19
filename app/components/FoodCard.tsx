import { PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

type Props = {
    title?: string;
    time?: string;
    type?: string;
    calories?: string;
    imageSrc: string;
};

const FoodCard = ({ title, time, type, calories, imageSrc }: Props) => {
    return (
        <div className='mt-2 bg-[#415663] border-[1.01px] rounded-[12px] opacity-80'>
            <div className='p-3 flex items-center justify-between'>
                <div className='flex items-center gap-6'>
                    <Image
                        src={imageSrc}
                        alt=''
                        height={50}
                        width={50}
                        className='rounded-full'
                    />
                    <div className='flex flex-col gap-y-2'>
                        <p>{title}</p>
                        <div className='flex items-center justify-start gap-2'>
                            <div
                                className={`h-2 w-2 bg-[${type}] rounded-full`}
                            ></div>
                            <p className='text-sm'>{time}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <div className='bg-[#0D1317] py-1 px-3 text-sm rounded-full'>
                        {calories}
                    </div>
                    <PlusIcon className='h-5 w-5 text-center' />
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
