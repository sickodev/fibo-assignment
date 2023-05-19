import React from "react";
import { CiDiscount1 } from "react-icons/ci";

type Props = {};

const OfferCard = (props: Props) => {
    return (
        <div className='px-6 py-2 bg-[#415663] rounded-[10px] w-full flex-grow'>
            <p className='text-sm my-1'>Chinese</p>
            <h3 className='text-xl'>₹299/-</h3>
            <div className='py-1 flex items-center justify-between'>
                <CiDiscount1 className='h-4 w-4' />
                <p className='text-[10px] text-clip whitespace-nowrap'>
                    22% + ₹30 off - Expires in 1h
                </p>
            </div>
        </div>
    );
};

export default OfferCard;
