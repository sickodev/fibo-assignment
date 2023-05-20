import React from "react";
import { CiDiscount1 } from "react-icons/ci";

type Props = {
    title: string;
};

const OfferCard = ({ title }: Props) => {
    return (
        <div className='px-2 py-2 bg-[#415663] rounded-[10px] w-full flex-grow'>
            <p className='text-[10px] my-1'>{title}</p>
            <h3 className='text-xl'>₹299/-</h3>
            <div className='py-1 flex items-center justify-start gap-1'>
                <CiDiscount1 className='h-8 w-8' />
                <p className='text-[10px] whitespace-nowrap'>
                    22% + ₹30 off - Expires in 1h
                </p>
            </div>
        </div>
    );
};

export default OfferCard;
