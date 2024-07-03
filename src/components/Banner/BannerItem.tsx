/** @format */

import WatchButton from "../button";

import { IoIosArrowDown } from "react-icons/io";
import PlusButton from "../button/PlusButton";

type TBannerItem = {
    backgroundUrl: string;
    title: string;
    description: string;
};

function BannerItem({ backgroundUrl, title, description }: TBannerItem) {
    return (
        <div
            className='bg-cover bg-no-repeat w-full relative h-[459px]'
            style={{
                backgroundImage: `url('${backgroundUrl}')`,
            }}
        >
            <div className='h-full w-full px-6 lg:px-12 flex items-center relative'>
                <div className='flex flex-col gap-5'>
                    <div className='max-w-[432px] text-secondary flex flex-col gap-1'>
                        <h1 className='text-2xl lg:text-4xl font-bold'>
                            {title}
                        </h1>
                        <p className='text-lg text-white'>{description}</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <WatchButton />
                        <div className='flex flex-row cursor-pointer items-center bg-[#F9F9F9] bg-opacity-20 gap-2 px-6 py-3 rounded-3xl inset-0 backdrop-blur-xl'>
                            <IoIosArrowDown size={20} />
                            <span>Details</span>
                        </div>
                        <PlusButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerItem;
