/** @format */

import { LuPlus } from "react-icons/lu";

const PlusButton = () => {
    return (
        <button className='bg-[#F9F9F9] bg-opacity-20 flex items-center justify-center inset-0 backdrop-blur-xl h-[43px] w-[43px] rounded-[15px]'>
            <LuPlus size={20} />
        </button>
    );
};

export default PlusButton;
