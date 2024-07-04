/** @format */

import { MdOutlineChevronRight } from "react-icons/md";
import { MdOutlineChevronLeft } from "react-icons/md";

function SideHeader({ title }: { title: string }) {
    return (
        <div className='flex items-center gap-5'>
            <div className='flex items-center gap-3'>
                <h1 className='text-2xl font-bold '>{title}</h1>
                <div className='flex items-center gap-1'>
                    <MdOutlineChevronLeft
                        className='text-inactive cursor-pointer'
                        size={24}
                    />
                    <MdOutlineChevronRight
                        className='cursor-pointer'
                        size={24}
                    />
                </div>
            </div>
            <div className='flex items-end cursor-pointer'>
                <span className='text-[15px] text-inactive hover:text-secondary'>
                    See More
                </span>
                <MdOutlineChevronRight size={20} />
            </div>
        </div>
    );
}

export default SideHeader;
